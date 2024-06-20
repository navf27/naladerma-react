import React, { useEffect } from "react";
import Navbar from "../components/atoms/Navbar";
import testPic from "../assets/images/testPic.png";
import Footer from "../components/atoms/Footer";
import { useEventDetailContext } from "../context/EventDetailContext";
import EventDetailModal from "../components/atoms/EventDetailModal";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useSignOutContext } from "../context/SignOutContext";
import { FormikProvider } from "../context/FormikContext";
import SnapModal from "../components/atoms/SnapModal";
import * as yup from "yup";
import { Toaster } from "react-hot-toast";

const EventDetail = () => {
  const {
    modalOpened,
    setModalOpened,
    quantityBuy,
    setQuantityBuy,
    decreaseQuantity,
    loadingEv,
    eventFetched,
    getEventDetail,
    userInfo,
    getUserInfo,
    onPayNowSubmit,
    buyButtonClicked,
    setBuyButtonClicked,
    snapOpened,
  } = useEventDetailContext();

  const { logoutLoading, authCheck } = useSignOutContext();

  const { idE } = useParams();

  const formikRender = (quantityValue) => {
    return userInfo ? (
      <FormikProvider
        initialValues={{
          name: userInfo?.name,
          email: userInfo?.email,
          phone: userInfo?.phone,
          quantity: quantityValue,
        }}
        onSubmit={onPayNowSubmit}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required("Nama lengkap harus diisi.")
            .max(255, "Maksimum karakter adalah 255."),
          email: yup
            .string()
            .required("Email harus diisi.")
            .email("Pastikan format email anda benar."),
          phone: yup
            .string()
            .required("Nomor handphone harus diisi.")
            .matches(/^[0-9]+$/, "Cek kembali nomor handphonemu.")
            .max(13, "Cek kembali nomor handphonemu."),
        })}
      >
        {modalOpened && <EventDetailModal userInfo={userInfo} />}
      </FormikProvider>
    ) : (
      <FormikProvider
        initialValues={{
          name: "",
          email: "",
          phone: "",
          quantity: quantityValue,
        }}
        onSubmit={onPayNowSubmit}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .required("Nama lengkap harus diisi.")
            .max(255, "Maksimum karakter adalah 255."),
          email: yup
            .string()
            .required("Email harus diisi.")
            .email("Pastikan format email anda benar."),
          phone: yup
            .string()
            .required("Nomor handphone harus diisi.")
            .matches(/^[0-9]+$/, "Cek kembali nomor handphonemu.")
            .max(13, "Cek kembali nomor handphonemu."),
        })}
      >
        {modalOpened && <EventDetailModal userInfo={userInfo} />}
      </FormikProvider>
    );
  };

  useEffect(() => {
    // first;
    // return () => {
    //   second;
    // };
    window.scrollTo(0, 0);
    getUserInfo();

    authCheck();

    getEventDetail(idE);
  }, []);

  useEffect(() => {
    // You can also change below url value to any script url you wish to load,
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    // Optional: set script attribute, for example snap.js have data-client-key attribute
    // (change the value according to your client-key)
    const myMidtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <Toaster />
      {logoutLoading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}

      {buyButtonClicked && formikRender(quantityBuy)}

      <Navbar value={["Event", "Karya", "Tentang Kami"]} />
      <div className="container mb-14 lg:mb-16">
        <div className="mt-5 lg:mt-10">
          <h1 className="text-2xl font-semibold text-dark leading-relaxed lg:text-4xl">
            {/* Mengenal Sejarah Wayang Beber Bersama Sang Maestro Joko Sriyono */}
            {eventFetched?.name ? (
              eventFetched?.name
            ) : (
              <span className="bg-gray-300 animate-pulse rounded-full">
                <span className="invisible">Mengenal Sejarah</span>
              </span>
            )}
          </h1>
          {/* <div className="w-fit bg-[#008E9F] px-4 py-2 rounded">
            <span className="font-medium text-white">Up Coming</span>
          </div> */}
        </div>
        <div className="mt-4 flex gap-2 lg:gap-4">
          {loadingEv ? (
            <div className="w-fit bg-gray-300 px-4 py-2 rounded-full animate-pulse">
              <span className="font-medium text-white invisible">
                Up Coming
              </span>
            </div>
          ) : eventFetched?.status === "upcoming" ? (
            <div className="w-fit bg-[#008E9F] px-4 py-2 rounded">
              <span className="font-medium text-white">Up Coming</span>
            </div>
          ) : (
            <div className="w-fit bg-[#FCECED] ring-1 ring-[#D13F53] px-4 py-2 rounded">
              <span className="font-medium text-[#D13F53]">Berakhir</span>
            </div>
          )}
          {loadingEv ? (
            <div className="w-fit bg-gray-300 px-4 py-2 rounded-full animate-pulse">
              <span className="font-medium text-white invisible">
                Up Coming
              </span>
            </div>
          ) : (
            <div className="w-fit bg-white ring-1 ring-[#008E9F] px-4 py-2 rounded">
              <span className="font-medium text-[#008E9F]">
                {eventFetched?.category?.name}
              </span>
            </div>
          )}
        </div>
        <div className="lg:mt-5 lg:flex lg:flex-row lg:gap-5">
          <div className="lg:flex lg:flex-col lg:gap-5 lg:h-fit lg:w-1/2">
            {loadingEv ? (
              <div className="mt-5 lg:mt-0 flex justify-center rounded-2xl lg:rounded-xl h-48 lg:h-80 bg-gray-300">
                {/* <img
                  src={""}
                  alt=""
                  className="rounded-lg w-full object-contain lg:object-cover"
                /> */}
              </div>
            ) : (
              <div className="mt-5 lg:mt-0 flex justify-center max-h-60 lg:max-h-[320px]">
                <img
                  src={eventFetched?.img_link}
                  alt=""
                  className="rounded-lg w-full object-contain lg:object-cover"
                />
              </div>
            )}

            <div className="bg-[#FFFEFB] p-5 border border-slate-300 mt-5 lg:mt-0 rounded-lg lg:w-full lg:drop-shadow-md">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <g fill="#1C274C">
                      <path d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972.697-.67 1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724Z" />
                      <path
                        d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172C22 19.657 22 17.771 22 14Z"
                        opacity={0.5}
                      />
                      <path d="M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                    </g>
                  </svg>
                  <p
                    className={`text-sm ${
                      loadingEv && "bg-gray-300 rounded-full"
                    } lg:text-base font-medium text-dark-4`}
                  >
                    {/* 27 Agustus 2023 */}
                    {}
                    {loadingEv ? (
                      <span className="invisible">fdkldsfladjffddd</span>
                    ) : (
                      eventFetched?.start_time &&
                      format(
                        new Date(eventFetched?.start_time),
                        "EEEE, dd MMMM yyyy",
                        {
                          locale: id,
                        }
                      )
                    )}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <g fill="#1C274C">
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                        opacity={0.5}
                      />
                      <path
                        fillRule="evenodd"
                        d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                  <p
                    className={`text-sm lg:text-base font-medium text-dark-4 ${
                      loadingEv && "bg-gray-300 rounded-full"
                    }`}
                  >
                    {/* 09:00 - 12:00 */}
                    {loadingEv ? (
                      <span className="invisible">fdkldsfladjffddddsfa</span>
                    ) : (
                      <span>
                        {eventFetched?.start_time &&
                          format(new Date(eventFetched?.start_time), "HH:mm", {
                            locale: id,
                          })}{" "}
                        <span> - </span>
                        {eventFetched?.time_ends &&
                          format(new Date(eventFetched?.time_ends), "HH:mm", {
                            locale: id,
                          })}
                        <span> WIB</span>
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <g fill="#1C274C">
                      <path
                        d="M12 2c-4.418 0-8 4.003-8 8.5 0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5 20 6.003 16.418 2 12 2Z"
                        opacity={0.5}
                      />
                      <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </g>
                  </svg>
                  <p
                    className={`text-sm lg:text-base font-medium text-dark-4 ${
                      loadingEv && "bg-gray-300 rounded-full"
                    }`}
                  >
                    {/* Benteng Vastenburg, Surakarta. */}
                    {loadingEv ? (
                      <span className="invisible">fdkldsfladjffddd</span>
                    ) : (
                      eventFetched?.location
                    )}
                  </p>
                </div>
              </div>
              <div className="border-b border-slate-300 my-5"></div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className="font-medium">Jml</p>
                  <button onClick={() => decreaseQuantity()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 opacity-80"
                    >
                      <path
                        fill="#323232"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        opacity={0.1}
                      />
                      <path
                        stroke="#323232"
                        strokeWidth={2}
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                      <path
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6"
                      />
                    </svg>
                  </button>

                  <input
                    type="number"
                    className="w-5 text-center focus:ring-0 active:ring-0 lg:decoration-transparent"
                    maxLength={2}
                    max={2}
                    // defaultValue={1}
                    value={quantityBuy}
                    onChange={(e) => setQuantityBuy(e.target.value)}
                  />

                  <button onClick={() => setQuantityBuy(quantityBuy + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 opacity-80"
                    >
                      <path
                        fill="#323232"
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        opacity={0.1}
                      />
                      <path
                        stroke="#323232"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6M12 9v6"
                      />
                      <path
                        stroke="#323232"
                        strokeWidth={2}
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>

                {loadingEv ? (
                  <p className="font-medium bg-gray-300 rounded-full">
                    <span className="invisible">Rp. 50.000</span>
                  </p>
                ) : (
                  <p className="font-medium">
                    {"Rp. " + eventFetched?.price * quantityBuy}
                  </p>
                )}
              </div>
              <p
                className={`${
                  quantityBuy < 1 ? "block" : "hidden"
                } text-sm mt-2 text-[#D13F53]`}
              >
                Minimum pembelian 1 tiket.
              </p>
              <p
                className={`${
                  quantityBuy > 5 ? "block" : "hidden"
                } text-sm mt-2 text-[#D13F53]`}
              >
                Maksimum pembelian 5 tiket.
              </p>
              <button
                onClick={() => {
                  setBuyButtonClicked(true);
                  setModalOpened(true);
                }}
                disabled={
                  quantityBuy < 1 ||
                  quantityBuy > 5 ||
                  eventFetched?.status === "finished"
                    ? true
                    : false
                }
                className={`mt-5 ${
                  quantityBuy < 1 ? "mt-1" : null
                } w-full bg-[#FFCC00] hover:bg-[#FFBB00] transition-colors rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5`}
              >
                Beli Tiket
              </button>
            </div>
          </div>
          <div className="bg-[#FFFEFB] p-5 border border-slate-300 rounded-lg hidden lg:block w-1/2 lg:drop-shadow-md">
            {loadingEv ? (
              <h2 className="text-dark font-semibold text-xl py-1 underline decoration-[#FFD970] decoration-wavy underline-offset-4 bg-gray-300 w-fit rounded-full">
                <span className="invisible">Informasi Event</span>
              </h2>
            ) : (
              <h2 className="text-dark font-semibold text-xl py-1 underline decoration-[#FFD970] decoration-wavy underline-offset-4">
                Informasi Event
              </h2>
            )}

            <div className="mt-2">
              <p
                className={`text-dark-2 leading-loose ${
                  loadingEv && "bg-gray-300 rounded-xl"
                }`}
              >
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
                {loadingEv ? (
                  <span className="invisible">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, placeat vero. Molestias sapiente blanditiis iste
                    iure, a nisi quaerat voluptate, corrupti assumenda porro
                    optio consequatur aut saepe perspiciatis commodi in?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Optio
                    quibusdam architecto veritatis, voluptas cupiditate
                    nesciunt. Delectus perferendis itaque impedit omnis minus
                    unde, cumque et voluptas molestiae neque nulla reiciendis
                    exercitationem iusto molestias? Modi nemo consequatur"{" "}
                  </span>
                ) : (
                  eventFetched?.description
                )}
              </p>
            </div>
          </div>
        </div>
        {/* event information */}
        <div className="bg-[#FFFEFB] p-5 border border-slate-300 mt-5 rounded-lg lg:hidden">
          {loadingEv ? (
            <h2 className="text-dark font-semibold text-xl py-1 underline decoration-[#FFD970] decoration-wavy underline-offset-4 bg-gray-300 w-fit rounded-full">
              <span className="invisible">Informasi Event</span>
            </h2>
          ) : (
            <h2 className="text-dark font-medium text-xl py-1 underline decoration-[#FFD970] decoration-wavy underline-offset-8">
              Informasi Event
            </h2>
          )}

          <div className="mt-2">
            <p
              className={`text-dark-3 leading-relaxed ${
                loadingEv && "bg-gray-300 rounded-xl"
              }`}
            >
              {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              accusantium, nisi eius ad iste quam dignissimos deserunt excepturi
              a dolores animi minus nostrum. Ratione deleniti sint nostrum fuga
              obcaecati odio doloremque architecto vel eos, consequatur
              excepturi numquam maiores vero quod molestias tempore dolores sed
              autem dignissimos iusto blanditiis nesciunt a asperiores
              perspiciatis. Ab ipsa enim sunt omnis aperiam eum nemo rerum fuga
              voluptas quae nisi adipisci doloribus atque itaque ex consequatur
              rem, ad nostrum sint necessitatibus, cumque asperiores consectetur
              nihil porro? Iste accusantium, ad eum reiciendis ab ea impedit
              molestiae tenetur, itaque quaerat dignissimos quasi quam commodi
              architecto tempora nemo. */}
              {loadingEv ? (
                <span className="invisible">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, placeat vero. Molestias sapiente blanditiis iste
                  iure, a nisi quaerat voluptate, corrupti assumenda porro optio
                  consequatur aut saepe perspiciatis commodi in?Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Neque iure facere
                  placeat minus exercitationem dignissimos minima ipsa ipsum
                  quis
                  enim!"sfdnjaklsfdjlasdhfjkalshdfjlasjdfahsjdklfasddsajdfjasfdhjlasdfhjlasdhfjklasfdjkals
                </span>
              ) : (
                eventFetched?.description
              )}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
