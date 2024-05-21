import React, { useEffect, useRef, useState } from "react";
import { useEventDetailContext } from "../../context/EventDetailContext";

const EventDetailModal = () => {
  const { setModalOpened, quantity } = useEventDetailContext();

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
      <div className="container mx-auto py-20">
        {/* <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button> */}
        <div
          className={`fixed z-40 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]"
          >
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
            <div className="h-72 overflow-y-auto mt-3 mb-4">
              <form>
                <>
                  <label className="mb-[10px] block text-base font-medium text-dark-4 text-start">
                    Nama
                  </label>
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                  />
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark-4 text-start">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                  />
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark-4 text-start">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="number"
                    placeholder="Nomor WhatsApp"
                    className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                  />
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark text-start">
                    Jumlah Tiket
                  </label>
                  <input
                    type="text"
                    placeholder={quantity}
                    disabled
                    className="w-full rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                  />
                </>
                <>
                  <label className="mb-[10px] mt-[10px] block text-base font-medium text-dark text-start">
                    Total Harga
                  </label>
                  <input
                    type="text"
                    placeholder={`Rp 50000`}
                    disabled
                    className="w-full rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                  />
                </>
              </form>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpened(false)}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Batal
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button className="block w-full rounded-md border border-[#FFCC00] bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]">
                  <a href={`/#`}>Bayar</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetailModal;

const DefaultColumn = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="mb-12">{children}</div>
    </div>
  );
};
