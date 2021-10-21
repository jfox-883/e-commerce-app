import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

export default function LoginForm(props) {
    const { handleChangeForm } = props

    return (
        <View>
            <Text>Login</Text>
            <Button onPress={handleChangeForm}>
                Registrarse
            </Button>
        </View>
    )
}
