import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Alert} from 'react-native';
import {auth, db} from '../services/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // 1. Autenticar
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        senha,
      );
      const user = userCredential.user;

      // 2. Buscar perfil no Firestore
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const perfil = userSnap.data().perfil;

        // 3. Redirecionar com base no perfil
        if (perfil === 'afetado') {
          navigation.navigate('MapaRiscos');
        } else if (perfil === 'voluntario') {
          navigation.navigate('Comunidade');
        } else if (perfil === 'admin') {
          navigation.navigate('TelaInicial');
        } else {
          Alert.alert('Erro', 'Perfil de usuário não reconhecido.');
        }
      } else {
        Alert.alert('Erro', 'Dados do usuário não encontrados.');
      }
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>AlertaVida - Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  titulo: {fontSize: 24, marginBottom: 20, textAlign: 'center'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  erro: {color: 'red', marginBottom: 10, textAlign: 'center'},
});

export default LoginScreen;
