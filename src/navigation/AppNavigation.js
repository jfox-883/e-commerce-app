import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import COLORS from '../constants/colors';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator()

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {...styles.tabBar},
                    tabBarIcon: ({focused}) => {
                        let iconName
                        switch (route.name) {
                            case 'Home':
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline'
                                break
                            case 'Favorites':
                                iconName = focused
                                    ? 'star'
                                    : 'star-outline'
                                break
                            case 'Cart':
                                iconName = focused
                                    ? 'cart'
                                    : 'cart-outline'
                                break
                            case 'Account':
                                iconName = focused
                                    ? 'person'
                                    : 'person-outline'
                                break
                            default:
                                break;
                        }
                        return (
                            <View style={styles.tabItem}>
                                <View style={{...styles.tabIcon, backgroundColor: focused ? COLORS.bgFocused : COLORS.bgLight}}>
                                    <Ionicons name={iconName} size={24} />
                                </View>
                                <Text>{route.name}</Text>
                            </View>
                        )
                    }
                })}
            >
                <Tab.Screen 
                    name='Home'
                    component={Home}
                    options={{
                        title: 'Inicio',
                    }}
                />
                <Tab.Screen 
                    name='Favorites'
                    component={Favorites}
                    options={{
                        title: 'Favoritos',
                    }}
                />
                <Tab.Screen 
                    name='Cart'
                    component={Cart}
                    options={{
                        title: 'Carrito'
                    }}
                />
                <Tab.Screen 
                    name='Account'
                    component={Account}
                    options={{
                        title: 'Cuenta'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        backgroundColor: COLORS.bgLight
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        width: 50,
        height: 30,
    }
})

