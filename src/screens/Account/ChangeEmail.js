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
    email: '',
}

const VALID_SCHEMA = {
    email: Yup.string().required(true).email(true),
}

export default function ChangeEmail() {
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
                Toast.show('Email updated',{
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
                res.email && await formik.setFieldValue('email', res.email)
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
                        label='Email'
                        theme={{colors: {primary: COLORS.secondary }}}
                        style={formStyles.input}
                        value={formik.values.email}
                        error={formik.errors.email}
                        onChangeText={(text) => formik.setFieldValue('email', text)}
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