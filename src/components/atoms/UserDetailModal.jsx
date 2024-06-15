import React, { useEffect, useRef, useState } from "react";
import { useUserDashboardContext } from "../../context/UserDashboardContext";
import { useSignOutContext } from "../../context/SignOutContext";
import { useFormikContext } from "../../context/FormikContext";

const UserDetailModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setModalOpened } = useUserDashboardContext();
  const { handleSubmit, handleChange, errors, values } = useFormikContext();

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
          className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5}`}
        >
          <div
            // ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] relative rounded-[20px] bg-white px-8 py-12 md:px-[70px] md:py-[60px]"
          >
            <div className="absolute top-6 right-6 lg:right-9 lg:top-9">
              <button
                onClick={() => {
                  setModalOpened(false);
                }}
                className="opacity-75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-[25px] h-[25px]"
                >
                  <title>{"Close"}</title>
                  <path d="m19.587 16.001 6.096 6.096a1.015 1.015 0 0 1 0 1.435l-2.151 2.151a1.015 1.015 0 0 1-1.435 0L16 19.587l-6.097 6.096a1.014 1.014 0 0 1-1.434 0l-2.152-2.151a1.015 1.015 0 0 1 0-1.435l6.097-6.096-6.097-6.097a1.015 1.015 0 0 1 0-1.435L8.47 6.318a1.014 1.014 0 0 1 1.434 0L16 12.415l6.097-6.097a1.015 1.015 0 0 1 1.435 0l2.151 2.152a1.015 1.015 0 0 1 0 1.435l-6.096 6.096z" />
                </svg>
              </button>
            </div>
            <h3 className="pb-[15px] text-2xl text-center font-semibold text-dark sm:text-2xl">
              Data Diri
            </h3>
            <div className="flex justify-center">
              <span
                className={`mx-auto mb-6 inline-block h-1 w-[120px] rounded bg-[#FFCC00]`}
              ></span>
            </div>
            {/*  */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <>
                <label className="block text-base font-medium text-dark">
                  Nama
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  placeholder="Masukkan nama"
                  className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </>
              <>
                <label className="block text-base font-medium text-dark">
                  Email
                </label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Masukkan email"
                  className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </>
              <>
                <label className="block text-base font-medium text-dark">
                  Nomor
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  type="text"
                  placeholder="Masukkan nomor"
                  className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                />
              </>
              <div className="-mx-3 flex flex-wrap mt-4">
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => setModalOpened(false)}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Batal
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]"
                  >
                    Simpan
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

export default UserDetailModal;
