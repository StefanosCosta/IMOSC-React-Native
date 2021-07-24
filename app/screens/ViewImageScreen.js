import React from 'react';
import {Text, View, StyleSheet, StatusBar } from 'react-native';

function ViewImageScreen(props) {
    return (
        // <Image source
        <View style = {styles.container}>
            <Text>This is a screen</Text>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  });
export default ViewImageScreen;