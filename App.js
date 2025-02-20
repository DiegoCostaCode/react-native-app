import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BiggestNumber from './components/biggest-number';

import NegativeNumber from './components/negative-number';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aula 20/02</Text>

      <BiggestNumber numero1={4} numero2={2} numero3={10} />

      <NegativeNumber numero={-5} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
