import { useOnboardingStore } from '../stores/onboardingStore';
import type { Kelurahan, BankSampahUnit } from '../stores/onboardingStore';

describe('onboardingStore', () => {
  beforeEach(() => {
    // Reset store before each test
    useOnboardingStore.getState().resetOnboarding();
  });

  describe('Initial State', () => {
    it('should have null kelurahan and unit initially', () => {
      const { selectedKelurahan, selectedUnit, isOnboardingComplete } = useOnboardingStore.getState();
      
      expect(selectedKelurahan).toBeNull();
      expect(selectedUnit).toBeNull();
      expect(isOnboardingComplete).toBe(false);
    });
  });

  describe('setKelurahan', () => {
    it('should set selected kelurahan', () => {
      const mockKelurahan: Kelurahan = {
        id: 'kelurahan-1',
        name: 'Kebon Jeruk',
        kecamatan: 'Kebon Jeruk',
        kota: 'Jakarta Barat',
      };

      useOnboardingStore.getState().setKelurahan(mockKelurahan);

      const { selectedKelurahan } = useOnboardingStore.getState();
      expect(selectedKelurahan).toEqual(mockKelurahan);
    });

    it('should reset unit when kelurahan changes', () => {
      const mockKelurahan1: Kelurahan = {
        id: 'kelurahan-1',
        name: 'Kebon Jeruk',
        kecamatan: 'Kebon Jeruk',
        kota: 'Jakarta Barat',
      };

      const mockUnit: BankSampahUnit = {
        id: 'unit-1',
        name: 'Bank Sampah Test',
        kelurahan_id: 'kelurahan-1',
        address: 'Jl. Test No. 1',
        phone: '081234567890',
        operator_name: 'Test Operator',
        is_active: true,
      };

      // Set kelurahan and unit
      useOnboardingStore.getState().setKelurahan(mockKelurahan1);
      useOnboardingStore.getState().setUnit(mockUnit);

      expect(useOnboardingStore.getState().selectedUnit).toEqual(mockUnit);

      // Change kelurahan
      const mockKelurahan2: Kelurahan = {
        id: 'kelurahan-2',
        name: 'Tanah Abang',
        kecamatan: 'Tanah Abang',
        kota: 'Jakarta Pusat',
      };

      useOnboardingStore.getState().setKelurahan(mockKelurahan2);

      // Unit should be reset
      expect(useOnboardingStore.getState().selectedUnit).toBeNull();
    });

    it('should allow setting kelurahan to null', () => {
      const mockKelurahan: Kelurahan = {
        id: 'kelurahan-1',
        name: 'Kebon Jeruk',
        kecamatan: 'Kebon Jeruk',
        kota: 'Jakarta Barat',
      };

      useOnboardingStore.getState().setKelurahan(mockKelurahan);
      expect(useOnboardingStore.getState().selectedKelurahan).toEqual(mockKelurahan);

      useOnboardingStore.getState().setKelurahan(null);
      expect(useOnboardingStore.getState().selectedKelurahan).toBeNull();
    });
  });

  describe('setUnit', () => {
    it('should set selected unit', () => {
      const mockUnit: BankSampahUnit = {
        id: 'unit-1',
        name: 'Bank Sampah Test',
        kelurahan_id: 'kelurahan-1',
        address: 'Jl. Test No. 1',
        phone: '081234567890',
        operator_name: 'Test Operator',
        is_active: true,
      };

      useOnboardingStore.getState().setUnit(mockUnit);

      const { selectedUnit } = useOnboardingStore.getState();
      expect(selectedUnit).toEqual(mockUnit);
    });

    it('should allow setting unit to null', () => {
      const mockUnit: BankSampahUnit = {
        id: 'unit-1',
        name: 'Bank Sampah Test',
        kelurahan_id: 'kelurahan-1',
        address: 'Jl. Test No. 1',
        phone: '081234567890',
        operator_name: 'Test Operator',
        is_active: true,
      };

      useOnboardingStore.getState().setUnit(mockUnit);
      expect(useOnboardingStore.getState().selectedUnit).toEqual(mockUnit);

      useOnboardingStore.getState().setUnit(null);
      expect(useOnboardingStore.getState().selectedUnit).toBeNull();
    });
  });

  describe('completeOnboarding', () => {
    it('should mark onboarding as complete', () => {
      expect(useOnboardingStore.getState().isOnboardingComplete).toBe(false);

      useOnboardingStore.getState().completeOnboarding();

      expect(useOnboardingStore.getState().isOnboardingComplete).toBe(true);
    });
  });

  describe('resetOnboarding', () => {
    it('should reset all onboarding state', () => {
      const mockKelurahan: Kelurahan = {
        id: 'kelurahan-1',
        name: 'Kebon Jeruk',
        kecamatan: 'Kebon Jeruk',
        kota: 'Jakarta Barat',
      };

      const mockUnit: BankSampahUnit = {
        id: 'unit-1',
        name: 'Bank Sampah Test',
        kelurahan_id: 'kelurahan-1',
        address: 'Jl. Test No. 1',
        phone: '081234567890',
        operator_name: 'Test Operator',
        is_active: true,
      };

      // Set all values
      useOnboardingStore.getState().setKelurahan(mockKelurahan);
      useOnboardingStore.getState().setUnit(mockUnit);
      useOnboardingStore.getState().completeOnboarding();

      expect(useOnboardingStore.getState().selectedKelurahan).toEqual(mockKelurahan);
      expect(useOnboardingStore.getState().selectedUnit).toEqual(mockUnit);
      expect(useOnboardingStore.getState().isOnboardingComplete).toBe(true);

      // Reset
      useOnboardingStore.getState().resetOnboarding();

      expect(useOnboardingStore.getState().selectedKelurahan).toBeNull();
      expect(useOnboardingStore.getState().selectedUnit).toBeNull();
      expect(useOnboardingStore.getState().isOnboardingComplete).toBe(false);
    });
  });

  describe('Workflow', () => {
    it('should handle complete onboarding workflow', () => {
      const mockKelurahan: Kelurahan = {
        id: 'kelurahan-1',
        name: 'Kebon Jeruk',
        kecamatan: 'Kebon Jeruk',
        kota: 'Jakarta Barat',
      };

      const mockUnit: BankSampahUnit = {
        id: 'unit-1',
        name: 'Bank Sampah Test',
        kelurahan_id: 'kelurahan-1',
        address: 'Jl. Test No. 1',
        phone: '081234567890',
        operator_name: 'Test Operator',
        is_active: true,
      };

      // Step 1: Select kelurahan
      useOnboardingStore.getState().setKelurahan(mockKelurahan);
      expect(useOnboardingStore.getState().selectedKelurahan).toEqual(mockKelurahan);
      expect(useOnboardingStore.getState().selectedUnit).toBeNull();

      // Step 2: Select unit
      useOnboardingStore.getState().setUnit(mockUnit);
      expect(useOnboardingStore.getState().selectedUnit).toEqual(mockUnit);

      // Step 3: Complete onboarding
      useOnboardingStore.getState().completeOnboarding();
      expect(useOnboardingStore.getState().isOnboardingComplete).toBe(true);
    });
  });
});
