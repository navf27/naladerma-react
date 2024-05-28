import React, { useEffect, useState } from "react";
import Navbar from "../components/atoms/Navbar";
import Footer from "../components/atoms/Footer";
import { useHomeContext } from "../context/HomeContext";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useSignOutContext } from "../context/SignOutContext";
import { useNavigate } from "react-router-dom";

const AllEvent = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8];
  const { getAllEvents, loadingContext, fetchedEvents } = useHomeContext();
  const { authCheck, logoutLoading } = useSignOutContext();
  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState();
  const navigate = useNavigate();

  const sortedEvents = fetchedEvents;

  useEffect(() => {
    window.scrollTo(0, 0);

    authCheck();

    getAllEvents();

    // return () => {
    //   second;
    // };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = fetchedEvents?.filter(
      (event) =>
        event.name.toLowerCase().includes(value) ||
        event.location.toLowerCase().includes(value) ||
        event.price.toString().includes(value)
    );

    setFilteredEvents(filtered);
  };

  return (
    <>
      {logoutLoading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}
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
            value={search}
            onChange={handleSearch}
          />
        </div>
        {/* content start here */}

        <div className="lg:px-10">
          <div className="flex flex-col mt-10 lg:mt-14 items-center gap-5 lg:gap-6 lg:px-2 lg:flex-row lg:flex-wrap lg:justify-start">
            {loadingContext
              ? count.map((value, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFEFB] max-w-[320px] rounded-lg drop-shadow-md w-full"
                    // onClick={() => navigate(`/event/${data.id}`)}
                  >
                    <div className="flex justify-center">
                      {/* <img
                    src={
                      "https://placehold.co/340x200?text=Square+Event+Picture"
                    }
                    alt="Event Picture"
                    className="rounded-t-lg object-contain max-w-[320px] h-48"
                    draggable={false}
                  /> */}
                      <div className="bg-gray-300 animate-pulse w-full h-44 rounded-t-lg"></div>
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <div className="flex gap-2 items-center w-fit">
                        <div>
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
                        </div>
                        <div>
                          <p className="text-md text-body-color mt-[3px] font-medium bg-gray-300 rounded-full animate-pulse">
                            <span className="invisible">03 Mei 2024</span>
                            {/* {formattedDate} */}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-white mt-[3px] bg-gray-300 p-1 rounded-full animate-pulse">
                            <span className="invisible">Akan Datang</span>
                          </p>
                        </div>
                      </div>
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
                            d="M12 7v5h3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <p className="text-md text-body-color pt-1 font-medium bg-gray-300 rounded-full animate-pulse">
                          <span className="invisible">00:00 - 00:00 WIB</span>
                          {/* {formattedTime +
                        " - " +
                        format(new Date(latestEvent?.time_ends), "HH:mm") +
                        " WIB"} */}
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="text-md text-dark-4 text-me font-medium bg-gray-300 rounded-full animate-pulse">
                          <span className="invisible">
                            Mengenal sejarah wayang beber
                          </span>
                          {/* {data.name} */}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#3EA644] font-semibold w-fit bg-gray-300 rounded-full">
                          <span className="invisible">Rp. 25.000</span>
                          {/* {`Rp. ` + data.price} */}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              : sortedEvents?.map((value, index) => (
                  <div
                    key={index}
                    className={`${
                      search === "" ? "block" : "hidden"
                    } bg-[#FFFEFB] max-w-[320px] rounded-lg shadow-lg lg:h-fit lg:shadow-none lg:border-2 lg:border-slate-200 w-full`}
                    onClick={() => navigate(`/event/${value?.id}`)}
                  >
                    <div className="flex justify-center max-h-48">
                      <img
                        src={value?.img_link}
                        alt={value?.name}
                        className="rounded-t-lg object-cover"
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
                            d="M12 7v5h3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <p className="text-md text-body-color pt-1 font-medium">
                          {format(new Date(value?.start_time), "HH:mm") +
                            " - " +
                            format(new Date(value?.time_ends), "HH:mm") +
                            " WIB"}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 opacity-70"
                        >
                          <g
                            fill="#0F0F0F"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M12.004 14.004a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.997a2.504 2.504 0 1 1 0-5.007 2.504 2.504 0 0 1 0 5.007Z" />
                            <path d="M21.272 11.582C22.565 5.788 18.005.004 12 .004c-6.004 0-10.564 5.792-9.272 11.579.997 4.7 5.03 9.263 7.436 11.644a2.588 2.588 0 0 0 3.672 0c2.407-2.38 6.44-6.945 7.436-11.645ZM12 2.004c4.712 0 8.337 4.586 7.32 9.142-.488 2.19-1.584 4.155-2.87 5.973-1.344 1.9-2.867 3.545-4.02 4.686a.589.589 0 0 1-.86 0c-1.153-1.14-2.676-2.786-4.02-4.686-1.286-1.817-2.381-3.783-2.87-5.972C3.664 6.597 7.29 2.004 12 2.004Z" />
                          </g>
                        </svg>
                        <p className="text-md text-body-color pt-1 font-medium">
                          {value?.location}
                        </p>
                      </div>
                      <div className="my-2 max-w-[300px]">
                        <p className="text-md text-dark-4 font-medium">
                          {/* Mengenal sejarah wayang beber di Surakarta */}
                          {/* {value?.name} */}
                          {value.name?.length <= 25
                            ? value.name
                            : value.name.substring(0, 25) + "..."}
                        </p>
                      </div>
                      <div>
                        <p className="text-[#3EA644] font-semibold w-fit">
                          {/* Rp. 25.000 */}
                          {"Rp. " + value?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            {filteredEvents &&
              filteredEvents?.map((value, index) => (
                <div
                  key={index}
                  className={`${
                    search === "" ? "hidden" : "block"
                  } bg-[#FFFEFB] max-w-[320px] rounded-lg shadow-lg lg:h-fit lg:shadow-none lg:border-2 lg:border-slate-200 w-full`}
                  onClick={() => navigate(`/event/${value?.id}`)}
                >
                  <div className="flex justify-center max-h-48">
                    <img
                      src={value.img_link}
                      alt=""
                      className="rounded-t-lg object-cover"
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
                          d="M12 7v5h3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <p className="text-md text-body-color pt-1 font-medium">
                        {format(new Date(value?.start_time), "HH:mm") +
                          " - " +
                          format(new Date(value?.time_ends), "HH:mm") +
                          " WIB"}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-5 w-5 opacity-70"
                      >
                        <g fill="#0F0F0F" fillRule="evenodd" clipRule="evenodd">
                          <path d="M12.004 14.004a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.997a2.504 2.504 0 1 1 0-5.007 2.504 2.504 0 0 1 0 5.007Z" />
                          <path d="M21.272 11.582C22.565 5.788 18.005.004 12 .004c-6.004 0-10.564 5.792-9.272 11.579.997 4.7 5.03 9.263 7.436 11.644a2.588 2.588 0 0 0 3.672 0c2.407-2.38 6.44-6.945 7.436-11.645ZM12 2.004c4.712 0 8.337 4.586 7.32 9.142-.488 2.19-1.584 4.155-2.87 5.973-1.344 1.9-2.867 3.545-4.02 4.686a.589.589 0 0 1-.86 0c-1.153-1.14-2.676-2.786-4.02-4.686-1.286-1.817-2.381-3.783-2.87-5.972C3.664 6.597 7.29 2.004 12 2.004Z" />
                        </g>
                      </svg>
                      <p className="text-md text-body-color pt-1 font-medium">
                        {value?.location}
                      </p>
                    </div>
                    <div className="my-2 max-w-[300px]">
                      <p className="text-md text-dark-4 font-medium">
                        {/* Mengenal sejarah wayang beber di Surakarta */}
                        {/* {value?.name} */}
                        {value.name?.length <= 25
                          ? value.name
                          : value.name.substring(0, 25) + "..."}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#3EA644] font-semibold w-fit">
                        {/* Rp. 25.000 */}
                        {"Rp. " + value?.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* content ends here */}
      </div>
      <Footer />
    </>
  );
};

export default AllEvent;
