import React from "react";
import Navbar from "../components/atoms/Navbar";
import testPic from "../assets/images/testPic.png";
import Footer from "../components/atoms/Footer";

const EventDetail = () => {
  return (
    <>
      <Navbar value={["Event", "Karya", "Tentang Kami"]} />
      <div className="container mb-16">
        <div className="mt-5">
          <h1 className="text-2xl font-semibold text-dark leading-relaxed">
            Mengenal Sejarah Wayang Beber Bersama Sang Maestro Joko Sriyono
          </h1>
        </div>
        <div className="mt-3">
          <div className="w-fit bg-[#008E9F] px-4 py-2 rounded">
            <span className="font-medium text-white">Up Coming</span>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <img src={testPic} alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="bg-[#FFFEFB] p-5 border border-slate-300 mt-5 rounded-lg">
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

              {/* <p className="font-medium">0</p> */}
              <input
                type="number"
                className="w-5 text-center focus:ring-0 active:ring-0"
                max={2}
                defaultValue={0}
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
          <button className="mt-5 w-full bg-[#FFCC00] rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
            Beli Tiket
          </button>
        </div>

        {/* event information */}
        <div className="bg-[#FFFEFB] p-5 border border-slate-300 mt-5 rounded-lg">
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
