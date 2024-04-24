import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authInstance } from "../utils/axiosFetcher";

const SignOutContext = createContext();

export const useSignOutContext = () => useContext(SignOutContext);

export const SignOutProvider = ({ children }) => {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const navigate = useNavigate();

  const onSignOutClick = async () => {
    setLogoutLoading(true);

    try {
      const token = Cookies.get("_auth");

      const res = await authInstance().get("http://localhost:8000/api/logout", {
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
      setLogoutLoading(false);
    }
  };

  return (
    <SignOutContext.Provider value={{ onSignOutClick, logoutLoading }}>
      {children}
    </SignOutContext.Provider>
  );
};
