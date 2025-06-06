import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './src/screens/TelaInicial';
import TabNavigation from './src/navigation/TabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
