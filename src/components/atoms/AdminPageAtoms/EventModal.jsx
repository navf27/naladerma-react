import { useAdminDashboardContext } from "../../../context/AdminDashboardContext";
import { useFormikContext } from "../../../context/FormikContext";
import EventModalInputSkeleton from "../AdminPageAtoms/EventModalInputSkeleton";

const EventModal = ({ categories }) => {
  const {
    eventModalOpened,
    setEventModalOpened,
    loading,
    setEventIdToUpdate,
    setEventDetail,
    eventDetail,
    setImage,
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
          className={`fixed left-0 top-0 flex h-dvh min-h-screen w-dvw items-center justify-center bg-black bg-opacity-60 px-4 py-5 pb-20 lg:pb-5`} //sementara kasih pb-20
        >
          <div
            // onFocus={() => setEventModalOpened(false)}
            className="w-full h-full max-w-[570px] rounded-[20px] bg-[#FFFEFB] p-8 text-center md:px-[70px] md:py-[60px]"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="lg:-mt-4">
                <div>
                  <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
                    Detail Event
                  </h3>
                  <span
                    className={`mx-auto mb-5 inline-block h-1 w-[90px] rounded bg-[#FFD970]`}
                  ></span>
                </div>
              </div>
              <div className="h-full overflow-y-auto overflow-x-hidden">
                {eventDetail ? (
                  <form onSubmit={handleSubmit}>
                    <div className="w-full mb-4">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Nama Event
                      </label>
                      <input
                        type="text"
                        placeholder="Nama Event"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        defaultValue={eventDetail?.name}
                        onChange={handleChange}
                        name="name"
                      />
                    </div>
                    <div className="w-full mb-4">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Kategori
                      </label>
                      <div className="relative z-20">
                        <select
                          defaultValue={eventDetail?.category?.id}
                          className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                          onChange={handleChange}
                          name="category_id"
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
                    <div className="w-full mb-2">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Deskripsi
                      </label>
                      <textarea
                        rows="5"
                        placeholder="Deskripsi"
                        className="w-full appearance-none bg-transparent rounded-md border border-stroke p-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                        defaultValue={eventDetail?.description}
                        onChange={handleChange}
                        name="description"
                      />
                    </div>
                    <div className="w-full mb-4">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Status
                      </label>
                      <div className="relative z-20">
                        <select
                          defaultValue={eventDetail?.status}
                          className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                          onChange={handleChange}
                          name="status"
                        >
                          <option value="ongoing">On Going</option>
                          <option value="upcoming">Up Coming</option>
                          <option value="finished">Finished</option>
                        </select>
                        <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                      </div>
                    </div>
                    <div className="w-full mb-4">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Lokasi
                      </label>
                      <input
                        type="text"
                        placeholder="Lokasi"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        defaultValue={eventDetail?.location}
                        onChange={handleChange}
                        name="location"
                      />
                    </div>
                    <div className="w-full mb-4">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Waktu Mulai
                      </label>
                      <div className="flex">
                        <input
                          type="datetime-local"
                          name="start_time"
                          className="border border-stroke px-2 text-dark-6 rounded-md"
                          onChange={handleChange}
                          defaultValue={eventDetail?.start_time}
                        />
                      </div>
                      {/* {errors.location ? (
                        <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                          {errors.start_time}
                        </p>
                      ) : null} */}
                    </div>
                    <div className="w-full mb-4">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Waktu Berakhir
                      </label>
                      <div className="flex">
                        <input
                          type="datetime-local"
                          name="time_ends"
                          className="border border-stroke px-2 text-dark-6 rounded-md"
                          onChange={handleChange}
                          defaultValue={eventDetail?.time_ends}
                        />
                      </div>
                      {/* {errors.location ? (
                        <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                          {errors.time_ends}
                        </p>
                      ) : null} */}
                    </div>
                    <div className="w-full mb-4">
                      <label className="mb-2 text-left block text-base font-medium text-body-color">
                        Harga
                      </label>
                      <input
                        type="number"
                        placeholder="Harga"
                        className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                        defaultValue={eventDetail?.price}
                        onChange={handleChange}
                        name="price"
                      />
                    </div>
                    <div className="w-full mb-7">
                      <label className="mb-2 block text-base font-medium text-body-color text-left">
                        Gambar Baru
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full cursor-pointer rounded-md border border-stroke text-dark-6 outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-gray-2 file:py-3 file:px-5 file:text-body-color file:hover:bg-[#FFCC00] file:hover:bg-opacity-10 focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
                      />
                    </div>
                    {/* <div className="-mx-3 flex flex-wrap mt-7 fixed left-10 bottom-28 w-80 bg-[#FFFEFB] z-30 pt-3">
                      <div className="w-1/2 px-3">
                        <button
                          onClick={() => {
                            setEventDetail(null);
                            setEventIdToUpdate(null);
                            setEventModalOpened(false);
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
                    </div> */}
                    <div className="flex justify-between lg:bg-[#FFFEFB] lg:w-full lg:pt-5">
                      <div className="w-1/2 px-3">
                        <button
                          onClick={() => {
                            setEventDetail(null);
                            setEventIdToUpdate(null);
                            setEventModalOpened(false);
                          }}
                          className="block w-full bg-[#FFFEFB] rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
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
                    {/* <div className="mt-6 fixed bottom-28 w-full left-0 px-10 z-20 lg:bottom-16">
                      <div className="flex bg-[#FFFEFB] pt-5 lg:px-96 lg:bg-transparent">
                        <div className="boder border-red lg:flex lg:bg-[#FFFEFB] lg:w-full lg:pt-5">
                          <div className="w-1/2 px-3">
                            <button
                              onClick={() => {
                                setEventDetail(null);
                                setEventIdToUpdate(null);
                                setEventModalOpened(false);
                              }}
                              className="block w-full bg-[#FFFEFB] rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
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
                      </div>
                    </div> */}
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

export default EventModal;
