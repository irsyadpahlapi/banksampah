import { renderHook, waitFor } from '@testing-library/react-native';
import { useRequireOnboarding, checkOnboardingComplete, getPostLoginRedirect } from '../lib/auth-guard';
import { useAuthStore } from '../stores/authStore';
import type { User } from '../stores/authStore';

// Mock the modules
jest.mock('expo-router', () => ({
  useRouter: jest.fn(() => ({
    replace: jest.fn(),
  })),
}));

jest.mock('../stores/authStore');

const mockUseAuthStore = useAuthStore as jest.MockedFunction<typeof useAuthStore>;

describe('Auth Guard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('checkOnboardingComplete', () => {
    it('should return false when no user exists', () => {
      (mockUseAuthStore as any).getState = jest.fn(() => ({
        user: null,
      }));

      expect(checkOnboardingComplete()).toBe(false);
    });

    it('should return false when user exists but missing kelurahan_id', () => {
      const mockUser: User = {
        id: 'user-1',
        email: 'test@example.com',
        phone: '+6281234567890',
        nama_lengkap: 'Test User',
        role: 'nasabah',
        unit_id: 'unit-1',
        created_at: new Date().toISOString(),
      };

      (mockUseAuthStore as any).getState = jest.fn(() => ({
        user: mockUser,
      }));

      expect(checkOnboardingComplete()).toBe(false);
    });

    it('should return false when user exists but missing unit_id', () => {
      const mockUser: User = {
        id: 'user-1',
        email: 'test@example.com',
        phone: '+6281234567890',
        nama_lengkap: 'Test User',
        role: 'nasabah',
        kelurahan_id: 'kelurahan-1',
        created_at: new Date().toISOString(),
      };

      (mockUseAuthStore as any).getState = jest.fn(() => ({
        user: mockUser,
      }));

      expect(checkOnboardingComplete()).toBe(false);
    });

    it('should return true when user has both kelurahan_id and unit_id', () => {
      const mockUser: User = {
        id: 'user-1',
        email: 'test@example.com',
        phone: '+6281234567890',
        nama_lengkap: 'Test User',
        role: 'nasabah',
        kelurahan_id: 'kelurahan-1',
        unit_id: 'unit-1',
        created_at: new Date().toISOString(),
      };

      (mockUseAuthStore as any).getState = jest.fn(() => ({
        user: mockUser,
      }));

      expect(checkOnboardingComplete()).toBe(true);
    });
  });

  describe('getPostLoginRedirect', () => {
    it('should return location selection path when onboarding not complete', () => {
      (mockUseAuthStore as any).getState = jest.fn(() => ({
        user: {
          id: 'user-1',
          email: 'test@example.com',
        },
      }));

      expect(getPostLoginRedirect()).toBe('/onboarding/location-selection');
    });

    it('should return home path when onboarding is complete', () => {
      const mockUser: User = {
        id: 'user-1',
        email: 'test@example.com',
        phone: '+6281234567890',
        nama_lengkap: 'Test User',
        role: 'nasabah',
        kelurahan_id: 'kelurahan-1',
        unit_id: 'unit-1',
        created_at: new Date().toISOString(),
      };

      (mockUseAuthStore as any).getState = jest.fn(() => ({
        user: mockUser,
      }));

      expect(getPostLoginRedirect()).toBe('/');
    });
  });

  describe('useRequireOnboarding', () => {
    it('should redirect to login when no user exists', () => {
      const mockRouter = { replace: jest.fn() };
      const { useRouter } = require('expo-router');
      (useRouter as jest.Mock).mockReturnValue(mockRouter);

      mockUseAuthStore.mockReturnValue({
        user: null,
        isOnboardingComplete: false,
      } as any);

      renderHook(() => useRequireOnboarding());

      expect(mockRouter.replace).toHaveBeenCalledWith('/auth/login');
    });

    it('should redirect to location selection when user exists but onboarding not complete', () => {
      const mockRouter = { replace: jest.fn() };
      const { useRouter } = require('expo-router');
      (useRouter as jest.Mock).mockReturnValue(mockRouter);

      const mockUser: User = {
        id: 'user-1',
        email: 'test@example.com',
        phone: '+6281234567890',
        nama_lengkap: 'Test User',
        role: 'nasabah',
        created_at: new Date().toISOString(),
      };

      mockUseAuthStore.mockReturnValue({
        user: mockUser,
        isOnboardingComplete: false,
      } as any);

      renderHook(() => useRequireOnboarding());

      expect(mockRouter.replace).toHaveBeenCalledWith('/onboarding/location-selection');
    });

    it('should not redirect when onboarding is complete', () => {
      const mockRouter = { replace: jest.fn() };
      const { useRouter } = require('expo-router');
      (useRouter as jest.Mock).mockReturnValue(mockRouter);

      const mockUser: User = {
        id: 'user-1',
        email: 'test@example.com',
        phone: '+6281234567890',
        nama_lengkap: 'Test User',
        role: 'nasabah',
        kelurahan_id: 'kelurahan-1',
        unit_id: 'unit-1',
        created_at: new Date().toISOString(),
      };

      mockUseAuthStore.mockReturnValue({
        user: mockUser,
        isOnboardingComplete: true,
      } as any);

      renderHook(() => useRequireOnboarding());

      expect(mockRouter.replace).not.toHaveBeenCalled();
    });
  });
});
