import React from "react";
import EmailInput from "../atoms/EmailInput";
import PasswordInput from "../atoms/PasswordInput";
import YellowButton from "../atoms/YellowButton";
import { useFormikContext } from "../../context/FormikContext";
import { useSignInContext } from "../../context/SignInContext";

const LogInForm = () => {
  const { handleSubmit } = useFormikContext();
  const { userNotFound, setResetModalOpened } = useSignInContext();

  return (
    <form onSubmit={handleSubmit} className="lg:-mt-2 -mt-1">
      <EmailInput />
      <PasswordInput />
      <p
        onClick={() => {
          setResetModalOpened(true);
          console.log("kliked");
        }}
        className="text-[#FFCC00] my-3 text-sm w-full text-right cursor-pointer"
      >
        Lupa password
      </p>
      <div className="w-full">
        <YellowButton width={"w-full"}>Masuk</YellowButton>
      </div>
    </form>
  );
};

export default LogInForm;
