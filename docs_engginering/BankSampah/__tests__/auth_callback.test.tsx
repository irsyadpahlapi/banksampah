import React from 'react';
import { render } from '@testing-library/react-native';
import AuthCallback from '../app/auth/callback';

jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: jest.fn() }),
}));
jest.mock('expo-linking', () => ({ addEventListener: jest.fn(() => ({ remove: jest.fn() })) }));
jest.mock('../lib/supabase', () => ({ supabase: { auth: { setSession: jest.fn() } } }));
jest.mock('../stores/authStore', () => ({ useAuthStore: () => ({ setSession: jest.fn(), setUser: jest.fn(), setError: jest.fn() }) }));

describe('AuthCallback', () => {
  it('renders loading indicator', () => {
    const { getByText } = render(<AuthCallback />);
    expect(getByText(/Menyelesaikan login/i)).toBeTruthy();
  });
});
