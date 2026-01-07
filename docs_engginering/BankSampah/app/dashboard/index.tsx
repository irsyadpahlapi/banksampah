import { View, ActivityIndicator, Text } from 'react-native';

export default function Dashboard() {
  console.log('MASUK DASHBAORD');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 16 }}>MASUK DASHBOARD</Text>
    </View>
  );
}