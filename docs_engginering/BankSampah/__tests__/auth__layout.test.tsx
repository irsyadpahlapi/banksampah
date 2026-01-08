import React from 'react';
import { render } from '@testing-library/react-native';
import TabLayout from '../app/auth/_layout';

jest.mock('expo-router', () => {
  const React = require('react');
  const { View, Text } = require('react-native');

  const Tabs = ({ children }: any) => <View>{children}</View>;

  Tabs.Screen = ({ options }: any) => (
    <Text>{options?.title ?? options?.tabBarLabel}</Text>
  );

  const Stack = ({ children }: any) => <View>{children}</View>;
  Stack.Screen = () => null;

  return {
    Tabs,
    Stack,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    }),
    useSegments: () => [],
    usePathname: () => '/',
    useLocalSearchParams: () => ({}),
  };
});

describe('TabLayout', () => {
  it('renders all main tabs', () => {
    const { getByText } = render(<TabLayout />);
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
    expect(getByText('Logout')).toBeTruthy();
    // Callback tab is hidden (href: null), so not visible
  });
});
