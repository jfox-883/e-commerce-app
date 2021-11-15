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
import AddressList from '../../components/Address/AddressList';

export default function Address() {
    const [addresses, setAddresses] = React.useState(null)
    const [reload, setReload] = React.useState(false)
    const navigation = useNavigation()
    const { auth } = useAuth()

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                setAddresses(null)
                const res = await getAddressApi(auth)
                setAddresses(res)
                setReload(false)
            })()
        },[reload])
    )

    return (
        <View style={layoutStyles.container}>
            <ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HandleAddress')}>
                    <Text>Add an Address...</Text>
                    <IconButton icon='map-marker-plus' color={COLORS.primary} size={20} />
                </TouchableOpacity>
                    {
                        !addresses 
                            ? <Loading size={100} color={COLORS.secondary} text='Getting Addresses' topRange={200}  />
                            : size(addresses) === 0 
                                ? null
                                : (
                                    <View style={styles.addressList}>
                                        <AddressList addresses={addresses} setReload={setReload}/>
                                    </View> 
                                ) 
                    }
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
        borderColor: COLORS.bgFocused,
        paddingHorizontal: 10
    },
    addressList : {
        paddingTop: 20,
        paddingHorizontal: 10
    }
})