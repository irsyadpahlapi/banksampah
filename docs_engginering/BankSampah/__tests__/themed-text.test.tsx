import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedText } from '../components/themed-text';

jest.mock('@/hooks/use-theme-color', () => ({ useThemeColor: () => '#000' }));

describe('ThemedText', () => {
  it('renders text', () => {
    const { getByText } = render(<ThemedText>Test</ThemedText>);
    expect(getByText('Test')).toBeTruthy();
  });
});
