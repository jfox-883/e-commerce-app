import React from 'react'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Toast from "react-native-root-toast";

import { loginApi } from "../../api/user";
import useAuth from '../../hooks/useAuth';

import { formStyles } from '../../styles'
import COLORS from '../../constants/colors'

const INITIAL_VALUES = {
    identifier: '',
    password: '',
}

const VALID_SCHEMA = {
    identifier: Yup.string().email(true).required(true),
    password: Yup.string().min(6).required(true),
}

export default function LoginForm(props) {
    const { handleChangeForm } = props
    const { login } = useAuth()
    
    const [loading, setLoading] = React.useState(false)
    const [showPass, setShowPass] = React.useState(false)

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object(VALID_SCHEMA),
        onSubmit: async (FormData) => {
            setLoading(true)
            try {
                const res = await loginApi(FormData)
                if(res.statusCode) throw 'Error en el usuario o contraseña'
                login(res)
            } catch (error) {
                setLoading(false)
                Toast.show(error, {
                    position: Toast.positions.CENTER
                })
            }
        }
    })

    return (
        <View style={formStyles.main}>
            <TextInput 
                label='email' 
                mode='outlined'
                style={formStyles.input}
                autoCapitalize='none'
                theme={{colors: {primary: COLORS.primary }}}
                keyboardType='email-address'
                onChangeText={(text) => formik.setFieldValue('identifier', text)}
                value={formik.values.identifier}
                error={formik.errors.identifier}
            /> 
            <TextInput
                label='Password'
                mode='outlined'
                style={formStyles.input}
                theme={{colors: {primary: COLORS.primary }}}
                secureTextEntry={!showPass}
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
                right={
                    !showPass
                    ? <TextInput.Icon name='eye' onPress={() => setShowPass(!showPass)}/>
                    : <TextInput.Icon name='eye-off' onPress={() => setShowPass(!showPass)}/>
                }
            />
            <Button 
                mode='contained'
                style={formStyles.btnSuccess}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Login
            </Button>
            <Button 
                mode='text'
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={handleChangeForm}
            >
                Sign Up
            </Button>
        </View>
    )
}
