import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignInContext = createContext();

export const useSignInContext = () => useContext(SignInContext);

export const SignInProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();

  const onFormikSubmit = async (values, action) => {
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/login", values, {
        headers: { Accept: "application/json" },
      });

      Cookies.set("_auth", res.data.data.token, { expires: 1 });

      const resMe = await axios.get("http://localhost:8000/api/me", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${res.data.data.token}`,
        },
      });

      if (resMe.data.data.role === "admin") {
        navigate("/adm/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setUserNotFound(true);
    } finally {
      action.resetForm();
      setLoading(false);
    }
  };

  return (
    <SignInContext.Provider value={{ onFormikSubmit, loading, userNotFound }}>
      {children}
    </SignInContext.Provider>
  );
};
