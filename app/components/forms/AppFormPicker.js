import React from "react";
import { useFormikContext } from "formik";
// import { ErrorMessage } from ".";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
// import { ErrorMessage } from ".";

function AppFormPicker({ items, name,numberOfColumns, PickerItemComponent, placeholder,width }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;