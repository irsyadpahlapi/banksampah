import React from 'react';
import { render } from '@testing-library/react-native';
import Logout from '../app/dashboard/logout';

jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: jest.fn() }),
}));
jest.mock('../lib/supabase', () => ({ supabase: { auth: { signOut: jest.fn() } } }));
jest.mock('../stores/authStore', () => ({ useAuthStore: () => ({ setSession: jest.fn(), setUser: jest.fn(), setError: jest.fn() }) }));

describe('Logout', () => {
  it('renders loading indicator', () => {
    const { getByText } = render(<Logout />);
    expect(getByText(/Menyelesaikan logout/i)).toBeTruthy();
  });
});
