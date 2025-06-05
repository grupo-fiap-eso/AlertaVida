import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const alertas = [
  { id: '1', titulo: 'Risco de enchente', descricao: 'Nível do rio subindo no bairro Centro.' },
  { id: '2', titulo: 'Aviso de chuva forte', descricao: 'Previsão de 50mm nas próximas horas.' },
];

export default function Alertas() {
  return (
    <View style={styles.container}>
      <FlatList
        data={alertas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertCard}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  alertCard: {
    backgroundColor: '#ffe4e1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
