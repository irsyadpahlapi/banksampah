
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator, TextInput, Modal, Pressable } from 'react-native';
import { useAuthStore } from '../../stores/authStore';
import { supabase } from '../../lib/supabase';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [modeLansia] = useState(false); // Integrasi dengan store/uiStore jika sudah ada
  const { signIn, isLoading, error, setError } = useAuthStore();
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpModal, setOtpModal] = useState(false);

  const handleGoogleLogin = async () => {
    setError(null)

    try {
      console.log('MASUK LOGIN WITH GOOGLE')
      const redirectTo = Linking.createURL('auth/callback')
      console.log('REDIRECT TO ===>', redirectTo)
      const { data, error: supaError } =
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo,
          },
        })

      console.log('SETELAH LOGIN WITH GOOGLE')
      console.log('supaError:', supaError)
      console.log('oauth url:', data?.url)

      if (supaError) {
        setError(supaError.message)
        return
      }

      if (data?.url) {
        await WebBrowser.openAuthSessionAsync(
          data.url,
          redirectTo
        )
      }
    } catch (e: any) {
      console.error(e)
      setError(e.message || 'Login Google gagal')
    }
  };

  const handleOtpLogin = async () => {
    setError(null);
    if (!phone) {
      setError('Masukkan nomor HP terlebih dahulu');
      return;
    }
    try {
      const { error: supaError } = await supabase.auth.signInWithOtp({ phone });
      if (supaError) setError(supaError.message);
      else {
        setOtpSent(true);
        setOtpModal(true);
      }
    } catch (e: any) {
      setError(e.message || 'Login OTP gagal');
    }
  };

  const handleVerifyOtp = async () => {
    setError(null);
    if (!otp) {
      setError('Masukkan kode OTP');
      return;
    }
    try {
      const { data, error: supaError } = await supabase.auth.verifyOtp({ phone, token: otp, type: 'sms' });
      if (supaError) setError(supaError.message);
      else {
        setOtpModal(false);
        Alert.alert('Login berhasil', 'Anda berhasil login.');
      }
    } catch (e: any) {
      setError(e.message || 'Verifikasi OTP gagal');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, modeLansia && styles.lansiaFont]}>Login Bank Sampah</Text>
    
    
      <View style={{ width: '100%', marginVertical: 8 }}>
        <TextInput
          style={[styles.input, modeLansia && styles.lansiaFont]}
          placeholder="Nomor HP (format: +62...)"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          editable={!isLoading}
        />
        
      </View>
        {error ? (
        <Text style={{ color: 'red', marginBottom: 12 }}>{error}</Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleOtpLogin} disabled={isLoading}>
        <Text style={[styles.buttonText, modeLansia && styles.lansiaFont]}>Kirim OTP</Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator size="large" color="#2ecc40" style={{ marginTop: 16 }} />}

      {/* Modal input OTP */}
      <Modal visible={otpModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>Masukkan Kode OTP</Text>
            <TextInput
              style={styles.input}
              placeholder="Kode OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
              maxLength={6}
            />
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
              <Pressable style={[styles.button, { flex: 1, marginRight: 8 }]} onPress={handleVerifyOtp}>
                <Text style={styles.buttonText}>Verifikasi</Text>
              </Pressable>
              <Pressable style={[styles.button, { flex: 1, backgroundColor: '#aaa' }]} onPress={() => setOtpModal(false)}>
                <Text style={styles.buttonText}>Batal</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
        <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogleLogin} disabled={isLoading}>
        <Text style={[styles.buttonText, modeLansia && styles.lansiaFont]}>Login dengan Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#2ecc40',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
  },
   buttonGoogle: {
    backgroundColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lansiaFont: {
    fontSize: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#fafafa',
    marginBottom: 4,
    width: '100%',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});