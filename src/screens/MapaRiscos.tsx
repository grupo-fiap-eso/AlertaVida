import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';

let MapaRiscos: React.FC;

if (Platform.OS === 'web') {
  MapaRiscos = () => (
    <View style={styles.container}>
      <Text>🗺️ Mapa de Riscos não disponível na versão Web</Text>
    </View>
  );
} else {
  const MapView = require('react-native-maps').default;
  const { Marker } = require('react-native-maps');

  MapaRiscos = () => (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
          title="Abrigo Central"
          description="Abrigo disponível para 50 pessoas"
        />
      </MapView>
    </View>
  );
}

export default MapaRiscos;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  map: { width: '100%', height: '100%' },
});
