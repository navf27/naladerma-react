import { useAdminDashboardContext } from "../../../context/AdminDashboardContext";
import EventModalInputSkeleton from "../AdminPageAtoms/EventModalInputSkeleton";

const EventModalTest = ({ setEventDetail, eventDetail, categories }) => {
  const { eventModalOpened, setEventModalOpened } = useAdminDashboardContext();

  return (
    <>
      <div
        className={`${
          eventModalOpened ? "block" : "hidden"
        } container absolute z-50 mx-auto`}
      >
        <div
          className={`fixed left-0 top-0 flex h-dvh min-h-screen w-dvw items-center justify-center bg-black bg-opacity-80 px-4 py-5 pb-20`} //sementara kasih pb-20
        >
          <div
            onFocus={() => setEventModalOpened(true)}
            className="w-full h-full max-w-[570px] rounded-[20px] bg-[#FFFEFB] p-8 pb-9 text-center md:px-[70px] md:py-[60px]"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="">
                <div>
                  <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
                    Detail Event
                  </h3>
                  <span
                    className={`mx-auto mb-5 inline-block h-1 w-[90px] rounded bg-[#FFD970]`}
                  ></span>
                </div>
              </div>
              <div className="h-full overflow-y-auto">
                {eventDetail ? (
                  <form>
                    <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Nama Event
                      </label>
                      <input
                        type="text"
                        placeholder="Nama Event"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        defaultValue={eventDetail.name}
                      />
                    </div>
                    <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Kategori
                      </label>
                      <div className="relative z-20">
                        <select
                          defaultValue={eventDetail?.category?.id}
                          className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                        >
                          {categories?.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                      </div>
                    </div>
                    <div className="w-full mb-2 md:w-1/2 lg:w-1/3">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Deskripsi
                      </label>
                      <textarea
                        rows="5"
                        placeholder="Deskripsi"
                        className="w-full appearance-none bg-transparent rounded-md border border-stroke p-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                        defaultValue={eventDetail.description}
                      />
                    </div>
                    <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Status
                      </label>
                      <div className="relative z-20">
                        <select
                          defaultValue={eventDetail?.status}
                          className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                        >
                          <option value="ongoing">On Going</option>
                          <option value="upcoming">Up Coming</option>
                          <option value="finished">Finished</option>
                        </select>
                        <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                      </div>
                    </div>
                    <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Lokasi
                      </label>
                      <input
                        type="text"
                        placeholder="Lokasi"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        defaultValue={eventDetail.location}
                      />
                    </div>
                    <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Harga
                      </label>
                      <input
                        type="text"
                        placeholder="Harga"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        defaultValue={eventDetail.price}
                      />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Gambar Baru
                      </label>
                      <input
                        type="file"
                        className="w-full cursor-pointer rounded-md border border-stroke text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-gray-2 file:py-3 file:px-5 file:text-body-color file:hover:bg-[#FFCC00] file:hover:bg-opacity-10 focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                      />
                    </div>
                  </form>
                ) : (
                  <EventModalInputSkeleton />
                )}
              </div>
              <div className="-mx-3 flex flex-wrap mt-7">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModalTest;
