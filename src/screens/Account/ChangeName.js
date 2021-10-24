import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import Toast from "react-native-root-toast";

import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Loading';

import { layoutStyles, formStyles } from '../../styles'
import COLORS from '../../constants/colors'

const INITIAL_VALUES = {
    name: '',
    lastname: '',
}

const VALID_SCHEMA = {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true)
}

export default function ChangeName() {
    const { auth } = useAuth()
    const navigation = useNavigation()
    const [loading, setLoading] = React.useState(false)
    const [dataLoaded, setDataLoaded] = React.useState(false)
    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object(VALID_SCHEMA),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                const res = await updateUserApi(auth, formData)
                console.log(res)
                Toast.show('Full name updated',{
                    position: Toast.positions.CENTER
                })
                navigation.goBack()
            } catch (error) {
                Toast.show('Error when updating...', {
                    position: Toast.positions.CENTER
                })
            }
            setLoading(false)
        }
    })

    useFocusEffect(
        React.useCallback(() => {
            (async() => {
                const res = await getMeApi(auth.token)
                setDataLoaded(true)
                res.name && await formik.setFieldValue('name', res.name)
                res.lastname && await formik.setFieldValue('lastname', res.lastname)
            })()
        },[])
    )

    return (
        <>
        {!dataLoaded 
            ? <Loading size={80} color={COLORS.secondary} text='Wait...'/>
            : (
                <View style={layoutStyles.container}>
                    <TextInput 
                        label='Name'
                        theme={{colors: {primary: COLORS.secondary }}}
                        style={formStyles.input}
                        value={formik.values.name}
                        error={formik.errors.name}
                        onChangeText={(text) => formik.setFieldValue('name', text)}
                    />
                    <TextInput 
                        label='Lastname'
                        theme={{colors: {primary: COLORS.secondary }}}
                        style={formStyles.input}
                        value={formik.values.lastname}
                        error={formik.errors.lastname}
                        onChangeText={(text) => formik.setFieldValue('lastname', text)}
                    />
                    <Button 
                        mode='contained'
                        style={formStyles.btnSuccess}
                        onPress={formik.handleSubmit}
                        loading={loading}
                    >
                        Save
                    </Button>
                </View>
            )
        }
        </>
    )
}
