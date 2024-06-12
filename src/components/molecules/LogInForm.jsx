import React from "react";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import YellowButton from "../atoms/YellowButton";
import { useFormikContext } from "../../context/FormikContext";
import { useSignInContext } from "../../context/SignInContext";

const LogInForm = () => {
  const { handleSubmit } = useFormikContext();
  const { userNotFound } = useSignInContext();

  return (
    <form onSubmit={handleSubmit} className="lg:-mt-2 -mt-1">
      <EmailInput />
      <PasswordInput />
      <div className="w-full mt-9 lg:mt-8">
        {/* {userNotFound && (
          <p className="text-sm text-red -mt-7 mb-2 text-center">
            Akun tidak ditemukan, coba lagi ya!
          </p>
        )} */}
        <YellowButton width={"w-full"}>Masuk</YellowButton>
      </div>
    </form>
  );
};

export default LogInForm;
