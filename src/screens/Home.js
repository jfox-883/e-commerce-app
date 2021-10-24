import React from 'react'
import { View } from 'react-native'
import { Text } from "react-native-paper";

import Header from '../components/Header';
import Search from '../components/Search/Search';

import { layoutStyles } from '../styles'

export default function Home() {
    return (
        <>
            <Header backgroundColor='#FFF' barStyle='dark-content'>
                <Search/>
            </Header>
            <View style={layoutStyles.container}>
                <Text>Home</Text>
            </View>
        </>
    )
}
