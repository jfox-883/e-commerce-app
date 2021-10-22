import React from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextInput, Button } from "react-native-paper";
import Toast from 'react-native-root-toast'

import { registerApi } from '../../api/user'

import { formStyles } from "../../styles";
import COLORS from "../../constants/colors";

const INITIAL_VALUES = {
    email: '',
    username: '',
    password: '',
    rePassword: ''
}

const VALID_SCHEMA = {
    email: Yup.string().email(true).required(true),
    username: Yup.string().required(true),
    password: Yup.string().min(6).required(true),
    rePassword: Yup.string().min(6).required(true).oneOf([Yup.ref('password'), true])
}

export default function RegisterForm(props) {
    const { handleChangeForm } = props
    const [loading, setLoading] = React.useState(false)

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object(VALID_SCHEMA),
            onSubmit: async (formData) => {
                setLoading(true)
                try {
                    const res = await registerApi(formData)
                    if(res) Toast.show('Usuario registrdo exitosamente!!!', {
                        position: Toast.positions.CENTER,
                    })
                    handleChangeForm()
                } catch (error) {
                    setLoading(false)
                    Toast.show('Error al registrar el usuario', {
                        position: Toast.positions.CENTER,
                    })
                }
            }
    })

    return (
        <View style={formStyles.main}>
            <TextInput 
                label="Email" 
                mode="outlined" 
                style={formStyles.input} 
                autoCapitalize='none'
                theme={{colors: {primary: COLORS.primary }}}
                onChangeText={(text) => formik.setFieldValue('email', text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                label="Full Name"
                mode="outlined"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('username', text)}
                value={formik.values.username}
                error={formik.errors.username}
            />
             <TextInput
                label="Password"
                mode="outlined"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
                secureTextEntry
            />
             <TextInput
                label="Repeat Password"
                mode="outlined"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('rePassword', text)}
                value={formik.values.rePassword}
                error={formik.errors.rePassword}
                secureTextEntry
            />
            <Button 
                mode="contained" 
                style={formStyles.btnSuccess}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                Sign Up
            </Button>
            <Button 
                mode="text" 
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={handleChangeForm}
            >
                Login
            </Button>
        </View>
    );
}
