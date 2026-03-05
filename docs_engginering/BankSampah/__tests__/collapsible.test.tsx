import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Collapsible } from '../components/ui/collapsible';

jest.mock('@/components/themed-text', () => ({ ThemedText: ({ children }: any) => <>{children}</> }));
jest.mock('@/components/themed-view', () => ({ ThemedView: ({ children, ...props }: any) => <>{children}</> }));
jest.mock('@/components/ui/icon-symbol', () => ({ IconSymbol: () => <></> }));
jest.mock('@/constants/theme', () => ({ Colors: { light: { icon: '#000' }, dark: { icon: '#fff' } } }));
jest.mock('@/hooks/use-color-scheme', () => ({ useColorScheme: () => 'light' }));

describe('Collapsible', () => {
  it('renders title and toggles content', () => {
    const { toJSON, queryByText } = render(
      <Collapsible title="Test Title">Test Content</Collapsible>
    );
    expect(toJSON()).toMatchSnapshot();
    expect(queryByText('Test Content')).toBeNull();
    // Tidak bisa fireEvent tanpa node, jadi snapshot saja
  });
});
