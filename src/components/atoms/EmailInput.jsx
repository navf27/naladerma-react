import React from "react";
import { useFormikContext } from "../../context/FormikContext";

const EmailInput = () => {
  const { values, handleChange, errors } = useFormikContext();
  const errClassName =
    "w-full bg-transparent rounded-md mt-1 border border-red py-[10px] pr-3 pl-12 text-dark-6 outline-none transition";
  const trueClassName =
    "w-full bg-transparent rounded-md border mt-1 border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2";

  return (
    <>
      <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
        Email
      </label>
      <div className="relative">
        <input
          type="email"
          placeholder="email@gmail.com"
          className={errors.email ? errClassName : trueClassName}
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <span className="absolute top-1/2 left-4 -translate-y-1/2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              opacity={0.8}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#9CA3AF"
            >
              <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
              <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
            </g>
          </svg>
        </span>
        {errors.email ? (
          <span className="absolute top-7 right-3 -translate-y-1/2 bg-[#FFFEFB] w-7 pb-1">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.9987 2.50065C5.85656 2.50065 2.4987 5.85852 2.4987 10.0007C2.4987 14.1428 5.85656 17.5007 9.9987 17.5007C14.1408 17.5007 17.4987 14.1428 17.4987 10.0007C17.4987 5.85852 14.1408 2.50065 9.9987 2.50065ZM0.832031 10.0007C0.832031 4.93804 4.93609 0.833984 9.9987 0.833984C15.0613 0.833984 19.1654 4.93804 19.1654 10.0007C19.1654 15.0633 15.0613 19.1673 9.9987 19.1673C4.93609 19.1673 0.832031 15.0633 0.832031 10.0007Z"
                fill="#DC3545"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0013 5.83398C10.4615 5.83398 10.8346 6.20708 10.8346 6.66732V10.0007C10.8346 10.4609 10.4615 10.834 10.0013 10.834C9.54106 10.834 9.16797 10.4609 9.16797 10.0007V6.66732C9.16797 6.20708 9.54106 5.83398 10.0013 5.83398Z"
                fill="#DC3545"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16797 13.3333C9.16797 12.8731 9.54106 12.5 10.0013 12.5H10.0096C10.4699 12.5 10.843 12.8731 10.843 13.3333C10.843 13.7936 10.4699 14.1667 10.0096 14.1667H10.0013C9.54106 14.1667 9.16797 13.7936 9.16797 13.3333Z"
                fill="#DC3545"
              />
            </svg>
          </span>
        ) : null}
      </div>
      {errors.email ? (
        <p className="mt-[10px] text-sm text-red absolute"> {errors.email}</p>
      ) : null}
    </>
  );
};

export default EmailInput;
