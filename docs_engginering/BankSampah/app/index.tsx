import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useAuthStore } from '../stores/authStore';
import { getPostLoginRedirect } from '../lib/auth-guard';

export default function App() {
	const router = useRouter();
	const { user } = useAuthStore();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// Wait for component to mount
		const mountTimer = setTimeout(() => {
			setIsMounted(true);
		}, 100);

		return () => clearTimeout(mountTimer);
	}, []);

	useEffect(() => {
		if (!isMounted) return;

		// Small delay to ensure Root Layout is ready
		const timer = setTimeout(() => {
			// Check if user is logged in
			if (!user) {
				// Not logged in, redirect to login
				router.replace('/auth/login');
			} else {
				// Logged in, check onboarding status and redirect accordingly
				const redirectPath = getPostLoginRedirect();
				router.replace(redirectPath as any);
			}
		}, 200);

		return () => clearTimeout(timer);
	}, [isMounted, user]);

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
			<ActivityIndicator size="large" color="#10B981" />
		</View>
	);
}