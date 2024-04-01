import React from "react";
import { FormikProvider } from "../context/FormikContext";
import * as yup from "yup";
import LogInForm from "../components/molecules/LogInForm";
import { useSignInContext } from "../context/SignInContext";
import { Link } from "react-router-dom";
import AlreadyLoggedInRoute from "../hoc/AlreadyLoggedInRoute";

const SignIn = () => {
  const { onFormikSubmit, loading } = useSignInContext();

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="lg:bg-[#FFD970] lg:w-72 lg:h-screen lg:absolute lg:right-0"></div>
      <div className="bg-[#FFFEFB] shadow-lg rounded-lg w-80 p-7 py-9 lg:absolute lg:w-2/4 lg:h-3/5 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:p-0">
        {loading ? (
          <div className="border border-red-500 fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative inline-flex">
              <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
          </div>
        ) : null}
        <div className="hidden lg:block lg:border lg:border-red-500 lg:w-1/2 lg:h-full">
          INI GAMBAR
        </div>
        <div className="lg:w-full">
          <div className="lg:flex lg:justify-center">
            <div className="lg:w-80">
              <h2 className="text-3xl text-slate-800 font-semibold">
                Silahkan <br /> masuk!
              </h2>
              <h5 className="text-xs text-body-color mt-2">
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
                    .min(6, "Password harus mengandung minimal 6 karakter."),
                })}
              >
                <LogInForm />
              </FormikProvider>
              <p className="mt-4 text-xs text-body-color flex justify-center w-full">
                Belum memiliki akun?
                <Link to={"/sign-up"} className="text-[#FFBB00] ms-1">
                  Daftar disini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyLoggedInRoute(SignIn);
