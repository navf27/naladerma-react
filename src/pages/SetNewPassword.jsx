import React from "react";
import { useSignInContext } from "../context/SignInContext";
import SetNewPassForm from "../components/atoms/SetNewPassForm";
import { FormikProvider } from "../context/FormikContext";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const SetNewPassword = () => {
  const { onSetNewPass, loading } = useSignInContext();
  const { token } = useParams();

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}
      <Toaster />
      <div className="flex justify-center items-center h-dvh">
        <div className="bg-[#FFFEFB] w-80 px-7 py-9 rounded-lg drop-shadow-md">
          <div className="mb-7">
            <h2 className="text-3xl text-slate-800 font-semibold">
              Reset <br /> Password
            </h2>
            <h5 className="text-xs text-body-color mt-2">
              Masukkan password baru anda.
            </h5>
          </div>

          <FormikProvider
            initialValues={{
              password: "",
              token: token,
            }}
            onSubmit={onSetNewPass}
            validationSchema={yup.object().shape({
              password: yup
                .string()
                .required("Password harus diisi.")
                .matches(
                  /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                  "Password harus terdiri dari huruf dan angka."
                )
                .max(255)
                .min(6, "Password harus mengandung minimal 6 karakter"),
            })}
          >
            <SetNewPassForm />
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
