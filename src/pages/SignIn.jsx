import React from "react";
import { FormikProvider } from "../context/FormikContext";
import * as yup from "yup";
import LogInForm from "../components/molecules/LogInForm";
import { useSignInContext } from "../context/SignInContext";

const SignIn = () => {
  const { onFormikSubmit, loading } = useSignInContext();

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="bg-[#FFFEFB] shadow-lg rounded-lg w-80 p-7 py-9">
        {loading ? (
          <div className="border border-red-500 fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative inline-flex">
              <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
          </div>
        ) : null}
        <h2 className="text-3xl text-slate-800 font-semibold">
          Silahkan <br /> masuk!
        </h2>
        <h5 className="text-xs text-slate-500 mt-2">
          Masukkan email dan passwordmu untuk masuk.
        </h5>
        <FormikProvider
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={onFormikSubmit}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .required("Email harus diisi.")
              .email("Pastikan format email anda benar."),
            password: yup
              .string()
              .required("Password harus diisi.")
              .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                "Password harus terdiri dari huruf dan angka"
              )
              .max(255)
              .min(
                6,
                "Password harus mengandung minimal 6 kombinasi karakter dan angka."
              ),
          })}
        >
          <LogInForm />
        </FormikProvider>
        <p className="mt-4 text-xs text-slate-500 flex justify-center w-full">
          Belum memiliki akun?<a className="text-[#FFBB00] ms-1">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
