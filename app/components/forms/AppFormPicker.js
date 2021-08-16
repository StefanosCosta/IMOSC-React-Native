import React from "react";
import { useFormikContext } from "formik";
// import { ErrorMessage } from ".";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
// import { ErrorMessage } from ".";

function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;