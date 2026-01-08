import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedView } from '../components/themed-view';
import { Text } from 'react-native';

jest.mock('../hooks/use-theme-color', () => ({ useThemeColor: () => '#fff' }));

describe('ThemedView', () => {
  it('renders children', () => {
    const { getByText } = render(<ThemedView><Text>Test</Text></ThemedView>);
    expect(getByText('Test')).toBeTruthy();
  });
});
