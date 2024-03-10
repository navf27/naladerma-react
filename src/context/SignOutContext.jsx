import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignOutContext = createContext();

export const useSignOutContext = () => useContext(SignOutContext);

export const SignOutProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSignOutClick = async () => {
    setLoading(true);

    try {
      const token = Cookies.get("_auth");

      const res = await axios.get("http://localhost:8000/api/logout", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      Cookies.remove("_auth");

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignOutContext.Provider value={{ onSignOutClick, loading }}>
      {children}
    </SignOutContext.Provider>
  );
};
