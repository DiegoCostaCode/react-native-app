import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, TextInput, View } from 'react-native';

export default function App() {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  function notificacao(name, email) {
    Alert.alert('Olá, ' + name + '\nVocê foi cadastrado no e-mail ' + email);
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/bala-no-alvo.png')} 
        style={styles.image} 
      />

      <TextInput 
        style={styles.input} 
        placeholder='Digite seu nome'
        placeholderTextColor="#8b4513"
        maxLength={30}
        value={Name}
        onChangeText={text => setName(text)}
      />

      <TextInput 
        style={styles.input} 
        placeholder='Digite seu e-mail'
        placeholderTextColor="#8b4513"
        keyboardType="email-address"
        maxLength={100}
        value={Email}
        onChangeText={text => setEmail(text)}
      />

      <Button
        onPress={() => notificacao(Name, Email)}
        title="Cadastrar"
        color="#8b4513"
        accessibilityLabel="Enviar dados de nome e email"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  input: {
    borderWidth: 3,
    borderColor: '#8b4513',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    color: '#8b4513',
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    borderRadius: 5,
    width: 150,
    height: 150,
  },
});