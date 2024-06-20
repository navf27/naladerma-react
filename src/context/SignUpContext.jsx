import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { axiosPublicInstance } from "../utils/axiosFetcher";
import toast from "react-hot-toast";

export const SignUpContext = createContext({});
export const SignUpProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onFormikSubmit = async (values, action) => {
    setLoading(true);
    try {
      const res = await axiosPublicInstance().post("/register", values, {
        headers: { Accept: "application/json" },
      });

      console.log(res.data);

      // navigate("/sign-in");
      toast.success("Pendaftaran berhasil, silahkan masuk.", {
        duration: 4000,
      });
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err.response);
    } finally {
      action.resetForm();
      setLoading(false);
    }
  };

  return (
    <SignUpContext.Provider
      value={{
        showPassword,
        onShowPasswordClick,
        onFormikSubmit,
        loading,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
