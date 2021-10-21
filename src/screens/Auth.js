import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { Headline } from "react-native-paper";


import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

import { layoutStyles } from "../styles";

export default function Auth() {
    const [showLogin, setShowLogin] = React.useState(false)

    const handleChangeForm = () => setShowLogin(!showLogin)

    return (
        <View style={layoutStyles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <Headline style={styles.headlineText}>Bienvenido!!!</Headline>
                {showLogin 
                    ? <LoginForm handleChangeForm={handleChangeForm}/> 
                    : <RegisterForm handleChangeForm={handleChangeForm} />}
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    headlineText: {
        alignSelf: 'center',
        fontSize: 30,
    }
})
