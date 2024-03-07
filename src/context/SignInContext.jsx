import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInContext = createContext();

export const useSignInContext = () => useContext(SignInContext);

export const SignInProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFormikSubmit = async (values, action) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/login", values, {
        "Content-Type": "application/json",
        Accept: "application/json",
      });

      console.log(res.data);

      navigate("/adm/dashboard");
    } catch (err) {
      console.log(err);
    } finally {
      action.resetForm();
      setLoading(false);
    }
  };

  return (
    <SignInContext.Provider value={{ onFormikSubmit, loading }}>
      {children}
    </SignInContext.Provider>
  );
};
