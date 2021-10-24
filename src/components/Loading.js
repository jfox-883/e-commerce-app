import React from 'react'
import { SafeAreaView } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

import { layoutStyles } from '../styles'

export default function Loading(props) {
    const {size, color, text} = props

    return (
        <SafeAreaView style={layoutStyles.container}>
            <ActivityIndicator size={size} color={color}/>
            <Text style={{marginVertical: 10, alignSelf: 'center'}}>{text}</Text>
        </SafeAreaView>
    )
}

Loading.defaultProps = {
    color: '#000',
    text: 'Loading...',
    size: 24
}