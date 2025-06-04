import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './screens/TelaInicial';
import MapaRiscos from './screens/MapaRiscos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="MapaRiscos" component={MapaRiscos} />

        {/* Outras telas serão adicionadas aqui depois */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
