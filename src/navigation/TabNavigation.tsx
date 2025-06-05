import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MapaRiscos from '../screens/MapaRiscos';
import Alertas from '../screens/Alertas';
import Doacoes from '../screens/Doacoes';
import Comunidade from '../screens/Comunidade';
import Perfil from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          switch (route.name) {
            case 'Mapa':
              iconName = 'map';
              break;
            case 'Alertas':
              iconName = 'alert-circle';
              break;
            case 'Doações':
              iconName = 'heart';
              break;
            case 'Comunidade':
              iconName = 'chatbubbles';
              break;
            case 'Perfil':
              iconName = 'person';
              break;
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Mapa" component={MapaRiscos} />
      <Tab.Screen name="Alertas" component={Alertas} />
      <Tab.Screen name="Doações" component={Doacoes} />
      <Tab.Screen name="Comunidade" component={Comunidade} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
