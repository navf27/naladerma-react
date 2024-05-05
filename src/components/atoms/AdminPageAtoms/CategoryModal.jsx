import { useAdminDashboardContext } from "../../../context/AdminDashboardContext";
import { useFormikContext } from "../../../context/FormikContext";
import EventModalInputSkeleton from "../AdminPageAtoms/EventModalInputSkeleton";

const CategoryModal = () => {
  const {
    eventModalOpened,
    setCategoryModalOpened,
    loading,
    setCategoryIdToUpdate,
    setCategoryDetail,
    categoryDetail,
  } = useAdminDashboardContext();
  const { handleChange, handleSubmit } = useFormikContext();

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
          className={`fixed left-0 top-0 flex h-dvh min-h-screen w-dvw items-center justify-center bg-black bg-opacity-60 px-4 py-5 pb-20`} //sementara kasih pb-20
        >
          <div className="w-full max-w-[570px] rounded-[20px] bg-[#FFFEFB] p-8 text-center md:px-[70px] md:py-[60px]">
            <div className="flex flex-col h-full justify-between lg:-mt-3">
              <div className="">
                <div>
                  <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
                    Detail Kategori
                  </h3>
                  <span
                    className={`mx-auto mb-5 inline-block h-1 w-[90px] rounded bg-[#FFD970]`}
                  ></span>
                </div>
              </div>
              <div className="h-full overflow-y-auto overflow-x-hidden">
                {categoryDetail ? (
                  <form onSubmit={handleSubmit}>
                    <div className="w-full mb-4 md:w-1/2 lg:w-1/3 lg:w-full">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Nama Kategori
                      </label>
                      <input
                        type="text"
                        placeholder="Nama Kategori"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 lg:w-full"
                        defaultValue={categoryDetail?.name}
                        onChange={handleChange}
                        name="name"
                      />
                    </div>
                    <div className="flex bg-[#FFFEFB] mt-6">
                      <div className="w-1/2 px-3">
                        <button
                          onClick={() => {
                            setCategoryDetail(null);
                            setCategoryIdToUpdate(null);
                            setCategoryModalOpened(false);
                          }}
                          className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="w-1/2 px-3">
                        <button
                          type="submit"
                          className="block w-full rounded-md border border-[#FFCC00] bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]"
                        >
                          <a> Simpan </a>
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <EventModalInputSkeleton />
                )}
              </div>
              {/* <div className="-mx-3 flex flex-wrap mt-7 border border-yellow">
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => {
                      setEventModalOpened(false);
                      setEventDetail(null);
                    }}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button className="block w-full rounded-md border border-[#FFCC00] bg-[#FFCC00] p-3 text-center text-base font-medium text-dark transition hover:bg-[#FFBB00]">
                    <a> Simpan </a>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;
