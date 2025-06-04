import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../screens/TelaInicial';
import MapaRiscos from '../screens/MapaRiscos';
import Alertas from '../screens/Alertas';
import Comunidade from '../screens/Comunidade';
import Doacoes from '../screens/Doacoes';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="MapaRiscos" component={MapaRiscos} />
        <Stack.Screen name="Alertas" component={Alertas} />
        <Stack.Screen name="Comunidade" component={Comunidade} />
        <Stack.Screen name="Doacoes" component={Doacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
