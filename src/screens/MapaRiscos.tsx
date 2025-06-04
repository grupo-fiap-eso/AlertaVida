import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapaRiscos() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -15.7801, // Exemplo: Brasília
          longitude: -47.9292,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* Exemplo de marcador */}
        <Marker
          coordinate={{ latitude: -15.7801, longitude: -47.9292 }}
          title="Risco de enchente"
          description="Área com histórico de alagamentos"
          pinColor="red"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
