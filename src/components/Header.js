import React from 'react'
import { SafeAreaView, Platform, StatusBar } from 'react-native'

import COLORS from '../constants/colors'

export default function Header(props) {
    const { backgroundColor, children, ...rest } = props
    return (
        <>
            <StatusBar backgroundColor={backgroundColor} {...rest} />
            <SafeAreaView 
                style={{
                    flex: 0, 
                    backgroundColor: backgroundColor,
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                    justifyContent: 'center',
                    height: 70,
                }}
            >
                {children}
            </SafeAreaView>
        </>
    )
}