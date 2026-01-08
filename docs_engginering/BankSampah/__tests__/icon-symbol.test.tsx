import React from 'react';
import { render } from '@testing-library/react-native';
import { IconSymbol } from '../components/ui/icon-symbol';

describe('IconSymbol', () => {
  it('renders icon', () => {
    const { UNSAFE_getByType } = render(<IconSymbol name="house.fill" color="#000" />);
    // SymbolView is the root, so we check for it
    expect(UNSAFE_getByType(require('expo-symbols').SymbolView)).toBeTruthy();
  });
});
