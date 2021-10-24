import { StyleSheet } from "react-native";

import COLORS from '../constants/colors'

const layoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: COLORS.bgApp
    }
})

export default layoutStyles