import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape(
    {
        email : Yup.string().required().email().label("Email"),
        password : Yup.string().required().min(4).label("Password")
    }
)

function LoginScreen(props) {
    
    return (
        <Screen style={styles.container}>
            <Image 
            source={require("../assets/logo-removedbf.png")} 
            style={styles.logo}
            />
            <AppForm
            initialValues={{
                email:'', password: ''
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
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

            <SubmitButton title ="Login"/>

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
})
export default LoginScreen;