import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Title, Text, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { map } from 'lodash'

import COLORS from '../../constants/colors'

import { deleteAddressApi } from '../../api/address'
import useAuth from '../../hooks/useAuth'

export default function AddressList(props) {
    const {addresses, setReload} = props
    const navigation = useNavigation()
    const { auth } = useAuth()

    const handleDeleteAlert = (address) => {
        return (
            Alert.alert(
                'Deleting...',
                `Are you sure to delete ${address.title} address?`,
                [
                    {text: 'No'},
                    {
                        text: 'Yes',
                        onPress: () => handleDeleteAddress(address._id),
                    }
                ],
                {cancelable: false}
            )
        )
    }

    const handleDeleteAddress = async (idAddress) => {
        try {
            const res = await deleteAddressApi(auth, idAddress)
            setReload(true)
        } catch (error) {
            console.log(error)
        }
    }   

    const handleEditAddress = (idAddress) => {
        navigation.navigate('HandleAddress', {idAddress})
    }

    return (
        <View style={styles.containerView}>
            {map(addresses, (address) => (
                <View key={address._id} style={styles.address}>
                    <Title>{address.title}</Title>
                    <Text style={styles.subtitle}>{address.name}</Text>
                    <View style={styles.blockline}>
                        <IconButton icon='map-marker-radius' size={20} color={COLORS.secondary} />
                        <View>
                            <View style={styles.blockline}>
                                <Text style={styles.item}>{address.address} ,</Text>
                                <Text style={styles.item}>CP: {address.postal_code}</Text>
                            </View>
                            <View style={styles.blockline}>
                                <Text style={styles.item}>{address.city} ,</Text>
                                <Text style={styles.item}>{address.state} ,</Text>
                                <Text style={styles.item}>{address.country}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.blockline}>
                        <IconButton icon='phone-classic' size={20} color={COLORS.secondary} />
                        <Text>{address.phone}</Text>
                    </View>
                    <View style={{...styles.blockline, ...styles.actionsView}}>
                        <IconButton icon='file-edit' size={24} color={COLORS.primary} onPress={() => handleEditAddress(address._id)}/>
                        <IconButton icon='delete' size={24} color={COLORS.danger} onPress={() => handleDeleteAlert(address)}/>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        marginTop: 20,
    },
    address: {
        borderRadius: 10,
        backgroundColor: COLORS.bgLight,
        paddingTop: 20,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    subtitle: {
        top: -5
    },  
    blockline: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        paddingLeft: 2,
    },
    actionsView: {
        marginTop: 10,
        borderTopWidth: 0.8,
        borderTopColor: COLORS.lightGray,
        justifyContent: 'flex-end'
    }
})
