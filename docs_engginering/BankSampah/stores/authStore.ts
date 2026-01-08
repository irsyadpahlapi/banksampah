import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: string;
  email: string;
  phone?: string;
  role?: string;
  full_name?: string;
  kelurahan_id?: string;
  unit_id?: string;
  mode_lansia_enabled?: boolean;
  created_at?: string;
  updated_at?: string;
  [key: string]: any;
};

type Session = {
  access_token: string;
  refresh_token: string;
  user: User;
  [key: string]: any;
};

type AuthState = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: string | null;
  isOnboardingComplete: boolean;
  signIn: (provider: 'google' | 'otp', payload?: any) => Promise<void>;
  signOut: () => Promise<void>;
  setError: (msg: string | null) => void;
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  checkOnboardingStatus: () => boolean;
  completeOnboarding: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      session: null,
      isLoading: false,
      error: null,
      isOnboardingComplete: false,

      signIn: async (provider: 'google' | 'otp', payload?: any) => {
        set({ isLoading: true, error: null });
        // Implementasi login Supabase di sini jika perlu
        set({ isLoading: false });
      },

      signOut: async () => {
        set({ 
          user: null, 
          session: null,
          isOnboardingComplete: false,
        });
        // Implementasi signOut Supabase di sini jika perlu
      },

      setError: (msg: string | null) => set({ error: msg }),

      setSession: (session: Session | null) => {
        set({ session });
        if (session?.user) {
          set({ user: session.user });
          // Check if user has completed onboarding
          const hasLocation = !!(session.user.kelurahan_id && session.user.unit_id);
          set({ isOnboardingComplete: hasLocation });
        }
      },

      setUser: (user: User | null) => {
        set({ user });
        if (user) {
          // Check if user has completed onboarding
          const hasLocation = !!(user.kelurahan_id && user.unit_id);
          set({ isOnboardingComplete: hasLocation });
        }
      },

      checkOnboardingStatus: () => {
        const { user } = get();
        if (!user) return false;
        return !!(user.kelurahan_id && user.unit_id);
      },

      completeOnboarding: () => {
        set({ isOnboardingComplete: true });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);