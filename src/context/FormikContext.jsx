import React, { createContext, useContext } from "react";
import { Formik } from "formik";

const FormikContext = createContext();

export const useFormikContext = () => useContext(FormikContext);

export const FormikProvider = ({ children, ...props }) => (
  <Formik {...props}>
    {(formikProps) => (
      <FormikContext.Provider value={formikProps}>
        {children}
      </FormikContext.Provider>
    )}
  </Formik>
);
