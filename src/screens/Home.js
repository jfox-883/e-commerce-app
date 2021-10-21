import React from 'react'
import { View } from 'react-native'
import { Text } from "react-native-paper";

import { layoutStyles } from '../styles'

export default function Home() {
    return (
        <View style={layoutStyles.container}>
            <Text>Home</Text>
        </View>
    )
}
