import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions,StyleSheet, Text, View,Image, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Button, Alert, Platform } from 'react-native';
import {useDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LoginScreen from './app/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  // let x = 1;
  // console.log("App Executed");
  // console.log( Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // <Text numberOfLines={1} onPress={handlePress}>Life is meaningless</Text>
  // const Stack = createStackNavigator();

  const handlePress =() => console.log("Text Pressed");
  return (
    <NavigationContainer>
     <WelcomeScreen />
     {/* <LoginScreen/> */}
    </NavigationContainer>
    
    
    // <ViewImageScreen />
    // <View style={styles.container}>
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     flex:1,
    //     }}
    //   />
    // </View>
      
    
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
