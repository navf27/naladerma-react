import React, { useEffect, useState } from "react";
import { useSignOutContext } from "../context/SignOutContext";
import Navbar from "../components/atoms/Navbar";
import pJoko from "../assets/images/pak-joko-square.jpg";
import pJokoTransparent from "../assets/images/pak-joko.png";
import testPic from "../assets/images/testPic.png";
import ilustration from "../assets/images/ilustration.jpg";
import blob from "../assets/images/blob.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/atoms/Footer";
import { useHomeContext } from "../context/HomeContext";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const Home = () => {
  const [scroolTopVisible, setScroolTopVisible] = useState(false);
  const { loading, authCheck, logoutLoading } = useSignOutContext();
  const { getAllEvents, loadingContext, fetchedEvents } = useHomeContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setScroolTopVisible(scrolled > 1000); // Tampilkan tombol ketika scroll > 300px
    };

    window.addEventListener("scroll", handleScroll);

    // authCheck();

    getAllEvents();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderCount = [1, 2, 3, 4, 5, 6];

  const latestEvent = fetchedEvents?.reduce((latest, current) => {
    return current.id > latest.id ? current : latest;
  }, fetchedEvents[0]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div>
      {logoutLoading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}

      <button
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={`w-fit fixed right-5 bottom-16 z-20 transition-all ease-in-out duration-700 ${
          scroolTopVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-12"
        >
          <path
            fill="#FC0"
            fillRule="evenodd"
            d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm.079 11.11h-.161a.996.996 0 0 0-.648.291l-5.657 5.657a1 1 0 1 0 1.414 1.414L16 13.501l4.97 4.971a1 1 0 1 0 1.415-1.414l-5.657-5.657a.996.996 0 0 0-.648-.291z"
          />
        </svg>
      </button>

      <img
        src={blob}
        alt="blob"
        className="h-72 absolute right-0 top-16 z-0 lg:h-auto lg:w-1/3 lg:top-24"
      />
      {/* <img
        src={blob}
        alt="blob"
        className="h-72 absolute right-0 top-16 z-0 lg:h-[600px] lg:top-24 lg:w-[400px]"
      /> */}

      {/* navbar */}
      <Navbar value={["Event", "Karya", "Tentang Kami"]} />
      <div className="px-5 lg:container">
        <div className="lg:flex lg:justify-between lg:items-center lg:relative lg:z-10 lg:mt-0 lg:py-32">
          <div className="relative z-10 mt-16 lg:mt-0">
            <h1 className="font-bold text-4xl leading-tight text-dark lg:text-5xl">
              Sanggar Seni Naladerma
            </h1>
            <p className="text-lg mt-3 font-medium text-dark-3">
              Sanggar seni dan <br /> kerajinan wayang beber.
            </p>
            <div className="mt-5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#blog").offsetTop - 16,
                    behavior: "smooth",
                  });
                }}
                className="bg-[#008E9F] hover:bg-[#007483] transition-colors rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#27838d] active:border-[#27838d]"
              >
                Apa itu wayang beber ?
              </button>
            </div>
          </div>

          {/* pak joko */}
          <div className="mt-16 lg:mt-0 lg:me-10">
            <div className="flex gap-4 lg:flex-col lg:items-center">
              <div>
                <div className="bg-[#000000] lg:hidden rounded-full h-32 w-32 flex justify-center items-center">
                  <img
                    src={pJoko}
                    alt="Pak Joko"
                    className="w-28 h-28 rounded-full lg:hidden"
                  />
                </div>
                <div className="w-[300px] hidden lg:block">
                  <img
                    src={pJokoTransparent}
                    alt="Pak Joko"
                    className="hidden lg:block"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 relative z-10 lg:w-[300px]">
                <p className="font-semibold text-dark lg:text-center">
                  Bapak Joko Sriyono
                </p>
                <p className="text-body-color text-sm font-medium lg:text-dark lg:text-center">
                  Pendiri sanggar seni naladerma dan pegiat wayang beber.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-3xl font-semibold lg:text-3xl">
            Event Terdekat
          </h2>
          <div className="border-b-2 border-[#FFD970] w-72 lg:w-80 mx-auto drop-shadow-md mt-1"></div>
        </div>

        <div className="mt-16 lg:mt-16 lg:bg-[#FFFEFB] lg:relative lg:z-20 lg:rounded-lg lg:drop-shadow-md lg:p-14">
          <div className="lg:mt-0 flex justify-center lg:justify-normal">
            <div
              onClick={() => navigate(`/event/${latestEvent?.id}`)}
              className="bg-[#FFFEFB] w-full max-w-[320px] rounded-lg shadow-lg lg:h-fit lg:shadow-none lg:border-2 lg:border-slate-200"
            >
              <div className="flex justify-center">
                {latestEvent?.img_link ? (
                  <img
                    src={latestEvent?.img_link}
                    alt=""
                    className="rounded-t-lg object-cover w-full lg:hidden"
                  />
                ) : (
                  <div className="rounded-t-lg bg-gray-300 h-52 animate-pulse w-full lg:hidden"></div>
                )}
                {latestEvent?.img_link ? (
                  <img
                    src={latestEvent && latestEvent?.img_link}
                    alt=""
                    className="rounded-t-lg object-contain max-w-[320px] max-h-[320px] hidden lg:block"
                  />
                ) : (
                  <div className="rounded-t-lg bg-gray-300 h-44 animate-pulse w-full hidden lg:block"></div>
                )}
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
                  {latestEvent?.start_time ? (
                    <p className="text-md text-body-color pt-1 font-medium">
                      {/* 03 Mei 2024 */}
                      {latestEvent?.start_time &&
                        format(
                          new Date(latestEvent?.start_time),
                          "dd MMMM yyyy",
                          { locale: id }
                        )}
                    </p>
                  ) : (
                    <p className="text-md text-body-color bg-gray-300 animate-pulse rounded-full pt-1 font-medium">
                      <span className="invisible">03 Mei 2024</span>
                    </p>
                  )}

                  <div>
                    {latestEvent?.status ? (
                      latestEvent?.status === "upcoming" ? (
                        <p className="text-xs text-white mt-[3px] bg-[#008E9F] p-1 rounded">
                          Akan Datang
                        </p>
                      ) : (
                        <p className="text-xs text-[#D13F53] mt-[3px] bg-[#FCECED] py-1 px-2 rounded">
                          Berakhir
                        </p>
                      )
                    ) : (
                      <p className="text-xs text-white mt-[3px] bg-gray-300 p-1 rounded-full">
                        <span className="invisible">Akan Datang</span>
                      </p>
                    )}
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
                  {latestEvent?.start_time ? (
                    <p className="text-md text-body-color pt-1 font-medium">
                      {/* 03 Mei 2024 */}
                      {latestEvent?.start_time &&
                        format(new Date(latestEvent?.start_time), "HH:mm")}
                      <span> - </span>
                      {latestEvent?.time_ends &&
                        format(new Date(latestEvent?.time_ends), "HH:mm") +
                          " WIB"}
                    </p>
                  ) : (
                    <p className="text-md text-body-color bg-gray-300 animate-pulse rounded-full mt-1 pt-1 font-medium">
                      <span className="invisible">03 Mei 2024</span>
                    </p>
                  )}
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
                  {latestEvent?.location ? (
                    <p className="text-md text-body-color pt-1 font-medium">
                      {/* 03 Mei 2024 */}
                      {latestEvent?.location && latestEvent.location}
                    </p>
                  ) : (
                    <p className="text-md text-body-color bg-gray-300 rounded-full animate-pulse mt-1 pt-1 font-medium">
                      <span className="invisible">03 Mei 2024</span>
                    </p>
                  )}
                </div>
                <div className="my-2 max-w-[300px]">
                  <p className="text-lg text-dark-4 font-medium">
                    {/* Mengenal sejarah wayang beber di Surakarta */}
                    {latestEvent?.name}
                  </p>
                </div>
                <div>
                  <p className="text-[#3EA644] font-semibold w-fit">
                    {/* Rp. 25.000 */}
                    {latestEvent?.price &&
                      formatRupiah(Number(latestEvent?.price))}
                  </p>
                </div>
              </div>
            </div>
            <div className="ps-10 hidden lg:block">
              <p className="text-dark-3 text-base leading-relaxed">
                {/* Node JS merupakan runtime environtment yang bersifat open source
                dan cross platform untuk menjalankan bahasa pemrograman
                JavaScript. Node JS dikembangkan oleh Ryan Dahl pada 27 Mei
                2009. Idenya berawal dari keterbatasan untuk menjalankan
                JavaScript yang pada saat itu hanya bisa dijalankan di web
                browser. Node JS mengusung model event-driven dan non-blocking
                I/O sehingga cocok untuk mengembangkan aplikasi real-time
                seperti aplikasi chatting, game online, REST API, streaming, dan
                yang lainnya. Mau tau caranya mengembangkan aplikasi realtime
                menggunakan Node JS? Yuk ikut workshop Dunia Coding yang akan
                membahas Node JS dengan judul “Membuat CRUD Basic RESTful API
                Menggunakan Node JS”. Workshop kali ini akan diisi oleh Imam
                Mukhlis Ismail seorang Backend Developer di PT. Astra
                International Tbk. Pada workshop ini kalian akan mempelajari
                tentang Fundamental Node JS, Penggunaan Framework Express JS,
                Pembuatan Table di MySQL dan Cara Mengintegrasikannya ke Express
                JS, sampai menghasilkan output RESTful API. Penasaran gimana
                kelanjutannya? DAFTAR SEKARANG!!! JANGAN SAMPAI LEWATKAN
                KESEMPATAN INI!🔥🔥🔥 */}
                {latestEvent && latestEvent?.description}
              </p>
            </div>
          </div>
        </div>

        {/* event carousel start */}
        <div id="event" className="mt-16 flex justify-between font-medium">
          <p className="text-dark text-2xl font-semibold">Event</p>
          <div className="text-body-color flex items-center">
            <Link to={"/all-events"}>
              <p className="font-medium text-base text-dark-4">Lebih banyak </p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 opacity-50"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 12h12m0 0-5-5m5 5-5 5"
              />
            </svg>
          </div>
        </div>

        {/* carousel */}
        <div className="mt-5">
          <Carousel
            responsive={responsive}
            showDots={true}
            renderArrowsWhenDisabled={true}
            className="pb-10"
            ssr={true}
            // draggable={false}
          >
            {fetchedEvents &&
              fetchedEvents?.map((data, index) => {
                const formattedDate = format(
                  new Date(data.start_time),
                  "dd MMMM yyyy",
                  { locale: id }
                );
                const formattedTime = format(
                  new Date(data.start_time),
                  "HH:mm"
                );

                return (
                  <Link key={index} to={`/event/${data.id}`} draggable={false}>
                    <div
                      className="bg-[#FFFEFB] max-w-[320px] rounded-lg drop-shadow-md"
                      // onClick={() => navigate(`/event/${data.id}`)}
                    >
                      <div className="flex justify-center max-h-48">
                        <img
                          src={data.img_link}
                          alt="Event Picture"
                          className="rounded-t-lg object-contain max-w-[320px]"
                          draggable={false}
                        />
                      </div>
                      <div className="p-4">
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
                            <p className="text-md text-body-color mt-[3px] font-medium">
                              {/* 03 Mei 2024 */}
                              {formattedDate}
                            </p>
                          </div>
                          <div>
                            {data.status === "upcoming" ? (
                              <p className="text-xs text-white mt-[3px] bg-[#008E9F] p-1 rounded">
                                Akan Datang
                              </p>
                            ) : (
                              <p className="text-xs text-[#D13F53] mt-[3px] bg-[#FCECED] py-1 px-2 rounded">
                                Berakhir
                              </p>
                            )}
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
                          <p className="text-md text-body-color pt-1 font-medium">
                            {/* 03 Mei 2024 */}
                            {formattedTime +
                              " - " +
                              format(
                                new Date(latestEvent?.time_ends),
                                "HH:mm"
                              ) +
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
                            {data?.location}
                          </p>
                        </div>
                        <div className="my-2">
                          <p className="text-lg text-dark-4 text-me font-medium">
                            {/* Mengenal sejarah wayang beber di Surakarta */}
                            {/* {data.name} */}
                            {data.name?.length <= 25
                              ? data.name
                              : data.name.substring(0, 25) + "..."}
                          </p>
                        </div>
                        <div>
                          <p className="text-[#3EA644] font-semibold w-fit">
                            {/* Rp. 25.000 */}
                            {data?.price && formatRupiah(Number(data?.price))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </Carousel>
        </div>

        {/* karya start here */}
        <div id="karya" className="mt-16">
          <h1 className="text-3xl lg:text-3xl font-semibold text-dark text-center">
            Karya
          </h1>
          <p className="text-center text-dark-4 text-base font-medium mt-2">
            Di bawah ini adalah beberapa karya yang dibuat oleh Pak Joko sendiri
            loh!
          </p>
        </div>

        <div className="flex flex-col gap-10 mt-16">
          <div className="bg-[#D9ECEE] rounded-lg p-5 lg:p-12">
            <h2 className="text-2xl font-semibold text-dark font-satisfy lg:text-4xl lg:hidden">
              Ramayana
            </h2>
            <div className="lg:flex lg:flex-row-reverse lg:gap-10">
              <div className="mt-5 lg:mt-0">
                <img
                  src={testPic}
                  alt="Karya Ramayana"
                  className="rounded-md lg:rounded-lg lg:max-w-xl"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:gap-5">
                <h2 className="text-2xl font-semibold text-dark font-satisfy lg:text-4xl hidden lg:block">
                  Ramayana
                </h2>
                <p className="mt-5 lg:mt-0 text-dark-3 text-base text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  libero alias sint incidunt. Debitis eius a corrupti ea impedit
                  perferendis, nulla sequi? Alias distinctio error voluptatibus
                  in quaerat fuga quod fugit quas rem, quidem impedit vitae
                  iusto deserunt id dolorem corporis eligendi atque quia dicta
                  maiores. Id explicabo ipsam qui.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#E4EDE0] rounded-lg p-5 lg:p-12">
            <h2 className="text-2xl font-semibold text-dark font-satisfy lg:text-4xl lg:hidden">
              Ramayana
            </h2>
            <div className="lg:flex lg:flex-row lg:gap-10">
              <div className="mt-5 lg:mt-0">
                <img
                  src={testPic}
                  alt="Karya Ramayana"
                  className="rounded-md lg:rounded-lg lg:max-w-xl"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:gap-5">
                <h2 className="text-2xl lg:text-end font-semibold text-dark font-satisfy lg:text-4xl hidden lg:block">
                  Ramayana
                </h2>
                <p className="mt-5 lg:mt-0 text-dark-3 text-base text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  libero alias sint incidunt. Debitis eius a corrupti ea impedit
                  perferendis, nulla sequi? Alias distinctio error voluptatibus
                  in quaerat fuga quod fugit quas rem, quidem impedit vitae
                  iusto deserunt id dolorem corporis eligendi atque quia dicta
                  maiores. Id explicabo ipsam qui.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ECEDD4] rounded-lg p-5 lg:p-12">
            <h2 className="text-2xl font-semibold text-dark font-satisfy lg:text-4xl lg:hidden">
              Ramayana
            </h2>
            <div className="lg:flex lg:flex-row-reverse lg:gap-10">
              <div className="mt-5 lg:mt-0">
                <img
                  src={testPic}
                  alt="Karya Ramayana"
                  className="rounded-md lg:rounded-lg lg:max-w-xl"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:gap-5">
                <h2 className="text-2xl font-semibold text-dark font-satisfy lg:text-4xl hidden lg:block">
                  Ramayana
                </h2>
                <p className="mt-5 lg:mt-0 text-dark-3 text-base text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  libero alias sint incidunt. Debitis eius a corrupti ea impedit
                  perferendis, nulla sequi? Alias distinctio error voluptatibus
                  in quaerat fuga quod fugit quas rem, quidem impedit vitae
                  iusto deserunt id dolorem corporis eligendi atque quia dicta
                  maiores. Id explicabo ipsam qui.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F5EDC7] rounded-lg p-5 lg:p-12">
            <h2 className="text-2xl font-semibold text-dark font-satisfy lg:text-4xl lg:hidden">
              Ramayana
            </h2>
            <div className="lg:flex lg:flex-row lg:gap-10">
              <div className="mt-5 lg:mt-0">
                <img
                  src={testPic}
                  alt="Karya Ramayana"
                  className="rounded-md lg:rounded-lg lg:max-w-xl"
                />
              </div>
              <div className="lg:flex lg:flex-col lg:gap-5">
                <h2 className="text-2xl lg:text-end font-semibold text-dark font-satisfy lg:text-4xl hidden lg:block">
                  Ramayana
                </h2>
                <p className="mt-5 lg:mt-0 text-dark-3 text-base text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                  libero alias sint incidunt. Debitis eius a corrupti ea impedit
                  perferendis, nulla sequi? Alias distinctio error voluptatibus
                  in quaerat fuga quod fugit quas rem, quidem impedit vitae
                  iusto deserunt id dolorem corporis eligendi atque quia dicta
                  maiores. Id explicabo ipsam qui.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* karya ends here */}

        <div className="mt-16 mb-16">
          <h2 id="blog" className="text-3xl font-semibold">
            Apa itu wayang beber?
          </h2>
          <img
            src={ilustration}
            className="rounded-md mt-5 lg:mt-0 lg:max-w-80 lg:hidden"
            alt="Ilustration"
          />
          <div className="lg:flex lg:max-w-screen lg:justify-between lg:mt-5 hidden">
            <img
              src={ilustration}
              className="rounded-md mt-5 lg:mt-0 lg:max-w-80"
              alt="Ilustration"
            />
            <img
              src={ilustration}
              className="rounded-md mt-5 lg:mt-0 lg:max-w-80"
              alt="Ilustration"
            />
            <img
              src={ilustration}
              className="rounded-md mt-5 lg:mt-0 lg:max-w-80"
              alt="Ilustration"
            />
          </div>
          <p className="mt-5 text-justify leading-relaxed text-base text-dark-3">
            Ngomongin soal wayang beber, pastinya kita harus tahu arti dari
            wayang beber itu sendiri. Menurut{" "}
            <Link
              to={"https://www.wikipedia.org"}
              target="blank"
              className="font-semibold"
            >
              Wikipedia
            </Link>
            , wayang beber adalah seni pertunjukan wayang yang penyajiannya
            diwujudkan dalam bentangan (Jawa: bèbèran, han.: ꦧꦺꦧꦺꦂꦫꦤ꧀​) lembaran
            kertas atau kain bergambar dengan stilisasi wayang (kulit) disertai
            narasi oleh seorang dalang. Pertunjukan wayang beber muncul dan
            berkembang di Jawa bagian Wengker (sekarang Ponorogo dan Pacitan)
            pada masa pra-Islam karena Ponorogo masa itu sudah dapat membuat
            Daluwang atau kertas Ponoragan, tetapi terus berlanjut hingga masa
            kerajaan-kerajaan Islam (seperti Kesultanan Mataram). Cerita yang
            ditampilkan diambil dari Mahabharata maupun Ramayana. Setelah Islam
            menjadi agama utama di Jawa.
          </p>
          <Link
            to={"https://id.wikipedia.org/wiki/Wayang_beber"}
            className="text-dark-2 font-medium flex mt-2 lg:mt-5"
            target="blank"
          >
            <p>Artikel lengkap</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5"
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 12h12m0 0-5-5m5 5-5 5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
