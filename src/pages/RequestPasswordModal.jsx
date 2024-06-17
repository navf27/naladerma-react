import React, { useEffect, useRef, useState } from "react";
import { useSignInContext } from "../context/SignInContext";
import { useFormikContext } from "../context/FormikContext";

const RequestPasswordModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setResetModalOpened } = useSignInContext();
  const { handleSubmit, values, handleChange, errors } = useFormikContext();

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto">
        {/* <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button> */}
        <div
          className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
              Masukkan email untuk reset password
            </h3>
            <span
              className={`mx-auto mb-5 inline-block h-1 w-[90px] rounded bg-[#FFCC00]`}
            ></span>
            {/* <p className="mb-10 text-base leading-relaxed text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p> */}
            <form onSubmit={handleSubmit}>
              <>
                <label className="mb-[10px] text-dark-4 block text-left text-base font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email anda"
                  className="w-full mb-10 bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => setResetModalOpened(false)}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white "
                  >
                    Batal
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestPasswordModal;
