import { StyleSheet } from "react-native";

import COLORS from '../constants/colors'

const formStyles = StyleSheet.create({
    main: {
        marginHorizontal: 20,
    },  
    input: {
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: '#FFF'
    },
    btnSuccess: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },
    btnText: {
        padding: 10,
        color: COLORS.secondary
    },
    btnTextLabel: {
        fontSize: 14,
        color: COLORS.secondary
    }
})

export default formStyles