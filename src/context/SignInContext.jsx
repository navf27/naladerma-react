import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { axiosPublicInstance } from "../utils/axiosFetcher";
import toast from "react-hot-toast";
import axios from "axios";

const SignInContext = createContext();

export const useSignInContext = () => useContext(SignInContext);

export const SignInProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [resetModalOpened, setResetModalOpened] = useState(false);
  const [passShowed, setPassShowed] = useState(false);
  const navigate = useNavigate();

  const onFormikSubmit = async (values, action) => {
    setLoading(true);

    try {
      const res = await axiosPublicInstance().post("/login", values, {
        headers: { Accept: "application/json" },
      });

      Cookies.set("_auth", res.data.data.token, { expires: 1 });

      const resMe = await axiosPublicInstance().get("/me", {
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
      toast.error("Login gagal!");
      console.log(err);
      setUserNotFound(true);
    } finally {
      action.resetForm();
      setLoading(false);
    }
  };

  const onEmailSubmit = async (values, action) => {
    try {
      setLoading(true);

      const res = await axiosPublicInstance().post(
        "/emailForgotPassword",
        values
      );

      // console.log(res.data);

      setResetModalOpened(false);
      setLoading(false);
      toast.success("Periksa email anda.");
    } catch (error) {
      // console.log(error.response);
      setResetModalOpened(false);
      setLoading(false);
      toast.error("Gagal.");
    } finally {
      action.resetForm();
    }
  };

  const onSetNewPass = async (values, action) => {
    try {
      setLoading(true);

      // console.log(values);

      const res = await axios.patch(`/resetPassword/${values.token}`, values, {
        baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
        headers: {
          Accept: "application/json",
        },
      });

      // console.log(res.data);

      setLoading(false);
      toast.success("Reset password berhasil.");
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      toast.error("Reset password gagal.");
    } finally {
      action.resetForm();
    }
  };

  return (
    <SignInContext.Provider
      value={{
        onFormikSubmit,
        loading,
        userNotFound,
        resetModalOpened,
        setResetModalOpened,
        onEmailSubmit,
        passShowed,
        setPassShowed,
        onSetNewPass,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
};
