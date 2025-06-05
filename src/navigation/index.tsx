import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/TelaInicial';
import MapScreen from '../screens/MapaRiscos';
import AlertsScreen from '../screens/Alertas';
import DonationsScreen from '../screens/Doacoes';
import ChatScreen from '../screens/Comunidade';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: any;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Mapa':
                iconName = 'map';
                break;
              case 'Alertas':
                iconName = 'warning';
                break;
              case 'Doações':
                iconName = 'heart';
                break;
              case 'Chat':
                iconName = 'chatbubbles';
                break;
              case 'Perfil':
                iconName = 'person';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0077B6',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Alertas" component={AlertsScreen} />
        <Tab.Screen name="Doações" component={DonationsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
