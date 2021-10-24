import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper'

import COLORS from '../../constants/colors'

export default function Search() {
    return (
        <View style={styles.container}>
            <Searchbar 
                placeholder='Product search...'
                style={styles.searchBar}
                inputStyle={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        zIndex: 1
    },
    searchBar: {
        borderRadius: 20,
        backgroundColor: COLORS.bgLight,
    },
    input: {
        fontSize: 16
    }
})