import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Account from '../screens/Account/Account'
import ChangeName from '../screens/Account/ChangeName'
import ChangeEmail from '../screens/Account/ChangeEmail'
import ChangeUsername from '../screens/Account/ChangeUsername'
import ChangePassword from '../screens/Account/ChangePassword'
import Address from '../screens/Account/Address'
import AddAddress from '../screens/Account/AddAddress'

const Stack = createNativeStackNavigator()

export default function AccountNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='AccountMain'
            screenOptions={{
                headerShadowVisible: false
            }}        
        >
            <Stack.Screen 
                name='AccountMain'
                component={Account}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='ChangeName'
                component={ChangeName}
                options={{
                    title: 'Change your full name'
                }}
            />
            <Stack.Screen 
                name='ChangeEmail'
                component={ChangeEmail}
                options={{
                    title: 'Change your email'
                }}
            />
            <Stack.Screen 
                name='ChangeUsername'
                component={ChangeUsername}
                options={{
                    title: 'Change your username'
                }}
            />
            <Stack.Screen 
                name='ChangePassword'
                component={ChangePassword}
                options={{
                    title: 'Change your password'
                }}
            />
            <Stack.Screen 
                name='Addresses'
                component={Address}
                options={{
                    title: 'My Addresses'
                }}
            />
            <Stack.Screen 
                name='AddAddress'
                component={AddAddress}
                options={{
                    title: 'Add a new address'
                }}
            />
        </Stack.Navigator>
    )
}