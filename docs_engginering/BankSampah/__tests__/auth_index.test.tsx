import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../app/auth/index';

jest.mock('expo-router', () => ({
  useRouter: () => ({ replace: jest.fn() }),
}));
jest.mock('@/stores/authStore', () => ({ useAuthStore: () => ({ user: { id: 1, email: 'test@test.com' } }) }));

describe('Dashboard (auth/index)', () => {
  it('renders dashboard text', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/MASUK DASHBOARD/i)).toBeTruthy();
  });
});
