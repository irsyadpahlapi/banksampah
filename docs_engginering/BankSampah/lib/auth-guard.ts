import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

/**
 * Hook to check if user needs to complete onboarding
 * Redirects to location selection if onboarding not complete
 */
export function useRequireOnboarding() {
  const router = useRouter();
  const { user, isOnboardingComplete } = useAuthStore();

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      router.replace('/auth/login');
      return;
    }

    // Check if onboarding is complete
    if (!isOnboardingComplete) {
      router.replace('/onboarding/location-selection');
    }
  }, [user, isOnboardingComplete]);

  return { user, isOnboardingComplete };
}

/**
 * Check if user has completed onboarding
 * @returns boolean - true if onboarding is complete
 */
export function checkOnboardingComplete(): boolean {
  const { user } = useAuthStore.getState();
  if (!user) return false;
  return !!(user.kelurahan_id && user.unit_id);
}

/**
 * Get the appropriate redirect path after login
 * @returns string - path to redirect to
 */
export function getPostLoginRedirect(): string {
  const isComplete = checkOnboardingComplete();
  return isComplete ? '/' : '/onboarding/location-selection';
}
