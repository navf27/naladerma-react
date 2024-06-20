import React, { useEffect, useRef, useState } from "react";
import { useEventDetailContext } from "../../context/EventDetailContext";
import { useFormikContext } from "../../context/FormikContext";

const EventDetailModal = ({ userInfo }) => {
  const {
    setModalOpened,
    quantityBuy,
    eventFetched,
    loadingUserInfo,
    setBuyButtonClicked,
    loadingCheckout,
    snapOpened,
    setSnapOpened,
  } = useEventDetailContext();

  const { handleSubmit, handleChange, errors, values } = useFormikContext();

  const [modalOpen, setModalOpen] = useState(false);

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
      {loadingCheckout ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}

      <div className="container mx-auto">
        <div
          className={`fixed z-40 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px] relative"
          >
            <div className="absolute top-6 right-6 lg:right-9 lg:top-9">
              <button
                onClick={() => {
                  setBuyButtonClicked(false);
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
            <h3 className="pb-[10px] text-2xl font-semibold text-dark sm:text-2xl text-start">
              Data Pembeli
            </h3>
            <p className={`rounded text-start text-dark-3`}>
              Pastikan data di bawah ini terisi dengan benar.
            </p>
            {/* <p className="mb-10 text-base leading-relaxed text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p> */}
            <div className="h-72 overflow-y-auto overflow-x-hidden mt-3 mb-4">
              <form onSubmit={handleSubmit}>
                <>
                  <label className="mb-[10px] block text-base font-medium text-dark-4 text-start">
                    Nama
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder={loadingUserInfo ? null : "Nama"}
                    className={`w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 ${
                      loadingUserInfo ? "bg-dark-7 animate-pulse" : null
                    } `}
                    defaultValue={userInfo ? userInfo.name : null}
                    // value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="mt-[5px] text-sm text-red text-left">
                      {errors.name}
                    </p>
                  )}
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark-4 text-start">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder={loadingUserInfo ? null : "Email"}
                    className={`w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 ${
                      loadingUserInfo ? "bg-dark-7 animate-pulse" : null
                    }`}
                    defaultValue={userInfo ? userInfo.email : null}
                    // value={values.email}
                    onChange={handleChange}
                  />{" "}
                  {errors.email && (
                    <p className="mt-[5px] text-sm text-red text-left">
                      {errors.email}
                    </p>
                  )}
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark-4 text-start">
                    Nomor Hp
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder={loadingUserInfo ? null : "Nomor Handphone"}
                    className={`w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 ${
                      loadingUserInfo ? "bg-dark-7 animate-pulse" : null
                    }`}
                    defaultValue={userInfo ? userInfo.phone : null}
                    // value={userInfo ? userInfo.phone : null}
                    onChange={handleChange}
                  />{" "}
                  {errors.phone && (
                    <p className="mt-[5px] text-sm text-red text-left">
                      {errors.phone}
                    </p>
                  )}
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark text-start">
                    Event
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder={"Event"}
                    disabled
                    className="w-full rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    defaultValue={eventFetched?.name}
                    // value={values.quantity}
                    onChange={handleChange}
                  />
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark text-start">
                    Jumlah Tiket
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder={"Jumlah"}
                    disabled
                    className="w-full rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    defaultValue={quantityBuy}
                    // value={values.quantity}
                    onChange={handleChange}
                  />
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark text-start">
                    Total Harga
                  </label>
                  <input
                    type="text"
                    placeholder={"Total Harga"}
                    defaultValue={"Rp. " + eventFetched?.price * quantityBuy}
                    disabled
                    className="w-full rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                  />
                </>
                <EmailAlert />
                <div className="-mx-3 flex flex-wrap mt-5">
                  <div className="w-1/2 px-3">
                    <button
                      onClick={() => {
                        setBuyButtonClicked(false);
                        setModalOpened(false);
                      }}
                      className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                    >
                      Batal
                    </button>
                  </div>
                  <div className="w-1/2 px-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-[#FFCC00] bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]"
                    >
                      Bayar <span className="hidden lg:inline">Sekarang</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailModal;

const EmailAlert = () => {
  return (
    <div className="flex mt-5 rounded-lg items-center bg-yellow-light-4 px-[18px] py-3 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)]">
      <div className="flex mr-3 w-8 lg:h-6 h-5 items-center justify-center rounded-full bg-yellow">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0156 11.6156L10.9969 1.93125C10.5188 1.28437 9.78752 0.918747 9.00002 0.918747C8.18439 0.918747 7.45314 1.28437 7.00314 1.93125L0.984395 11.6156C0.421895 12.375 0.33752 13.3594 0.759395 14.2031C1.18127 15.0469 2.02502 15.5812 2.98127 15.5812H15.0188C15.975 15.5812 16.8188 15.0469 17.2406 14.2031C17.6625 13.3875 17.5781 12.375 17.0156 11.6156ZM16.1156 13.6406C15.8906 14.0625 15.4969 14.3156 15.0188 14.3156H2.98127C2.50315 14.3156 2.10939 14.0625 1.88439 13.6406C1.68752 13.2187 1.71564 12.7406 1.99689 12.375L8.01564 2.69062C8.24064 2.38125 8.60627 2.18437 9.00002 2.18437C9.39377 2.18437 9.75939 2.35312 9.9844 2.69062L16.0031 12.375C16.2844 12.7406 16.3125 13.2187 16.1156 13.6406Z"
            fill="white"
          />
          <path
            d="M8.9999 6.15001C8.6624 6.15001 8.35303 6.43126 8.35303 6.79688V9.86251C8.35303 10.2 8.63428 10.5094 8.9999 10.5094C9.36553 10.5094 9.64678 10.2281 9.64678 9.86251V6.76876C9.64678 6.43126 9.3374 6.15001 8.9999 6.15001Z"
            fill="white"
          />
          <path
            d="M8.9999 11.25C8.6624 11.25 8.35303 11.5313 8.35303 11.8969V12.0375C8.35303 12.375 8.63428 12.6844 8.9999 12.6844C9.36553 12.6844 9.64678 12.4031 9.64678 12.0375V11.8688C9.64678 11.5313 9.3374 11.25 8.9999 11.25Z"
            fill="white"
          />
        </svg>
      </div>

      <p className="text-sm text-start font-medium text-[#D0915C]">
        Pastikan email anda benar, tiket akan dikirimkan melalui email.
      </p>
    </div>
  );
};
