import React from 'react'
import { View, Text } from 'react-native'
import { Title } from 'react-native-paper'

import Header from '../components/Header'

import { layoutStyles } from '../styles'

export default function Cart() {
    return (
        <>
            <Header backgroundColor='#FFF'>
                <Title>Shopping Cart</Title>
            </Header>
            <View style={layoutStyles.container}>
                <Text>Cart Screen</Text>
            </View>
        </>
    )
}
