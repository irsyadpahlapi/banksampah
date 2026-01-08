import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from '../app/auth/login';

jest.mock('../lib/supabase', () => ({ supabase: { auth: { signInWithOtp: jest.fn(), signInWithOAuth: jest.fn() } } }));
jest.mock('expo-web-browser', () => ({ maybeCompleteAuthSession: jest.fn() }));
jest.mock('expo-linking', () => ({ addEventListener: jest.fn(), openURL: jest.fn() }));

describe('LoginScreen', () => {
  it('renders login screen', () => {
    const { getByText } = render(<LoginScreen />);
    expect(getByText(/Login dengan Google/i)).toBeTruthy();
    expect(getByText(/Kirim OTP/i)).toBeTruthy();
  });
});
