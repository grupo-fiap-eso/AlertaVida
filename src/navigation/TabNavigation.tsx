import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MapaRiscos from '../screens/MapaRiscos';
import Alertas from '../screens/Alertas';
import Doacoes from '../screens/Doacoes';
import Comunidade from '../screens/Comunidade';
import Perfil from '../screens/ProfileScreen';
import TelaInicial from '../screens/TelaInicial';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
    route: { name: string };
    color: string;
    size: number;
}

const TabBarIcon = ({ route, color, size }: TabBarIconProps) => {
    const icons: Record<string, string> = {
        Mapa: 'map',
        Alertas: 'alert-circle',
        Doações: 'heart',
        Comunidade: 'chatbubbles',
        Perfil: 'person',
    };
    const iconName = icons[route.name] || 'alert';
    return <Ionicons name={iconName} size={size} color={color} />;
};

const renderTabBarIcon = (route: { name: string }) => {
    return ({ color, size }: { color: string; size: number }) => (
        <TabBarIcon route={route} color={color} size={size} />
    );
};

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }): BottomTabNavigationOptions  => ({
                tabBarIcon: ({color, size}) => {
                    let iconName = 'home';

                    if(route.name === 'Alertas'){
                        iconName = 'alert-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            >
            <Tab.Screen name="Mapa" component={MapaRiscos} />
            <Tab.Screen name="Alertas" component={Alertas} />
            <Tab.Screen name="Doações" component={Doacoes} />
            <Tab.Screen name="Comunidade" component={Comunidade} />
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Tela Inicial" component={TelaInicial} />
        </Tab.Navigator>
    );
}
