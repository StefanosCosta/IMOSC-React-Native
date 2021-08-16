import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions,StyleSheet, Text, View,Image, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Button, Alert, Platform } from 'react-native';
import Screen from './app/components/Screen';
import Login from './app/screens/Login';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import { Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingScreen from './app/screens/ListingScreen';
import AccountScreen from './app/screens/AccountScreen';
import MessageScreen from './app/screens/MessageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import RegisterScreen from './app/screens/RegisterScreen';

import ListingEditScreen from './app/screens/ListingEditScreen';
export default function App() {
  // let x = 1;
  // console.log("App Executed");
  // console.log( Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // <Text numberOfLines={1} onPress={handlePress}>Life is meaningless</Text>
  // const Stack = createStackNavigator();
  const [firstName,setFirstName] = useState('');
  const [isNew,setIsNew] = useState(false);

  const handlePress =() => console.log("Text Pressed");
  const categories =[
    { label: "Furniture", value: 1},
    { label: "Clothing", value: 2},
    { label: "Cameras", value: 3},

  ];
  const [category,setCategory] =useState(categories[0]);

  return (

     
    //  <WelcomeScreen /> 
    //  <Login/> 
    //  <ListingDetailsScreen/>
    // <MessageScreen/>
    // <AccountScreen/>
    // <ListingScreen/>
    // <Hello/>
    // <LoginScreen />
    // <RegisterScreen/>
    <ListingEditScreen />
    

    
  );
}

const containerStyle = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
