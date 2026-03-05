import React from 'react';
import { render } from '@testing-library/react-native';
import RootLayout from '../app/_layout';

jest.mock('expo-router', () => ({ Stack: ({ children }: any) => <>{children}</> }));
jest.mock('@react-navigation/native', () => ({
  DarkTheme: {},
  DefaultTheme: {},
  ThemeProvider: ({ children }: any) => <>{children}</>,
}));
jest.mock('expo-status-bar', () => ({ StatusBar: () => null }));
jest.mock('../hooks/use-color-scheme', () => ({ useColorScheme: () => 'light' }));
jest.mock('react-native-reanimated', () => ({}));

describe('RootLayout (_layout)', () => {
  it('renders without crashing', () => {
    render(<RootLayout />);
  });
});
