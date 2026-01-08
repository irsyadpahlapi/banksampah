import 'react-native-gesture-handler/jestSetup';

// Mock expo modules yang sering error
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
}));

jest.mock('expo-asset', () => ({
  Asset: {
    loadAsync: jest.fn(),
  },
}));

jest.mock('expo-modules-core', () => ({
  NativeModulesProxy: {},
}));

jest.mock('expo-router', () => ({
  Tabs: ({ children }: any) => children,
  Stack: ({ children }: any) => children,

  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    setParams: jest.fn(),
  }),

  useSegments: () => [],
  usePathname: () => '/',
  useLocalSearchParams: () => ({}),
}));

jest.mock('expo-constants', () => ({
  default: {
    expoConfig: {},
    manifest: {},
    manifest2: {},
  },
}));

jest.mock('expo-haptics', () => ({
  impactAsync: jest.fn(),
  notificationAsync: jest.fn(),
  selectionAsync: jest.fn(),

  ImpactFeedbackStyle: {
    Light: 'Light',
    Medium: 'Medium',
    Heavy: 'Heavy',
  },

  NotificationFeedbackType: {
    Success: 'Success',
    Warning: 'Warning',
    Error: 'Error',
  },
}));

jest.mock('expo-symbols', () => ({
  SymbolView: () => null,
  SymbolWeight: {
    UltraLight: 'UltraLight',
    Thin: 'Thin',
    Light: 'Light',
    Regular: 'Regular',
    Medium: 'Medium',
    Semibold: 'Semibold',
    Bold: 'Bold',
    Heavy: 'Heavy',
    Black: 'Black',
  },
}));