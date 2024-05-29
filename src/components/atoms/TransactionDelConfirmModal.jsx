import React, { useEffect, useRef, useState } from "react";
// import { useTransactionPendingContext } from "../../context/TransactionPendingContext";
import { useSignOutContext } from "../../context/SignOutContext";

const TransactionDelConfirmModal = ({ eventName }) => {
  //   const [modalOpen, setModalOpen] = useState(false);s
  const {
    setDelConfirmOpened,
    delConfirmOpened,
    setTrsToDelete,
    trsToDelete,
    onTransactionDelete,
  } = useSignOutContext();

  // const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  //   useEffect(() => {
  //     const clickHandler = ({ target }) => {
  //       if (!modal.current) return;
  //       if (
  //         !modalOpen ||
  //         modal.current.contains(target) ||
  //         trigger.current.contains(target)
  //       )
  //         return;
  //       setModalOpen(false);
  //     };
  //     document.addEventListener("click", clickHandler);
  //     return () => document.removeEventListener("click", clickHandler);
  //   });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!setDelConfirmOpened || keyCode !== 27) return;
      setDelConfirmOpened(false);
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
          className={`fixed z-20 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            delConfirmOpened ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setDelConfirmOpened(true)}
            onBlur={() => setDelConfirmOpened(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
              Anda yakin akan menghapus transaksi?
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-[#DC2626]`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color">
              Transaksi{" "}
              <span className="font-semibold">{trsToDelete?.event?.name}</span>{" "}
              akan dihapus. Lakukan pemesanan ulang jika ingin memesan kembali.
            </p>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => {
                    setTrsToDelete(null);
                    setDelConfirmOpened(false);
                  }}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Batal
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button
                  onClick={() => {
                    onTransactionDelete(trsToDelete.id);
                  }}
                  className="block w-full rounded-md border bg-[#DC2626] p-3 text-center text-base font-medium text-white transition hover:bg-[#bb3939]"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDelConfirmModal;
