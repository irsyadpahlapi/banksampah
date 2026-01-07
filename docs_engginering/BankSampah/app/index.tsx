import { Slot } from 'expo-router';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
export default function App() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ marginTop: 16 }}>LANDING PAGE BANK SAMPAH</Text>
			<TouchableOpacity
				style={[styles.button, { backgroundColor: '#0074D9' }]}
				onPress={() => {
					Linking.openURL('banksampah://auth');
				}}
			>
				<Text style={styles.buttonText}>MASUK KE DASHBOARD</Text>
			</TouchableOpacity>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 24,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 32,
	},
	button: {
		backgroundColor: '#2ecc40',
		paddingVertical: 14,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginVertical: 8,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	lansiaFont: {
		fontSize: 28,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 12,
		fontSize: 18,
		backgroundColor: '#fafafa',
		marginBottom: 4,
		width: '100%',
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 24,
		width: 300,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
	},
});