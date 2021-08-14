import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';

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
            <Formik
            initialValues={{
                email:'', password: ''
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
            { ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
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

                <AppButton 
                title="Login"
                onPress = {handleSubmit} 
                />
            </>

            ) }

            </Formik>
           
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