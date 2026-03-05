import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HapticTab } from '../components/haptic-tab';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  ImpactFeedbackStyle: { Light: 'Light' },
}));

describe('HapticTab (iOS)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.EXPO_OS = 'ios';
  });

  afterEach(() => {
    delete process.env.EXPO_OS;
  });

  it('calls haptic feedback on iOS pressIn', () => {
    const onPressIn = jest.fn();
    const { UNSAFE_getAllByType } = render(
      <NavigationContainer>
        <HapticTab onPressIn={onPressIn} accessibilityRole="button" children={undefined} />
      </NavigationContainer>
    );
    const pressable = UNSAFE_getAllByType(require('@react-navigation/elements').PlatformPressable)[0];
    fireEvent(pressable, 'pressIn');
    expect(require('expo-haptics').impactAsync).toHaveBeenCalledWith('Light');
    expect(onPressIn).toHaveBeenCalled();
  });
});