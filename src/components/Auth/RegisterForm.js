import React from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextInput, Button } from "react-native-paper";

import { formStyles } from "../../styles";
import COLORS from "../../constants/colors";

const INITIAL_VALUES = {
    email: '',
    userName: '',
    password: '',
    rePassword: ''
}

const VALID_SCHEMA = {
    email: Yup.string().email(true).required(true),
    userName: Yup.string().required(true),
    password: Yup.string().min(6).required(true),
    rePassword: Yup.string().min(6).required(true).oneOf([Yup.ref('password'), true])
}

export default function RegisterForm(props) {
    const { handleChangeForm } = props

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object(VALID_SCHEMA),
            onSubmit: (formData) => {
                console.log("Registro de Usuario");
                console.log(formData);
            }
    })

    return (
        <View style={formStyles.main}>
            <TextInput 
                label="Email" 
                mode="outlined" 
                style={formStyles.input} 
                theme={{colors: {primary: COLORS.primary }}}
                onChangeText={(text) => formik.setFieldValue('email', text)}
                value={formik.values.email}
                error={formik.errors.email}
            />
            <TextInput
                label="Nombre Completo"
                mode="outlined"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('userName', text)}
                value={formik.values.userName}
                error={formik.errors.userName}
            />
             <TextInput
                label="Contraseña"
                mode="outlined"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('password', text)}
                value={formik.values.password}
                error={formik.errors.password}
                secureTextEntry
            />
             <TextInput
                label="Repetir contraseña"
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
            >
                Registrarse
            </Button>
            <Button 
                mode="text" 
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={handleChangeForm}
            >
                Iniciar sesión
            </Button>
        </View>
    );
}
