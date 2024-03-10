import { React, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { SignUpContext } from "../../context/SignUpContext";
import { useFormikContext } from "../../context/FormikContext";

const PasswordInput = () => {
  const { onShowPasswordClick, showPassword } = useContext(SignUpContext);
  const { values, handleChange, errors } = useFormikContext();
  const errClassName =
    "w-full bg-transparent rounded-md border border-red py-[10px] pr-3 pl-12 text-dark-6 outline-none transition mt-1 lg:-mt-1";
  const trueClassName =
    "w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 mt-1 lg:-mt-5";
  const errPasswordLogo = "absolute top-1/2 lg:top-5 left-4 -translate-y-1/2";
  const truePasswordLogo = "absolute top-1/2 lg:top-3 left-4 -translate-y-1/2";
  const errShowLogo = "absolute top-7 lg:top-5 right-5 -translate-y-1/2";
  const trueShowLogo = "absolute top-7 lg:top-3 right-5 -translate-y-1/2";

  return (
    <>
      <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={errors.password ? errClassName : trueClassName}
          id="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <span className={errors.password ? errPasswordLogo : truePasswordLogo}>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={0.8}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16797 10.0007C3.70773 10.0007 3.33464 10.3737 3.33464 10.834V16.6673C3.33464 17.1276 3.70773 17.5007 4.16797 17.5007H15.8346C16.2949 17.5007 16.668 17.1276 16.668 16.6673V10.834C16.668 10.3737 16.2949 10.0007 15.8346 10.0007H4.16797ZM1.66797 10.834C1.66797 9.45327 2.78726 8.33398 4.16797 8.33398H15.8346C17.2153 8.33398 18.3346 9.45327 18.3346 10.834V16.6673C18.3346 18.048 17.2153 19.1673 15.8346 19.1673H4.16797C2.78726 19.1673 1.66797 18.048 1.66797 16.6673V10.834Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2.50065C9.11594 2.50065 8.2681 2.85184 7.64298 3.47696C7.01786 4.10208 6.66667 4.94993 6.66667 5.83398V9.16732C6.66667 9.62756 6.29357 10.0007 5.83333 10.0007C5.3731 10.0007 5 9.62756 5 9.16732V5.83398C5 4.5079 5.52678 3.23613 6.46447 2.29845C7.40215 1.36077 8.67392 0.833984 10 0.833984C11.3261 0.833984 12.5979 1.36077 13.5355 2.29845C14.4732 3.23613 15 4.5079 15 5.83398V9.16732C15 9.62756 14.6269 10.0007 14.1667 10.0007C13.7064 10.0007 13.3333 9.62756 13.3333 9.16732V5.83398C13.3333 4.94993 12.9821 4.10208 12.357 3.47696C11.7319 2.85184 10.8841 2.50065 10 2.50065Z"
                fill="#9CA3AF"
              />
            </g>
          </svg>
        </span>
        <span className={errors.password ? errShowLogo : trueShowLogo}>
          <button type="button" onClick={onShowPasswordClick}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </span>
      </div>
      {errors.password ? (
        <p className="mt-[10px] lg:mt-0 text-sm text-red lg:-mb-5">
          {" "}
          {errors.password}
        </p>
      ) : null}
    </>
  );
};

export default PasswordInput;
