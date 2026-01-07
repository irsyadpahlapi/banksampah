import { create } from 'zustand';

type User = {
  id: string;
  email: string;
  role?: string;
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
  signIn: (provider: 'google' | 'otp', payload?: any) => Promise<void>;
  signOut: () => Promise<void>;
  setError: (msg: string | null) => void;
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  isLoading: false,
  error: null,
  signIn: async (provider: 'google' | 'otp', payload?: any) => {
    set({ isLoading: true, error: null });
    // Implementasi login Supabase di sini jika perlu
    set({ isLoading: false });
  },
  signOut: async () => {
    set({ user: null, session: null });
    // Implementasi signOut Supabase di sini jika perlu
  },
  setError: (msg: string | null) => set({ error: msg }),
  setSession: (session: Session | null) => set({ session }),
  setUser: (user: User | null) => set({ user }),
}));