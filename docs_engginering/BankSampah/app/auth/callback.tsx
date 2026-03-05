import { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../stores/authStore';
import { getPostLoginRedirect } from '../../lib/auth-guard';
import * as Linking from 'expo-linking';

export default function AuthCallback() {
  const router = useRouter();
  const { setError, setSession, setUser } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);

  console.log('=== AuthCallback component rendered ===');

  useEffect(() => {
    console.log('=== AuthCallback mount effect started ===');
    // Wait for component to mount
    const mountTimer = setTimeout(() => {
      console.log('=== AuthCallback setting isMounted to true ===');
      setIsMounted(true);
    }, 100);

    return () => {
      console.log('=== AuthCallback mount effect cleanup ===');
      clearTimeout(mountTimer);
    };
  }, []);

  useEffect(() => {
    console.log('=== AuthCallback deep link effect, isMounted:', isMounted);
    if (!isMounted) {
      console.log('=== Waiting for mount, skipping deep link setup ===');
      return;
    }

    console.log('=== Setting up deep link handlers ===');
    let isProcessing = false;

    const handleDeepLink = async (url: string) => {
      console.log('=== handleDeepLink called with URL:', url);
      
      if (isProcessing) {
        console.log('=== Already processing deep link, skipping... ===');
        return;
      }

      console.log('=== Deep link received in AuthCallback:', url);
      const hash = url.split('#')[1];
      console.log('=== Hash extracted:', hash);
      
      if (hash) {
        isProcessing = true;
        console.log('=== Starting to process hash ===');
        
        const params = new URLSearchParams(hash);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');
        
        console.log('=== Tokens extracted, access_token exists:', !!access_token, 'refresh_token exists:', !!refresh_token);
        
        if (access_token && refresh_token) {
          console.log('=== Calling supabase.auth.setSession ===');
          
          const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });
          
          if (error) {
            console.log('=== Set session error:', error);
            setError(error.message);
            isProcessing = false;
          } else {
            console.log('=== Session data received:', data);
            console.log('=== Calling setSession and setUser ===');
            setSession(data.session as any);
            setUser(data.user as any);
            console.log('=== Session set, waiting 300ms before redirect ===');
            
            // Wait a bit before navigation to ensure Root Layout is ready
            setTimeout(() => {
              console.log('=== Calling getPostLoginRedirect ===');
              const redirectPath = getPostLoginRedirect();
              console.log('=== Redirecting to:', redirectPath);
              router.replace(redirectPath as any);
              console.log('=== router.replace called ===');
            }, 300);
          }
        } else {
          console.log('=== No tokens found in URL, setting isProcessing to false ===');
          isProcessing = false;
        }
      } else {
        console.log('=== No hash found in URL ===');
      }
    };

    // Check initial URL (when app opens from deep link)
    console.log('=== Checking initial URL ===');
    Linking.getInitialURL().then(url => {
      console.log('=== Initial URL:', url);
      if (url) {
        console.log('=== Initial URL exists, handling deep link ===');
        handleDeepLink(url);
      } else {
        console.log('=== No initial URL found ===');
      }
    });

    // Listen for URL changes
    console.log('=== Setting up URL event listener ===');
    const subscription = Linking.addEventListener('url', (event) => {
      console.log('=== URL event received:', event.url);
      handleDeepLink(event.url);
    });

    return () => {
      console.log('=== Cleaning up deep link handlers ===');
      subscription.remove();
    };
  }, [isMounted, router, setError, setSession, setUser]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#2ecc40" />
      <Text style={{ marginTop: 16 }}>Menyelesaikan login...</Text>
    </View>
  );
}