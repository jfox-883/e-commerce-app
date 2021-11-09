import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, IconButton, ActivityIndicator } from "react-native-paper";
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { size } from "lodash";

import { layoutStyles } from "../../styles";
import COLORS from '../../constants/colors';

import { getAddressApi } from '../../api/address'
import useAuth from "../../hooks/useAuth";

import Loading from '../../components/Loading';

export default function Address() {
    const [addresses, setAddresses] = React.useState(null)
    const navigation = useNavigation()
    const { auth } = useAuth()

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                const res = await getAddressApi(auth)
                setAddresses(res)
            })()
        },[])
    )

    return (
        <View style={layoutStyles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddAddress')}>
                    <Text>Add an Address...</Text>
                    <IconButton icon='map-marker-plus' color={COLORS.primary} size={20} />
                </TouchableOpacity>
                <View style={styles.addressList}>
                    {
                        !addresses 
                            ? <Loading size={100} color={COLORS.secondary} text='Getting Addresses'  />
                            : size(addresses) === 0 
                                ? <Text>No Addresses</Text>
                                : <Text>Addresses List</Text>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.8,
        borderRadius: 10,
        borderColor: COLORS.primary,
        paddingHorizontal: 10
    },
    addressList : {
        paddingTop: 20,
        paddingHorizontal: 10
    }
})