import { useState, createContext } from "react";
import axios from "axios";

export const SignUpContext = createContext({});
export const SignUpProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onFormikSubmit = async (values, action) => {
    setLoading(true);
    try {
      // const res = await axios.get("http://localhost:8000/api/testing", {
      //   Accept: "application/json",
      // });
      // console.log(values);

      const res = await axios.post(
        "http://localhost:8000/api/register",
        values,
        { "Content-Type": "application/json", Accept: "application/json" }
      );

      console.log(res.data);
    } catch (err) {
      console.log(err);
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
