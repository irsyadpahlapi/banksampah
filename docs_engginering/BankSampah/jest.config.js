module.exports = {
  preset: 'jest-expo',

  transformIgnorePatterns: [
    'node_modules/(?!(' +
      'react-native' +
      '|@react-native' +
      '|expo(nent)?' +
      '|expo-router' +
      '|expo-constants' +
      '|expo-modules-core' +
      '|@expo' +
      '|@unimodules' +
      '|@react-navigation' +
      '|react-navigation' +
      ')/)',
  ],

  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.ts',
  ],
};
