import { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../stores/authStore';
import * as Linking from 'expo-linking';

export default function AuthCallback() {
  const router = useRouter();
  const { setError, setSession, setUser } = useAuthStore();

  useEffect(() => {
    const subscription = Linking.addEventListener('url', async (event) => {
      console.log('Deep link received in AuthCallback:', event.url);
      const hash = event.url.split('#')[1];
      if (hash) {
        const params = new URLSearchParams(hash);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');
        if (access_token && refresh_token) {
          const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });
          if (error) {
            setError(error.message);
            console.log('Set session error:', error);
          } else {
            console.log('Session data received:', data);
            setSession(data.session as any);
            setUser(data.user as any);
            console.log('Session set:', data.session);
            router.replace('/auth');
          }
        }
      }
    });
    return () => subscription.remove();
  }, [router, setError, setSession, setUser]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#2ecc40" />
      <Text style={{ marginTop: 16 }}>Menyelesaikan login...</Text>
    </View>
  );
}