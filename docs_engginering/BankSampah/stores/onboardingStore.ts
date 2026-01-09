import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Kelurahan {
  id: string;
  name: string;
  kecamatan: string;
  kota: string;
}

export interface BankSampahUnit {
  id: string;
  name: string;
  kelurahan_id: string;
  address: string;
  phone: string;
  operator_name: string;
  is_active: boolean;
}

interface OnboardingState {
  // State
  selectedKelurahan: Kelurahan | null;
  selectedUnit: BankSampahUnit | null;
  isTutorialComplete: boolean;
  isOnboardingComplete: boolean;
  
  // Actions
  setKelurahan: (kelurahan: Kelurahan | null) => void;
  setUnit: (unit: BankSampahUnit | null) => void;
  completeTutorial: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      // Initial state
      selectedKelurahan: null,
      selectedUnit: null,
      isTutorialComplete: false,
      isOnboardingComplete: false,

      // Actions
      setKelurahan: (kelurahan) => 
        set({ 
          selectedKelurahan: kelurahan,
          // Reset unit when kelurahan changes
          selectedUnit: null 
        }),

      setUnit: (unit) => 
        set({ selectedUnit: unit }),

      completeTutorial: () => 
        set({ isTutorialComplete: true }),

      completeOnboarding: () => 
        set({ isOnboardingComplete: true }),

      resetOnboarding: () => 
        set({
          selectedKelurahan: null,
          selectedUnit: null,
          isTutorialComplete: false,
          isOnboardingComplete: false,
        }),
    }),
    {
      name: 'onboarding-storage', // localStorage key
    }
  )
);
