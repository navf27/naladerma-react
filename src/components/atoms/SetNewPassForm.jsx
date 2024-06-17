import React from "react";
import { useSignInContext } from "../../context/SignInContext";
import { useFormikContext } from "../../context/FormikContext";

const SetNewPassForm = () => {
  const { passShowed, setPassShowed } = useSignInContext();
  const { values, handleChange, errors, handleSubmit } = useFormikContext();
  const passStyle =
    "w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2";
  const errPassStyle =
    "w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-red active:border-red disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2";

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="mb-[10px] text-dark-4 block text-left text-base font-medium">
          Password
        </label>

        <div className="relative">
          <input
            type={passShowed ? "text" : "password"}
            placeholder="Password baru"
            name="password"
            onChange={handleChange}
            value={values.password}
            className={errors.password ? errPassStyle : passStyle}
          />
          {passShowed ? (
            <p onClick={() => setPassShowed(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 absolute top-1/2 right-3 -translate-y-1/2"
              >
                <g fill="#1C274C">
                  <path d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" />
                  <path
                    fillRule="evenodd"
                    d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20c4.182 0 7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4 7.818 4 4.972 6.5 3.275 8.704 2.425 9.81 2 10.361 2 12Zm10-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </p>
          ) : (
            <p onClick={() => setPassShowed(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 absolute top-1/2 right-3 -translate-y-1/2"
              >
                <path
                  fill="#1C274C"
                  fillRule="evenodd"
                  d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001c0-.001 0 0 0 0l.003.009.021.045c.02.042.051.108.094.194.086.172.219.424.4.729.364.612.917 1.426 1.67 2.237a11.966 11.966 0 0 0 .59.592C7.18 11.8 9.251 13 12 13c1.209 0 2.278-.231 3.22-.602 1.227-.483 2.254-1.21 3.096-1.998a13.053 13.053 0 0 0 2.733-3.725l.027-.058.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394-.003.005-.004.008-.011.026-.04.087a14.045 14.045 0 0 1-.741 1.348 15.368 15.368 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a11.81 11.81 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797A15.406 15.406 0 0 1 1.72 8.605a13.457 13.457 0 0 1-.591-1.107 5.418 5.418 0 0 1-.033-.072l-.01-.021-.002-.007-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          )}
        </div>
        {errors.password ? (
          <p className="mt-[10px] text-sm text-red">{errors.password}</p>
        ) : null}

        <div className="mt-9">
          <button
            type="submit"
            className="block w-full rounded-md border bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetNewPassForm;
