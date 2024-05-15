import React from "react";
import Navbar from "../components/atoms/Navbar";
import testPic from "../assets/images/testPic.png";
import Footer from "../components/atoms/Footer";

const EventDetail = () => {
  return (
    <>
      <Navbar value={["Event", "Karya", "Tentang Kami"]} />
      <div className="container mb-14 lg:h-screen">
        <div className="mt-5 lg:mt-16">
          <h1 className="text-2xl font-semibold text-dark leading-relaxed lg:text-4xl">
            Mengenal Sejarah Wayang Beber Bersama Sang Maestro Joko Sriyono
          </h1>
          {/* <div className="w-fit bg-[#008E9F] px-4 py-2 rounded">
            <span className="font-medium text-white">Up Coming</span>
          </div> */}
        </div>
        <div className="mt-3">
          <div className="w-fit bg-[#008E9F] px-4 py-2 rounded">
            <span className="font-medium text-white">Up Coming</span>
          </div>
        </div>
        <div className="lg:mt-5 lg:flex lg:flex-row lg:gap-5">
          <div className="lg:flex lg:flex-col lg:gap-5 lg:h-fit lg:w-1/2">
            <div className="mt-5 lg:mt-0 lg:w-fit">
              <img src={testPic} alt="" className="rounded-lg lg:w-full" />
            </div>

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
                  <p className="text-sm lg:text-base font-medium text-dark-4">
                    27 Agustus 2023
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
                  <p className="text-sm lg:text-base font-medium text-dark-4">
                    09:00 - 12:00
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
                  <p className="text-sm lg:text-base font-medium text-dark-4">
                    Benteng Vastenburg, Surakarta.
                  </p>
                </div>
              </div>
              <div className="border-b border-slate-300 my-5"></div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <p className="font-medium">Jml</p>
                  <div>
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
                  </div>

                  <input
                    type="number"
                    className="w-5 text-center focus:ring-0 active:ring-0 lg:decoration-transparent"
                    max={2}
                    defaultValue={1}
                  />

                  <div>
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
                  </div>
                </div>

                <p className="font-medium">Rp. 50.000</p>
              </div>
              <button className="mt-5 w-full bg-[#FFCC00] hover:bg-[#FFBB00] transition-colors rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
                Beli Tiket
              </button>
            </div>
          </div>
          <div className="bg-[#FFFEFB] p-5 border border-slate-300 rounded-lg hidden lg:block w-1/2 lg:drop-shadow-md">
            <h2 className="text-dark font-medium text-xl py-1">
              Informasi Event
            </h2>
            <div className="mt-2">
              <p className="text-dark-3 leading-loose">
                Node JS merupakan runtime environtment yang bersifat open source
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
                KESEMPATAN INI!🔥🔥🔥
              </p>
            </div>
          </div>
        </div>
        {/* event information */}
        <div className="bg-[#FFFEFB] p-5 border border-slate-300 mt-5 rounded-lg lg:hidden">
          <h2 className="text-dark font-medium text-xl py-1">
            Informasi Event
          </h2>
          <div className="mt-2">
            <p className="text-dark-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
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
              architecto tempora nemo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
