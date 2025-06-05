import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="cloud-outline" size={32} color="#0077B6" />
        <Text style={styles.headerTitle}>AlertaVida</Text>
      </View>
      <Text style={styles.region}>Região: Bairro São José</Text>
      <Text style={styles.status}>🚫 Sem riscos no momento</Text>

      {/* Mini mapa */}
      <View style={styles.mapPreview}>
        <Image
          source={{ uri: 'https://i.imgur.com/7v3AjAq.png' }}
          style={styles.mapImage}
        />
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText}>Ver mapa completo</Text>
        </TouchableOpacity>
      </View>

      {/* Alertas */}
      <Text style={styles.sectionTitle}>🚨 Alertas</Text>
      <View style={styles.alertContainer}>
        <View style={styles.alertCard}>
          <MaterialIcons name="warning" size={24} color="#EF476F" />
          <Text style={styles.alertText}>Chuva intensa</Text>
        </View>
        <View style={styles.alertCard}>
          <MaterialIcons name="warning" size={24} color="#FFD166" />
          <Text style={styles.alertText}>Risco de alagamento</Text>
        </View>
      </View>

      {/* Ações rápidas */}
      <Text style={styles.sectionTitle}>🤝 Ações rápidas</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5 name="hospital" size={20} color="#fff" />
          <Text style={styles.actionText}>Abrigos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5 name="hand-holding-heart" size={20} color="#fff" />
          <Text style={styles.actionText}>Doações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubbles" size={20} color="#fff" />
          <Text style={styles.actionText}>Chat</Text>
        </TouchableOpacity>
      </View>

      {/* Informações */}
      <Text style={styles.sectionTitle}>📢 Informações</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          📰 Última atualização da Defesa Civil: sem riscos de enchente nas próximas 24h.
        </Text>
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F4FB',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    fontSize: 26,
    color: '#0077B6',
    fontWeight: 'bold',
  },
  region: {
    fontSize: 16,
    marginTop: 4,
    color: '#333',
  },
  status: {
    fontSize: 16,
    color: '#0077B6',
    marginBottom: 16,
  },
  mapPreview: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    elevation: 3,
    marginBottom: 16,
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  mapButton: {
    backgroundColor: '#0077B6',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#0077B6',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  alertContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  alertCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  alertText: {
    marginTop: 4,
    color: '#333',
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#0077B6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginTop: 4,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  infoText: {
    color: '#333',
    fontSize: 14,
  },
});
