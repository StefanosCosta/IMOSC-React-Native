import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Image, TouchableHighlight } from 'react-native';


function Hello(props) {
    return (
        <View style={styles.container} >
            <TouchableHighlight onPress = {() => console.log("Pressed")} >
            <Image source={require("../assets/heart.jpeg")}>

            </Image>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "pink",
        justifyContent: "center",

    }
})

export default Hello;