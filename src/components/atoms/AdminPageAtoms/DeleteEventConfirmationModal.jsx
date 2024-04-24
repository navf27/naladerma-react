import React from "react";
import { useAdminDashboardContext } from "../../../context/AdminDashboardContext";

const DeleteEventConfirmationModal = () => {
  const {
    setDeleteEventConfirmationOpened,
    eventToDelete,
    setEventToDelete,
    onEventDelete,
    loading,
  } = useAdminDashboardContext();

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}
      <div className={`container absolute z-40 mx-auto`}>
        <div
          className={`fixed left-0 top-0 flex h-dvh min-h-screen w-dvw items-center justify-center bg-black bg-opacity-60 px-4 py-5 `} //sementara kasih pb-20
        >
          <div className="w-full max-w-[570px] rounded-[20px] bg-[#FFFEFB] p-8 text-center md:px-[70px] md:py-[60px]">
            <div className="flex flex-col h-full gap-7">
              <div>
                <h3 className="pb-2 text-xl font-semibold text-dark sm:text-2xl">
                  Hapus Event
                </h3>
                <span
                  className={`mx-auto inline-block h-1 w-[90px] rounded bg-[#FFD970]`}
                ></span>
              </div>
              <div className="h-full overflow-y-auto overflow-x-hidden">
                <p>
                  Anda yakin akan menghapus
                  <span className="font-semibold"> {eventToDelete.name}?</span>
                </p>
              </div>
              <div className="flex mt-2">
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => {
                      setDeleteEventConfirmationOpened(false);
                      setEventToDelete(null);
                    }}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFCC00]"
                  >
                    Batal
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => onEventDelete(eventToDelete.id)}
                    className="block w-full rounded-md bg-[#DC2626] p-3 text-center text-base font-medium text-white transition hover:bg-[#ca3030]"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteEventConfirmationModal;
