import { useAuthStore } from '../stores/authStore';
import { useOnboardingStore } from '../stores/onboardingStore';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

/**
 * Hook to check if user needs to complete onboarding
 * Redirects to tutorial or location selection based on progress
 */
export function useRequireOnboarding() {
  const router = useRouter();
  const { user, isOnboardingComplete } = useAuthStore();
  const { isTutorialComplete } = useOnboardingStore();

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      router.replace('/auth/login');
      return;
    }

    // Check tutorial completion first
    if (!isTutorialComplete) {
      router.replace('/onboarding/tutorial-1');
      return;
    }

    // Then check if onboarding (location selection) is complete
    if (!isOnboardingComplete) {
      router.replace('/onboarding/location-selection');
    }
  }, [user, isTutorialComplete, isOnboardingComplete]);

  return { user, isTutorialComplete, isOnboardingComplete };
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
  const { isTutorialComplete } = useOnboardingStore.getState();
  
  console.log('=== getPostLoginRedirect DEBUG ===');
  console.log('isTutorialComplete:', isTutorialComplete);
  
  // First-time users: show tutorial
  if (!isTutorialComplete) {
    console.log('Redirecting to: /onboarding/tutorial-1');
    return '/onboarding/tutorial-1';
  }
  
  // Tutorial done but location not selected
  const isComplete = checkOnboardingComplete();
  console.log('checkOnboardingComplete:', isComplete);
  console.log('Redirecting to:', isComplete ? '/dashboard' : '/onboarding/location-selection');
  return isComplete ? '/dashboard' : '/onboarding/location-selection';
}
