import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authInstance } from "../utils/axiosFetcher";

const SignOutContext = createContext();

export const useSignOutContext = () => useContext(SignOutContext);

export const SignOutProvider = ({ children }) => {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
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
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLogoutLoading(false);
    }
  };

  const authCheck = async () => {
    setLoading(true);

    try {
      const tokenExist = Cookies.get("_auth");
      if (tokenExist) {
        const res = await authInstance().get("/me");

        if (res.status === 200) {
          setLoggedIn(true);
          setUsername(res.data.data.name);
        }
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error.response);
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignOutContext.Provider
      value={{
        onSignOutClick,
        logoutLoading,
        authCheck,
        loading,
        loggedIn,
        username,
      }}
    >
      {children}
    </SignOutContext.Provider>
  );
};
