import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { StyleSheet } from 'react-native';


export default function Perfil() {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(true);

  const toggleNotification = () => setIsNotificationEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/avatar.png')} // Coloque uma imagem na pasta assets com nome avatar.png
          style={styles.avatar}
        />
        <Text style={styles.name}>Olá, João Silva</Text>
        <Text style={styles.role}>Voluntário</Text>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Meus Alertas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Minhas Doações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Histórico de Ajuda</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.menuText}>Receber Notificações</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#1E90FF' }}
            thumbColor={isNotificationEnabled ? '#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleNotification}
            value={isNotificationEnabled}
          />
        </View>

        <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#FF6961' }]}>
          <Text style={[styles.menuText, { color: 'white' }]}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 16,
    color: '#777',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    gap: 15,
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#f0f0f5',
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f5',
    borderRadius: 8,
  },
});
