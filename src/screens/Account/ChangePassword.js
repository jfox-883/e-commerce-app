import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core'
import {  useFormik } from 'formik'
import * as Yup from 'yup'
import Toast from "react-native-root-toast";

import { updateUserApi } from "../../api/user";
import useAuth from '../../hooks/useAuth';

import { layoutStyles, formStyles } from '../../styles'
import COLORS from '../../constants/colors'

const INITIAL_VALUES = {
    password: '',
    rePassword: ''
}

const VALID_SCHEMA = {
    password: Yup.string().required(true).min(6),
    rePassword: Yup.string().min(6).required(true).oneOf([Yup.ref('password'), true])
}

export default function ChangePassword() {
    const { auth } = useAuth()
    const navigation = useNavigation()
    const [loading, setLoading] = React.useState(false)
    const [showPass, setShowPass] = React.useState(false)

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object(VALID_SCHEMA),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                const res = await updateUserApi(auth, formData)
                if(res.statusCode) throw 'Error updating data'
                Toast.show('Password updated',{
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

    return (
        <>
            <View style={layoutStyles.container}>
                <TextInput 
                    label='New Password'
                    theme={{colors: {primary: COLORS.secondary }}}
                    style={formStyles.input}
                    value={formik.values.password}
                    error={formik.errors.password}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                    secureTextEntry={!showPass}
                    right={<TextInput.Icon 
                                name={showPass ? 'eye-off' : 'eye'} 
                                onPress={() => setShowPass(!showPass)}
                            />
                            }
                />
                <TextInput 
                    label='Repeat Password'
                    theme={{colors: {primary: COLORS.secondary }}}
                    style={formStyles.input}
                    value={formik.values.rePassword}
                    error={formik.errors.rePassword}
                    onChangeText={(text) => formik.setFieldValue('rePassword', text)}
                    secureTextEntry={!showPass}
                    right={<TextInput.Icon 
                                name={showPass ? 'eye-off' : 'eye'} 
                                onPress={() => setShowPass(!showPass)}
                            />
                            }
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
        </>
    )
}