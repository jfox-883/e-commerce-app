import React from 'react'
import { Alert } from 'react-native'
import { List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'

import useAuth from '../../hooks/useAuth'

import COLORS from '../../constants/colors'


export default function Menu() {
    const navigation = useNavigation()
    const { logout } = useAuth()

    const handleAccountLogout = () => {
        Alert.alert(
            'Logout...',
            'Are you sure to logout?',
            [
                {
                    text: 'No'
                },
                {
                    text: 'YES',
                    onPress: logout
                }
            ],
            {
                cancelable: false,
            }
        )
    }

    return (
        <>
            <List.Section>
                <List.Subheader style={{color: COLORS.secondary}}>My Account</List.Subheader>
                <List.Item 
                    title='Change Name'
                    description='Change your account name'
                    left={() => <List.Icon icon='account'/>}
                    onPress={() => navigation.navigate('ChangeName')}
                />
                <List.Item 
                    title='Change Email'
                    description='Change your login email'
                    left={() => <List.Icon icon='at'/>}
                    onPress={() => navigation.navigate('ChangeEmail')}
                />
                <List.Item 
                    title='Change username'
                    description='Change your login username'
                    left={() => <List.Icon icon='sim'/>}
                    onPress={() => navigation.navigate('ChangeUsername')}
                />
                <List.Item 
                    title='Change Password'
                    description='Change your login password'
                    left={() => <List.Icon icon='key'/>}
                    onPress={() => navigation.navigate('ChangePassword')}
                />
                <List.Item 
                    title='My Addresses'
                    description='Change your delivery addresses'
                    left={() => <List.Icon icon='map-marker'/>}
                    onPress={() => console.log('Pressed')}
                />
            </List.Section>
            <List.Section>
                <List.Subheader style={{color: COLORS.secondary}}>App</List.Subheader>
                <List.Item 
                    title='Shopping List'
                    description='All your shopping lists'
                    left={() => <List.Icon icon='clipboard-text'/>}
                    onPress={() => console.log('Pressed')}
                />
                <List.Item 
                    title='Favorites'
                    description='Favorites List'
                    left={() => <List.Icon icon='heart'/>}
                    onPress={() => navigation.navigate('Favorites')}
                />
                <List.Item 
                    title='LogOut'
                    description='App Logoout'
                    titleStyle={{color: COLORS.danger}}
                    left={() => <List.Icon icon='logout' color={COLORS.danger}/>}
                    onPress={() => handleAccountLogout()}
                />
            </List.Section>
        </>
    )
}