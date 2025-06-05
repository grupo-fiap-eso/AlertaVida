import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const doacoes = [
  { id: '1', item: 'Água potável', quantidade: '20 garrafas' },
  { id: '2', item: 'Roupas', quantidade: '50 unidades' },
];

export default function Doacoes() {
  return (
    <View style={styles.container}>
      <FlatList
        data={doacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.item}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Button title="Quero Ajudar" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: '#e8f5e9',
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
