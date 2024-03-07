import React, { useContext } from "react";
import SignUpForm from "../components/molecules/SignUpForm";
import { FormikProvider } from "../context/FormikContext";
import { SignUpContext } from "../context/SignUpContext";
import * as yup from "yup";

const SignUp = () => {
  const { onFormikSubmit, loading } = useContext(SignUpContext);

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
          Ayo buat akunmu disini!
        </h2>
        <h5 className="text-xs text-slate-500 mt-2">
          Dengan memiliki akun, kamu dapat mengakses fitur tambahan lho.
        </h5>
        <FormikProvider
          initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
          }}
          onSubmit={onFormikSubmit}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .required("Nama lengkap harus diisi.")
              .max(255, "Maksimum karakter adalah 255."),
            email: yup
              .string()
              .required("Email harus diisi.")
              .email("Pastikan format email anda benar."),
            phone: yup
              .string()
              .required("Nomor handphone harus diisi.")
              .matches(/^[0-9]+$/, "Cek kembali nomor handphonemu.")
              .max(13, "Cek kembali nomor handphonemu."),
            password: yup
              .string()
              .required("Password harus diisi.")
              .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
                "Password harus terdiri dari huruf dan angka"
              )
              .max(255)
              .min(6, "Password harus mengandung minimal 6 karakter"),
          })}
        >
          <SignUpForm />
        </FormikProvider>
        <p className="mt-4 text-xs text-slate-500 flex justify-center w-full">
          Sudah memiliki akun?<a className="text-[#FFBB00] ms-1">Masuk</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
