import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { Headline, Text } from "react-native-paper";


import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

import { layoutStyles } from "../styles";

export default function Auth() {
    const [showLogin, setShowLogin] = React.useState(true)

    const handleChangeForm = () => setShowLogin(!showLogin)

    return (
        <View style={layoutStyles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <Headline style={styles.headlineText}>Welcome!!!</Headline>
                <Text style={styles.text}>e-Commerce</Text>
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
    },
    text: {
        alignSelf: 'center',
        fontSize: 24
    }
})
