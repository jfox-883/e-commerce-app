import React from 'react'
import { View, Text } from 'react-native'

import Header from '../components/Header'
import Search from '../components/Search/Search'

import { layoutStyles } from '../styles'

export default function Favorites() {
    return (
        <>
            <Header backgroundColor='#FFF'>
                <Search />
            </Header>
            <View style={layoutStyles.container}>
                <Text>Favorites Screen</Text>
            </View>
        </>
    )
}
