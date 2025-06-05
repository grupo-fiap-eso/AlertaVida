import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Comunidade() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState<string[]>([]);

  const enviarMensagem = () => {
    if (mensagem.trim()) {
      setMensagens((prev) => [mensagem, ...prev]);
      setMensagem('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mensagens}
        keyExtractor={(item, index) => index.toString()}
        inverted
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
        />
        <Button title="Enviar" onPress={enviarMensagem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  message: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  input: {
    flex: 1,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
});
