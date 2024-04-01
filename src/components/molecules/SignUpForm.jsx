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
    <form onSubmit={handleSubmit} className="lg:mt-8">
      <div className="lg:flex lg:justify-between lg:gap-5 lg:-mb-2">
        <div className="lg:-mt-8">
          <NameInput />
        </div>
        <div className="lg:-mt-8">
          <div className="lg:hidden">
            <EmailInput />
          </div>
          <div className="hidden lg:block">
            <PhoneInput />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <PhoneInput />
      </div>
      <div className="hidden lg:block">
        <EmailInput />
      </div>
      <PasswordInput />
      <div className="w-full mt-9">
        <YellowButton width={"w-full"}>Daftar</YellowButton>
      </div>
    </form>
  );
};

export default SignUpForm;
