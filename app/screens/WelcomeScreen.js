import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native';
import AppButton from '../components/AppButton';
import AppText  from '../components/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source={require("../assets/background.jpg")}
        >
        <View style={styles.logoContainer}>
        <Image 
        style = {styles.logo}
        source={require('../assets/logo-removedbf.png')}
        />
        <AppText>Secure Your Inventory</AppText>
        <Text>Secure Your Future</Text>
        
        </View>

        <AppButton title="Login" onPress={ () => console.log("tapped")} ></AppButton>
        <View style = {styles.buttonView}>

        <TouchableOpacity 
        style = {styles.loginButton}
        onPress = {() => console.log("login")}
        >
        <View >
        <Text style = {styles.buttonText}>Login</Text>
        </View>

        </TouchableOpacity >
        
        <TouchableOpacity 
        style = {styles.registerButton}
        onPress = {() => console.log("register")}
        >
        <View>
            <Text style={styles.buttonText}>Register</Text>
        </View>
        </TouchableOpacity>
        </View>
        
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        justifyContent: "center",
        width: "50%",
        height: 70,
        flex:1,
        backgroundColor: "#dc5c65"
    },
    registerButton:{
        justifyContent: "center",
        width: "50%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    buttonView:{
        flex:1,
        flexDirection:"row",
        justifyContent: "flex-end",
        alignItems: 'flex-end',
    },
    logo:{
        width: 100,
        height: 100,
       
    },
    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70,
    },
    buttonText: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
    }
})

export default WelcomeScreen;