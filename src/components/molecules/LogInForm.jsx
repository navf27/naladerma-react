import React from "react";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import YellowButton from "../atoms/YellowButton";
import { useFormikContext } from "../../context/FormikContext";

const LogInForm = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput />
      <PasswordInput />
      <div className="w-full mt-9">
        <YellowButton width={"w-full"}>Masuk</YellowButton>
      </div>
    </form>
  );
};

export default LogInForm;
