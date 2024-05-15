import { useState } from "react";
import { useAdminDashboardContext } from "../../../context/AdminDashboardContext";
import { useFormikContext } from "../../../context/FormikContext";
import EventModalInputSkeleton from "../AdminPageAtoms/EventModalInputSkeleton";
// import DateTimePicker from "react-datetime-picker";

const AddEventModal = ({ categories }) => {
  const {
    addEventModalOpened,
    setAddEventModalOpened,
    loading,
    setEventIdToUpdate,
    setEventDetail,
    eventDetail,
    setImage,
  } = useAdminDashboardContext();
  const { handleChange, handleSubmit, errors } = useFormikContext();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChangeDate = (date) => {
    setSelectedDate(date);
    // Di sini Anda dapat melakukan operasi atau logika bisnis sesuai kebutuhan aplikasi
    console.log("Tanggal yang dipilih:", date);
  };

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
          <div className="w-full h-full max-w-[570px] rounded-[20px] bg-[#FFFEFB] p-8 text-center md:px-[70px] md:py-[60px] relative">
            {/* <div className="flex justify-between absolute">
              <div>cancel</div>
              <div>simpan</div>
            </div> */}
            <div className="absolute top-8 left-8">
              <button
                onClick={() => {
                  setAddEventModalOpened(false);
                }}
                className="opacity-75"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[25px] h-[25px]"
                >
                  <path
                    d="M936 120a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm4.706 14.706a.951.951 0 0 1-1.345 0l-3.376-3.376-3.376 3.376a.949.949 0 1 1-1.341-1.342l3.376-3.376-3.376-3.376a.949.949 0 1 1 1.341-1.342l3.376 3.376 3.376-3.376a.949.949 0 1 1 1.342 1.342l-3.376 3.376 3.376 3.376a.95.95 0 0 1 .003 1.342Z"
                    style={{
                      fillRule: "evenodd",
                    }}
                    transform="translate(-924 -96)"
                  />
                </svg> */}
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
            <div className="flex flex-col h-full justify-between">
              <div className="lg:-mt-4">
                <div>
                  <h3 className="pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
                    Tambah Event
                  </h3>
                  <span
                    className={`mx-auto mb-5 inline-block h-1 w-[90px] rounded bg-[#FFD970]`}
                  ></span>
                </div>
              </div>
              <div className="h-full overflow-y-auto overflow-x-hidden">
                <form onSubmit={handleSubmit}>
                  <div className="w-full mb-4">
                    <label className="mb-2 text-left block text-base font-medium text-body-color">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Nama"
                      className={`w-full bg-transparent rounded-md border ${
                        errors.name ? "border-red" : "border-stroke"
                      } py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2`}
                      onChange={handleChange}
                      name="name"
                    />
                    {errors.name ? (
                      <p className="mt-2 lg:-mt-1 text-sm text-red text-left">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full mb-4">
                    <label className="mb-2 block text-base font-medium text-body-color text-left">
                      Kategori
                    </label>
                    <div className="relative z-20">
                      <select
                        className={`relative z-20 w-full appearance-none rounded-lg border ${
                          errors.category_id ? "border-red" : "border-stroke"
                        } bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2`}
                        onChange={handleChange}
                        name="category_id"
                        defaultValue={""}
                      >
                        <option value={""} disabled>
                          -- Pilih Kategori --
                        </option>
                        {categories?.map((item, index) => (
                          <option value={item.id} key={index}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                    </div>
                    {errors.category_id ? (
                      <p className="mt-2 lg:-mt-1 text-sm text-red text-left">
                        {errors.category_id}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full mb-2">
                    <label className="mb-2 block text-base font-medium text-body-color text-left">
                      Deskripsi
                    </label>
                    <textarea
                      rows="5"
                      placeholder="Deskripsi"
                      className={`w-full appearance-none bg-transparent rounded-md border ${
                        errors.description ? "border-red" : "border-stroke"
                      } p-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2`}
                      onChange={handleChange}
                      name="description"
                    />
                    {errors.description ? (
                      <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                        {errors.description}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full mb-4">
                    <label className="mb-2 block text-base font-medium text-body-color text-left">
                      Status
                    </label>
                    <div className="relative z-20">
                      <select
                        className={`relative z-20 w-full appearance-none rounded-lg border ${
                          errors.status ? "border-red" : "border-stroke"
                        } bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2`}
                        onChange={handleChange}
                        name="status"
                        defaultValue={""}
                      >
                        <option value={""} disabled>
                          -- Pilih Status --
                        </option>
                        <option value="ongoing">On Going</option>
                        <option value="upcoming">Up Coming</option>
                        <option value="finished">Finished</option>
                      </select>
                      <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                    </div>
                    {errors.status ? (
                      <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                        {errors.status}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full mb-4">
                    <label className="mb-2 text-left block text-base font-medium text-body-color">
                      Lokasi
                    </label>
                    <input
                      type="text"
                      placeholder="Lokasi"
                      className={`w-full bg-transparent rounded-md border ${
                        errors.location ? "border-red" : "border-stroke"
                      } py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2`}
                      onChange={handleChange}
                      name="location"
                    />
                    {errors.location ? (
                      <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                        {errors.location}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full mb-4">
                    <label className="mb-2 text-left block text-base font-medium text-body-color">
                      Harga
                    </label>
                    <input
                      type="number"
                      placeholder="Harga"
                      className={`w-full bg-transparent rounded-md border ${
                        errors.price ? "border-red" : "border-stroke"
                      } py-[10px] px-12 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2`}
                      onChange={handleChange}
                      name="price"
                    />
                    <p className="text-left relative -top-9 left-5 text-slate-400 w-fit">
                      Rp.
                    </p>
                    {errors.price ? (
                      <p className="-mt-5 lg:-mt-1 text-sm text-red text-left">
                        {errors.price}
                      </p>
                    ) : null}
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
                      />
                    </div>
                    {errors.location ? (
                      <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                        {errors.start_time}
                      </p>
                    ) : null}
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
                      />
                    </div>
                    {errors.location ? (
                      <p className="mt-1 lg:-mt-1 text-sm text-red text-left">
                        {errors.time_ends}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full mb-7">
                    <label className="mb-2 block text-base font-medium text-body-color text-left">
                      Gambar
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
                          setAddEventModalOpened(false);
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

                  {/* check submit button */}
                  {/* <button type="submit" className="absolute top-6 right-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-[30px] h-[30px]"
                    >
                      <g stroke="#323232" strokeWidth={2}>
                        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9 12 1.683 1.683v0c.175.175.459.175.634 0v0L15 10"
                        />
                      </g>
                    </svg>
                  </button> */}

                  <div className="flex justify-between lg:bg-[#FFFEFB] lg:w-full lg:pt-5">
                    <div className="w-1/2 px-3">
                      <button
                        onClick={() => {
                          setAddEventModalOpened(false);
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
                </form>
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

export default AddEventModal;
