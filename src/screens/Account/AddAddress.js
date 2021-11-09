import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { layoutStyles, formStyles } from "../../styles";

export default function AddAddress() {
    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style={layoutStyles.container}>
                <TextInput
                    label='Title'
                    style={formStyles.input}
                />
                <TextInput
                    label='Description'
                    style={formStyles.input}
                />
                <TextInput
                    label='Address'
                    style={formStyles.input}
                />
                <TextInput
                    label='Postal Code'
                    style={formStyles.input}
                />
                <TextInput
                    label='City'
                    style={formStyles.input}
                />
                <TextInput
                    label='State'
                    style={formStyles.input}
                />
                <TextInput
                    label='Country'
                    style={formStyles.input}
                />
                <TextInput
                    label='Phone'
                    style={formStyles.input}
                />
                <Button mode='contained' style={formStyles.btnSuccess}>
                    Create
                </Button>
            </View>
        </KeyboardAwareScrollView>
    )
} 
