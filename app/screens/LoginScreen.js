import React, {useState} from 'react';
import { View, StyleSheet, StatusBar, Button,TextInput,Image,Text, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
    

        <ImageBackground 
                style = {styles.background}
                source={require("../assets/appbackground.jpg")}
                >   
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-removedbf.png")} />
        {/* <MaterialCommunityIcons name = "email" color="dodgerblue"/> */}
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.no_account_button}>Don't Have an Account?</Text>
      </TouchableOpacity>
      
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>


        
    );
}

const styles = StyleSheet.create({
    background:{
                flex:1,
                justifyContent: "flex-end",
                // alignItems: "center",
            },
    container: {
      flex: 1,
    //   backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      color: "white",
      height: 30,
      marginBottom: 10,
    },
    no_account_button: {
      color: "white",
      height: 30,
      marginBottom: 20,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });

export default LoginScreen;