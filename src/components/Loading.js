import React from 'react'
import { SafeAreaView, Dimensions } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

import { layoutStyles } from '../styles'

export default function Loading(props) {
    const {size, color, text, topRange} = props
    const { height } = Dimensions.get('window')

    return (
        <SafeAreaView style={{...layoutStyles.container, height: height - topRange}}>
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