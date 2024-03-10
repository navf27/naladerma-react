import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const res = await axios.post(
        "http://localhost:8000/api/register",
        values,
        { headers: { Accept: "application/json" } }
      );

      console.log(res.data);

      navigate("/sign-in");
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
