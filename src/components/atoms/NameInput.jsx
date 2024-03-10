import React from "react";
import { useFormikContext } from "../../context/FormikContext";

const NameInput = () => {
  const { values, handleChange, errors } = useFormikContext();
  const errClassName =
    "w-full bg-transparent rounded-md border border-red py-[10px] pr-3 pl-12 text-dark-6 outline-none transition";
  const trueClassName =
    "w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2";

  return (
    <>
      <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
        Name
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Nama Lengkap"
          className={errors.name ? errClassName : trueClassName}
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <span className="absolute top-1/2 left-4 -translate-y-1/2">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72 12.886a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666a4.17 4.17 0 0 1 1.22-2.947ZM10 3.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.166 2.5a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z"
              opacity={0.8}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#9CA3AF"
            />
          </svg>
        </span>
        {errors.name ? (
          <span className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#FFFEFB] w-7">
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
      {errors.name ? (
        <p className="mt-[10px] lg:mt-0 text-sm text-red absolute">
          {errors.name}
        </p>
      ) : null}
    </>
  );
};

export default NameInput;
