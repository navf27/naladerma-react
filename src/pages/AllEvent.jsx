import React from "react";
import Navbar from "../components/atoms/Navbar";
import Footer from "../components/atoms/Footer";

const AllEvent = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Navbar />
      <div className="container mb-16">
        <div className="mt-6">
          <h2 className="text-center text-3xl font-semibold lg:text-3xl">
            Semua Event
          </h2>
          <div className="border-b-2 border-[#FFD970] w-72 lg:w-80 mx-auto drop-shadow-md mt-3"></div>
        </div>
        <div className="mt-5 lg:w-96 lg:mx-auto">
          <input
            type="text"
            placeholder="Cari Event"
            className="w-full bg-transparent rounded-full border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFBB00] active:border-[#FFBB00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
          />
        </div>
        {/* content start here */}

        <div className="flex flex-col mt-10 lg:mt-14 items-center gap-5 border border-red lg:gap-16 lg:px-2 lg:flex-row lg:flex-wrap lg:justify-start">
          {count.map((value, index) => (
            <div
              key={index}
              className="bg-[#FFFEFB] max-w-[320px] rounded-lg shadow-lg lg:h-fit lg:shadow-none lg:border-2 lg:border-slate-200"
            >
              <div className="flex justify-center">
                <img
                  src="https://placehold.co/320x200?text=Square+Event+Picture"
                  alt=""
                  className="rounded-t-lg object-contain max-w-[320px] max-h-[320px]"
                />
              </div>
              <div className="p-4">
                <div className="flex gap-2 items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 opacity-60"
                  >
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9h18M7 3v2m10-2v2M6 12h4v4H6v-4Zm.2 9h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z"
                    />
                  </svg>
                  <p className="text-md text-body-color pt-1 font-medium">
                    03 Mei 2024
                  </p>
                </div>
                <div className="my-2 max-w-[300px]">
                  <p className="text-md text-dark-4">
                    Mengenal sejarah wayang beber di Surakarta
                  </p>
                </div>
                <div>
                  <p className="text-[#3EA644] font-semibold w-fit">
                    Rp. 25.000
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* content ends here */}
      </div>
      <Footer />
    </>
  );
};

export default AllEvent;
