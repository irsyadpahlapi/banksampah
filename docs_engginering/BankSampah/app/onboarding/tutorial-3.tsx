import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { useOnboardingStore } from '../../stores/onboardingStore';
import { useAuthStore } from '../../stores/authStore';

export default function TutorialScreen3() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'nasabah' | 'operator' | null>(null);
  const { completeTutorial } = useOnboardingStore();
  const { user, setUser } = useAuthStore();

  const handleSelectRole = (role: 'nasabah' | 'operator') => {
    setSelectedRole(role);
  };

  const handleGetStarted = async () => {
    if (!selectedRole) {
      Alert.alert('Pilih Peran', 'Silakan pilih peran Anda terlebih dahulu');
      return;
    }

    // Update user role in auth store
    if (user) {
      setUser({ ...user, role: selectedRole });
    }

    // Mark tutorial as complete
    completeTutorial();

    // Navigate to location selection
    router.push('/onboarding/location-selection');
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View 
        entering={FadeIn.duration(600)}
        style={styles.content}
      >
        {/* Ilustrasi */}
        <View style={styles.imageContainer}>
          <View style={styles.placeholderImage}>
            <Text style={styles.emojiLarge}>??</Text>
            <Text style={styles.emojiSmall}>??</Text>
          </View>
        </View>

        {/* Judul */}
        <Animated.Text 
          entering={FadeInDown.delay(200).duration(600)}
          style={styles.title}
        >
          Siap Mulai Perjalanan Hijau?
        </Animated.Text>

        {/* Deskripsi */}
        <Animated.Text 
          entering={FadeInDown.delay(400).duration(600)}
          style={styles.description}
        >
          Bergabunglah dengan 10,000+ pejuang lingkungan di Jakarta. Pilih peran Anda dan mulai berkontribusi hari ini!
        </Animated.Text>

        {/* Role Selection */}
        <Animated.View 
          entering={FadeInDown.delay(600).duration(600)}
          style={styles.rolesContainer}
        >
          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'nasabah' && styles.roleCardSelected
            ]}
            onPress={() => handleSelectRole('nasabah')}
            activeOpacity={0.8}
          >
            <Text style={styles.roleIcon}>??</Text>
            <Text style={styles.roleTitle}>Nasabah</Text>
            <Text style={styles.roleDescription}>
              Setor sampah, dapatkan uang, dan pantau dampak lingkungan Anda
            </Text>
            {selectedRole === 'nasabah' && (
              <View style={styles.checkMark}>
                <Text style={styles.checkMarkText}>?</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleCard,
              selectedRole === 'operator' && styles.roleCardSelected
            ]}
            onPress={() => handleSelectRole('operator')}
            activeOpacity={0.8}
          >
            <Text style={styles.roleIcon}>??</Text>
            <Text style={styles.roleTitle}>Operator</Text>
            <Text style={styles.roleDescription}>
              Kelola bank sampah, proses transaksi, dan tingkatkan pendapatan
            </Text>
            {selectedRole === 'operator' && (
              <View style={styles.checkMark}>
                <Text style={styles.checkMarkText}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </Animated.View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
        </View>
      </Animated.View>

      {/* Tombol Get Started */}
      <Animated.View 
        entering={FadeInDown.delay(800).duration(600)}
        style={styles.buttonContainer}
      >
        <TouchableOpacity
          style={[
            styles.button,
            !selectedRole && styles.buttonDisabled
          ]}
          onPress={handleGetStarted}
          activeOpacity={0.8}
          disabled={!selectedRole}
        >
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 32,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#10B981',
    position: 'relative',
  },
  emojiLarge: {
    fontSize: 80,
  },
  emojiSmall: {
    fontSize: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  rolesContainer: {
    width: '100%',
    gap: 16,
  },
  roleCard: {
    backgroundColor: '#F9FAFB',
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    position: 'relative',
  },
  roleCardSelected: {
    borderColor: '#10B981',
    backgroundColor: '#F0FDF4',
  },
  roleIcon: {
    fontSize: 48,
    marginBottom: 12,
    textAlign: 'center',
  },
  roleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  roleDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  checkMark: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMarkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 32,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
  },
  progressDotActive: {
    backgroundColor: '#10B981',
    width: 24,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 32,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
