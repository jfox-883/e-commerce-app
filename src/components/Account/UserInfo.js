import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Headline, Title } from 'react-native-paper'

export default function UserInfo(props) {
    const { user } = props

    return (
        <View>
            <Title style={styles.greeting}>Welcome,</Title>
            <Headline style={styles.userName}>
                {user.name && user.lastname ? `${user.name} ${user.lastname}` : user.username}
            </Headline>
        </View>
    )
}

const styles = StyleSheet.create({
    greeting: {
        marginBottom: 0,
        paddingVertical: 0
    },
    userName: {
        paddingVertical: 0,
        marginVertical: 0,
        fontWeight: 'bold'
    }
})