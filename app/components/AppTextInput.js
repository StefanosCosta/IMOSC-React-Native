import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import defaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
            name={icon} 
            size={20} 
            colors={defaultStyles.colors.medium} 
            style={styles.icon} />}
            <TextInput style ={defaultStyles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
})

export default AppTextInput;