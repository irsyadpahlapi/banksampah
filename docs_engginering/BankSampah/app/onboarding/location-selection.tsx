import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useOnboardingStore } from '../../stores/onboardingStore';
import { useAuthStore } from '../../stores/authStore';
import { fetchKelurahan, fetchBankSampahUnits, saveUserLocation } from '../../lib/supabase';
import type { Kelurahan, BankSampahUnit } from '../../stores/onboardingStore';

export default function LocationSelectionScreen() {
  const router = useRouter();
  
  // State from stores
  const { 
    selectedKelurahan, 
    selectedUnit, 
    setKelurahan, 
    setUnit,
    completeOnboarding: completeOnboardingStore 
  } = useOnboardingStore();

  const { 
    user, 
    setUser,
    completeOnboarding: completeOnboardingAuth 
  } = useAuthStore();

  // Local state
  const [kelurahanList, setKelurahanList] = useState<Kelurahan[]>([]);
  const [unitList, setUnitList] = useState<BankSampahUnit[]>([]);
  const [isLoadingKelurahan, setIsLoadingKelurahan] = useState(true);
  const [isLoadingUnits, setIsLoadingUnits] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch kelurahan on mount
  useEffect(() => {
    loadKelurahan();
  }, []);

  // Fetch units when kelurahan changes
  useEffect(() => {
    if (selectedKelurahan) {
      loadUnits(selectedKelurahan.id);
    } else {
      setUnitList([]);
      setUnit(null);
    }
  }, [selectedKelurahan]);

  const loadKelurahan = async () => {
    try {
      setIsLoadingKelurahan(true);
      const data = await fetchKelurahan();
      setKelurahanList(data);
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Gagal memuat data kelurahan'
      );
    } finally {
      setIsLoadingKelurahan(false);
    }
  };

  const loadUnits = async (kelurahanId: string) => {
    try {
      setIsLoadingUnits(true);
      const data = await fetchBankSampahUnits(kelurahanId);
      setUnitList(data);
      
      if (data.length === 0) {
        Alert.alert(
          'Informasi',
          'Belum tersedia unit bank sampah di kelurahan ini.'
        );
      }
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Gagal memuat data bank sampah'
      );
    } finally {
      setIsLoadingUnits(false);
    }
  };

  const handleKelurahanChange = (kelurahanId: string) => {
    const kelurahan = kelurahanList.find(k => k.id === kelurahanId);
    setKelurahan(kelurahan || null);
  };

  const handleUnitChange = (unitId: string) => {
    const unit = unitList.find(u => u.id === unitId);
    setUnit(unit || null);
  };

  const handleSubmit = async () => {
    // Validation
    if (!selectedKelurahan) {
      Alert.alert('Peringatan', 'Pilih kelurahan terlebih dahulu');
      return;
    }

    if (!selectedUnit) {
      Alert.alert('Peringatan', 'Pilih unit bank sampah terlebih dahulu');
      return;
    }

    // Check if user is logged in
    if (!user || !user.id) {
      Alert.alert('Error', 'Anda harus login terlebih dahulu');
      router.replace('/auth/login');
      return;
    }

    try {
      setIsSaving(true);
      
      // Save location to user profile
      await saveUserLocation(user.id, selectedKelurahan.id, selectedUnit.id);
      
      // Update user object in authStore
      const updatedUser = {
        ...user,
        kelurahan_id: selectedKelurahan.id,
        unit_id: selectedUnit.id,
      };
      setUser(updatedUser);
      
      // Mark onboarding as complete in both stores
      completeOnboardingStore();
      completeOnboardingAuth();
      
      Alert.alert('Berhasil', 'Lokasi berhasil disimpan!');

      // Navigate to dashboard
      router.replace('/dashboard');
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Gagal menyimpan lokasi'
      );
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoadingKelurahan) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#059669" />
        <Text style={styles.loadingText}>Memuat data kelurahan...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Pilih Lokasi Anda</Text>
        <Text style={styles.subtitle}>
          Pilih kelurahan dan unit bank sampah terdekat dengan lokasi Anda
        </Text>
      </View>

      {/* Kelurahan Dropdown */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Kelurahan</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedKelurahan?.id || ''}
            onValueChange={handleKelurahanChange}
            style={styles.picker}
          >
            <Picker.Item label="Pilih Kelurahan" value="" />
            {kelurahanList.map((kelurahan) => (
              <Picker.Item
                key={kelurahan.id}
                label={`${kelurahan.name} - ${kelurahan.kecamatan}`}
                value={kelurahan.id}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* Bank Sampah Unit Dropdown */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Unit Bank Sampah</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedUnit?.id || ''}
            onValueChange={handleUnitChange}
            enabled={!!selectedKelurahan && !isLoadingUnits}
            style={styles.picker}
          >
            <Picker.Item label="Pilih Bank Sampah" value="" />
            {isLoadingUnits ? (
              <Picker.Item label="Memuat..." value="" enabled={false} />
            ) : unitList.length === 0 ? (
              <Picker.Item label="Tidak ada unit tersedia" value="" enabled={false} />
            ) : (
              unitList.map((unit) => (
                <Picker.Item
                  key={unit.id}
                  label={unit.name}
                  value={unit.id}
                />
              ))
            )}
          </Picker>
        </View>
        
        {selectedUnit && (
          <View style={styles.unitDetails}>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Alamat:</Text> {selectedUnit.address}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Operator:</Text> {selectedUnit.operator_name}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.detailLabel}>Telepon:</Text> {selectedUnit.phone}
            </Text>
          </View>
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          (!selectedKelurahan || !selectedUnit || isSaving) && styles.submitButtonDisabled
        ]}
        disabled={!selectedKelurahan || !selectedUnit || isSaving}
        onPress={handleSubmit}
      >
        {isSaving ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Lanjutkan</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 24,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
  },
  picker: {
    height: 50,
  },
  unitDetails: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#059669',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
