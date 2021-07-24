import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton; 

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: "100%",
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: "bold",
    }

})