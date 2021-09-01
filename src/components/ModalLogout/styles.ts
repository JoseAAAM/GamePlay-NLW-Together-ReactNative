import { StyleSheet } from 'react-native'

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "165%",
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    },
    content: {
        alignItems: 'center',
        marginTop: 25,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginHorizontal: 23,
        marginTop: 24,
    },
    buttonNo: {
        height: 56,
        width: 160,
        borderRadius: 8,
        borderColor: theme.colors.secondary30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    buttonYes: {
        height: 56,
        width: 160,
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.heading,
    }
});