import React from "react";
import NameInput from "../atoms/NameInput";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import PhoneInput from "../atoms/PhoneInput";
import YellowButton from "../atoms/YellowButton";
import { useFormikContext } from "../../context/FormikContext";

const SignUpForm = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <form onSubmit={handleSubmit}>
      <NameInput />
      <EmailInput />
      <PhoneInput />
      <PasswordInput />
      <div className="w-full mt-9">
        <YellowButton width={"w-full"}>Daftar</YellowButton>
      </div>
    </form>
  );
};

export default SignUpForm;
