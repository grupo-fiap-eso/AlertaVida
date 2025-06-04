// src/screens/TelaInicial.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

export default function TelaInicial({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao AlertaVida!</Text>
      <Button title="Ir para Mapa de Riscos" onPress={() => navigation.navigate('MapaRiscos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
