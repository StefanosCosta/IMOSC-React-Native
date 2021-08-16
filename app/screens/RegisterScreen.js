import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { AppForm } from '../components/forms';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { AppFormField, SubmitButton } from '../components/forms';



const validationSchema = Yup.object().shape(
  {
      firstName : Yup.string().required().min(4).label("First Name"),
      lastName : Yup.string().required().min(4).label("Last Name"),
      email : Yup.string().required().email().label("Email"),
      password : Yup.string().required().min(4).label("Password")
      // confirmPassword : Yup.string().required().min(4).label("Confirm Password")
  
  }
)


function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image 
      source={require("../assets/logo-removedbf.png")} 
      style={styles.logo}
      />
      <AppForm
        initialValues={{
          email : '', password : '',
          firstName : '', lastName : ''
          
        }}
        onSubmit={values => console.log(values)}
        validationSchema ={validationSchema}
      >
      <AppFormField
        name="firstName"
        icon="account"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType= "default"
        placeholder= "First Name"
        textContentType="name"
      />
      <AppFormField
        name="lastName"
        autoCapitalize="none"
        autoCorrect={false}
        icon="account"
        placeholder="Last Name"
        textContentType="familyName"
      />

      <AppFormField
        name="email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType= "email-address"
        placeholder= "Email"
        textContentType="emailAddress"
      />
      <AppFormField
        name="password"
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <SubmitButton title ="Register"/>
    </AppForm>


    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
     alignSelf: "center",
     marginTop: 50,
     marginBottom: 50,
},
container: {
    padding: 10
}
});


export default RegisterScreen;