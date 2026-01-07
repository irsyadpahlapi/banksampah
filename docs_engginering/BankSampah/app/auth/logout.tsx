
import { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../stores/authStore';

export default function Logout() {
  const router = useRouter();
  const { setSession, setUser, setError } = useAuthStore();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await supabase.auth.signOut();
        setSession(null);
        setUser(null);
        setError(null);
        router.replace('/auth/login');
      } catch (err: any) {
        setError(err?.message || 'Logout error');
      }
    };
    doLogout();
  }, [router, setSession, setUser, setError]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#2ecc40" />
      <Text style={{ marginTop: 16 }}>Menyelesaikan logout...</Text>
    </View>
  );
}