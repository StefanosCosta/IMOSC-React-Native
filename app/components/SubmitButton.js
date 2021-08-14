import React from 'react';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';


function SubmitButton(props) {
    return (
        <AppButton 
        title="Login"
        onPress = {handleSubmit} 
        />
    );
}

export default SubmitButton;