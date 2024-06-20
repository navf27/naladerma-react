import React, { useEffect } from "react";
import Navbar from "../components/atoms/Navbar";
import Footer from "../components/atoms/Footer";
import { useSignOutContext } from "../context/SignOutContext";
import TransactionDelConfirmModal from "../components/atoms/TransactionDelConfirmModal";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const TransactionPending = () => {
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

  const {
    loading,
    fetchedPending,
    logoutLoading,
    trsDelLoading,
    setDelConfirmOpened,
    delConfirmOpened,
    setTrsToDelete,
  } = useSignOutContext();
  const count = [1, 2, 3];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      {logoutLoading || trsDelLoading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}

      <Toaster />
      {delConfirmOpened ? <TransactionDelConfirmModal /> : null}
      <Navbar />
      <div className="container flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5 mb-14 lg:mb-28 mt-3 lg:mt-16 ">
        {loading &&
          count.map((data, index) => {
            return (
              <div
                className="bg-[#FFFEFB] shadow-1 rounded-md p-5 lg:basis-96 lg:grow lg:h-fit"
                key={index}
              >
                <div className="flex gap-3 items-start">
                  {/* <div className="border border-blue"> */}
                  {loading ? (
                    <div className="w-[70px] h-[70px] bg-gray-300 animate-pulse rounded-lg"></div>
                  ) : (
                    <img
                      src=""
                      alt=""
                      className="rounded-lg w-[80px] h-[80px]"
                    />
                  )}
                  {/* </div> */}
                  <div>
                    {loading ? (
                      <h4 className="text-md font-semibold bg-gray-300 animate-pulse rounded-full">
                        <span className="invisible">Belajar Wayangg</span>
                      </h4>
                    ) : (
                      <h4 className="text-md font-semibold">
                        {/* {data?.event?.name} */}
                        Belajar Menggambar Wayang
                      </h4>
                    )}

                    {loading ? (
                      <p className="text-xs text-[#FEA70C] w-fit py-1 px-2 mt-1 bg-gray-300 animate-pulse rounded-full">
                        <span className="invisible">Pembayaran Tertunda</span>
                      </p>
                    ) : (
                      <p className="text-xs bg-[#FFF5EB] text-[#FEA70C] w-fit py-1 px-2 mt-1 rounded-lg">
                        Pembayaran Tertunda
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex mt-3 justify-between items-end">
                  <div>
                    {loading ? (
                      <p className="text-xs bg-gray-300 animate-pulse rounded-full">
                        <span className="invisible">Total Bayar: X2</span>
                      </p>
                    ) : (
                      <p className="text-xs">Total Bayar: X2</p>
                    )}

                    {loading ? (
                      <p className="font-semibold text-sm bg-gray-300 animate-pulse rounded-full mt-1">
                        <span className="invisible">Rp 20.000</span>
                      </p>
                    ) : (
                      <p className="font-semibold text-sm">
                        {/* {data?.total && formatRupiah(Number(data?.total))} */}
                      </p>
                    )}
                  </div>
                  <div>
                    {loading ? (
                      <button
                        disabled
                        className="bg-gray-300 animate-pulse text-xs text-white py-1 ps-2 pe-3 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 invisible"
                        >
                          <path
                            fill="#fff"
                            d="M10.612 12.31a.75.75 0 1 0-1.074 1.047l1.074-1.048Zm.551 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-1.625.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm2.699-.62a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm1.625-1.667a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm-2.699.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm1.625 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-.551-2.715a.75.75 0 1 0-1.074 1.048l1.074-1.048Zm1.181-7.726a.75.75 0 0 0 0-1.5v1.5Zm-3.25-1.5a.75.75 0 1 0 0 1.5v-1.5Zm6.407 3.5a.75.75 0 0 0 0-1.5v1.5Zm-9.75-1.5a.75.75 0 0 0 0 1.5v-1.5Zm.714 12.018-.537.523.537-.523ZM6.825 17h.75-.75Zm2.713-3.643 1.625 1.667 1.074-1.048-1.625-1.667-1.074 1.048Zm1.074 3.334 1.625-1.667-1.074-1.048-1.625 1.667 1.074 1.048Zm2.176-4.382-1.625 1.667 1.074 1.048 1.625-1.667-1.074-1.048Zm1.074 3.334-1.625-1.667-1.074 1.048 1.625 1.667 1.074-1.048ZM13.418 4.75h-3.25v1.5h3.25v-1.5Zm3.157 2h-9.75v1.5h9.75v-1.5Zm-8.938 3.5h8.126v-1.5H7.637v1.5Zm8.126 0c.01 0 .023.004.037.018a.09.09 0 0 1 .025.065h1.5c0-.856-.682-1.583-1.562-1.583v1.5Zm.062.083V17h1.5v-6.667h-1.5Zm0 6.667c0 .985-.773 1.75-1.688 1.75v1.5c1.779 0 3.188-1.473 3.188-3.25h-1.5Zm-1.688 1.75H9.264v1.5h4.874v-1.5Zm-4.874 0c-.442 0-.869-.18-1.187-.506l-1.074 1.047a3.157 3.157 0 0 0 2.26.959v-1.5Zm-1.187-.506A1.783 1.783 0 0 1 7.575 17h-1.5c0 .856.331 1.68.927 2.291l1.074-1.047ZM7.575 17v-6.667h-1.5V17h1.5Zm0-6.667c0-.03.01-.051.025-.065.014-.014.026-.018.037-.018v-1.5c-.88 0-1.562.727-1.562 1.583h1.5Z"
                          />
                        </svg>
                        <span className="font-semibold invisible">Hapus</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-[#DC2626] text-xs text-white py-1 ps-2 pe-3 rounded-lg flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path
                            fill="#fff"
                            d="M10.612 12.31a.75.75 0 1 0-1.074 1.047l1.074-1.048Zm.551 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-1.625.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm2.699-.62a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm1.625-1.667a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm-2.699.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm1.625 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-.551-2.715a.75.75 0 1 0-1.074 1.048l1.074-1.048Zm1.181-7.726a.75.75 0 0 0 0-1.5v1.5Zm-3.25-1.5a.75.75 0 1 0 0 1.5v-1.5Zm6.407 3.5a.75.75 0 0 0 0-1.5v1.5Zm-9.75-1.5a.75.75 0 0 0 0 1.5v-1.5Zm.714 12.018-.537.523.537-.523ZM6.825 17h.75-.75Zm2.713-3.643 1.625 1.667 1.074-1.048-1.625-1.667-1.074 1.048Zm1.074 3.334 1.625-1.667-1.074-1.048-1.625 1.667 1.074 1.048Zm2.176-4.382-1.625 1.667 1.074 1.048 1.625-1.667-1.074-1.048Zm1.074 3.334-1.625-1.667-1.074 1.048 1.625 1.667 1.074-1.048ZM13.418 4.75h-3.25v1.5h3.25v-1.5Zm3.157 2h-9.75v1.5h9.75v-1.5Zm-8.938 3.5h8.126v-1.5H7.637v1.5Zm8.126 0c.01 0 .023.004.037.018a.09.09 0 0 1 .025.065h1.5c0-.856-.682-1.583-1.562-1.583v1.5Zm.062.083V17h1.5v-6.667h-1.5Zm0 6.667c0 .985-.773 1.75-1.688 1.75v1.5c1.779 0 3.188-1.473 3.188-3.25h-1.5Zm-1.688 1.75H9.264v1.5h4.874v-1.5Zm-4.874 0c-.442 0-.869-.18-1.187-.506l-1.074 1.047a3.157 3.157 0 0 0 2.26.959v-1.5Zm-1.187-.506A1.783 1.783 0 0 1 7.575 17h-1.5c0 .856.331 1.68.927 2.291l1.074-1.047ZM7.575 17v-6.667h-1.5V17h1.5Zm0-6.667c0-.03.01-.051.025-.065.014-.014.026-.018.037-.018v-1.5c-.88 0-1.562.727-1.562 1.583h1.5Z"
                          />
                        </svg>
                        <span className="font-semibold">Hapus</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        {fetchedPending?.map((data, index) => {
          return (
            <div
              className="bg-[#FFFEFB] shadow-1 rounded-md p-5 lg:basis-1/2 lg:h-fit"
              key={index}
            >
              <div className="flex gap-3 items-start">
                {/* <div className="border border-blue"> */}
                {loading ? (
                  <div className="w-[70px] h-[70px] bg-gray-300 animate-pulse rounded-lg"></div>
                ) : (
                  <img
                    onClick={() => {
                      window.snap.pay(data.snap_token, {
                        onSuccess: function (result) {
                          toast.success("Pembayaran Berhasil.");
                          console.log(result);
                        },
                      });
                    }}
                    src={data?.event?.img_link}
                    alt=""
                    className="rounded-lg w-[80px] h-[80px] object-cover"
                  />
                )}
                {/* </div> */}
                <div className="">
                  {loading ? (
                    <h4 className="text-md font-semibold bg-gray-300 animate-pulse rounded-full">
                      <span className="invisible">Belajar Wayangg</span>
                    </h4>
                  ) : (
                    <h4
                      onClick={() => {
                        window.snap.pay(data.snap_token, {
                          onSuccess: function (result) {
                            toast.success("Pembayaran Berhasil.");
                            console.log(result);
                          },
                        });
                      }}
                      className="text-md font-semibold"
                    >
                      {/* {data?.event?.name} */}
                      {data?.event?.name?.length <= 35
                        ? data.event.name
                        : data.event.name?.substring(0, 35) + "..."}
                      {/* Belajar Menggambar Wayang Beber Bersama Sang Maestro */}
                    </h4>
                  )}

                  {loading ? (
                    <p className="text-xs text-[#FEA70C] w-fit py-1 px-2 mt-1 bg-gray-300 animate-pulse rounded-full">
                      <span className="invisible">Pembayaran Tertunda</span>
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        window.snap.pay(data.snap_token, {
                          onSuccess: function (result) {
                            toast.success("Pembayaran Berhasil.");
                            console.log(result);
                          },
                        });
                      }}
                      className="text-xs bg-[#FFF5EB] text-[#FEA70C] mt-1 w-fit py-1 px-2 rounded-lg"
                    >
                      Pembayaran Tertunda
                    </p>
                  )}

                  {loading ? (
                    <p className="hidden lg:block text-xs text-dark mt-2 font-medium bg-gray-300 w-fit rounded-full animate-pulse">
                      <span className="invisible">3 Tiket X Rp 20.000</span>
                    </p>
                  ) : (
                    <p className="hidden lg:block text-xs text-dark mt-2 font-medium">
                      {data?.quantity} tiket ={" "}
                      {data?.total && formatRupiah(Number(data?.total))}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex mt-3 justify-between items-end">
                <div>
                  {loading ? (
                    <p className="text-xs bg-gray-300 animate-pulse rounded-full">
                      <span className="invisible">Total Bayar: X2</span>
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        window.snap.pay(data.snap_token, {
                          onSuccess: function (result) {
                            toast.success("Pembayaran Berhasil.");
                            console.log(result);
                          },
                        });
                      }}
                      className="text-xs"
                    >
                      Total Bayar: X{data?.quantity}
                    </p>
                  )}

                  {loading ? (
                    <p className="font-semibold text-sm bg-gray-300 animate-pulse rounded-full mt-1">
                      <span className="invisible">Rp 20.000</span>
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        window.snap.pay(data.snap_token, {
                          onSuccess: function (result) {
                            toast.success("Pembayaran Berhasil.");
                            console.log(result);
                          },
                        });
                      }}
                      className="font-semibold text-sm"
                    >
                      {data?.total && formatRupiah(Number(data?.total))}
                    </p>
                  )}
                </div>
                <div>
                  {loading ? (
                    <button className="bg-gray-300 animate-pulse text-xs text-white py-1 ps-2 pe-3 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 invisible"
                      >
                        <path
                          fill="#fff"
                          d="M10.612 12.31a.75.75 0 1 0-1.074 1.047l1.074-1.048Zm.551 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-1.625.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm2.699-.62a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm1.625-1.667a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm-2.699.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm1.625 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-.551-2.715a.75.75 0 1 0-1.074 1.048l1.074-1.048Zm1.181-7.726a.75.75 0 0 0 0-1.5v1.5Zm-3.25-1.5a.75.75 0 1 0 0 1.5v-1.5Zm6.407 3.5a.75.75 0 0 0 0-1.5v1.5Zm-9.75-1.5a.75.75 0 0 0 0 1.5v-1.5Zm.714 12.018-.537.523.537-.523ZM6.825 17h.75-.75Zm2.713-3.643 1.625 1.667 1.074-1.048-1.625-1.667-1.074 1.048Zm1.074 3.334 1.625-1.667-1.074-1.048-1.625 1.667 1.074 1.048Zm2.176-4.382-1.625 1.667 1.074 1.048 1.625-1.667-1.074-1.048Zm1.074 3.334-1.625-1.667-1.074 1.048 1.625 1.667 1.074-1.048ZM13.418 4.75h-3.25v1.5h3.25v-1.5Zm3.157 2h-9.75v1.5h9.75v-1.5Zm-8.938 3.5h8.126v-1.5H7.637v1.5Zm8.126 0c.01 0 .023.004.037.018a.09.09 0 0 1 .025.065h1.5c0-.856-.682-1.583-1.562-1.583v1.5Zm.062.083V17h1.5v-6.667h-1.5Zm0 6.667c0 .985-.773 1.75-1.688 1.75v1.5c1.779 0 3.188-1.473 3.188-3.25h-1.5Zm-1.688 1.75H9.264v1.5h4.874v-1.5Zm-4.874 0c-.442 0-.869-.18-1.187-.506l-1.074 1.047a3.157 3.157 0 0 0 2.26.959v-1.5Zm-1.187-.506A1.783 1.783 0 0 1 7.575 17h-1.5c0 .856.331 1.68.927 2.291l1.074-1.047ZM7.575 17v-6.667h-1.5V17h1.5Zm0-6.667c0-.03.01-.051.025-.065.014-.014.026-.018.037-.018v-1.5c-.88 0-1.562.727-1.562 1.583h1.5Z"
                        />
                      </svg>
                      <span className="font-semibold invisible">Hapus</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setTrsToDelete(data);
                        setDelConfirmOpened(true);
                      }}
                      className="bg-[#DC2626] text-xs text-white py-1 ps-2 pe-3 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          fill="#fff"
                          d="M10.612 12.31a.75.75 0 1 0-1.074 1.047l1.074-1.048Zm.551 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-1.625.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm2.699-.62a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm1.625-1.667a.75.75 0 1 0-1.074-1.048l1.074 1.048Zm-2.699.62a.75.75 0 0 0 1.074 1.047l-1.074-1.048Zm1.625 2.714a.75.75 0 1 0 1.074-1.048l-1.074 1.048Zm-.551-2.715a.75.75 0 1 0-1.074 1.048l1.074-1.048Zm1.181-7.726a.75.75 0 0 0 0-1.5v1.5Zm-3.25-1.5a.75.75 0 1 0 0 1.5v-1.5Zm6.407 3.5a.75.75 0 0 0 0-1.5v1.5Zm-9.75-1.5a.75.75 0 0 0 0 1.5v-1.5Zm.714 12.018-.537.523.537-.523ZM6.825 17h.75-.75Zm2.713-3.643 1.625 1.667 1.074-1.048-1.625-1.667-1.074 1.048Zm1.074 3.334 1.625-1.667-1.074-1.048-1.625 1.667 1.074 1.048Zm2.176-4.382-1.625 1.667 1.074 1.048 1.625-1.667-1.074-1.048Zm1.074 3.334-1.625-1.667-1.074 1.048 1.625 1.667 1.074-1.048ZM13.418 4.75h-3.25v1.5h3.25v-1.5Zm3.157 2h-9.75v1.5h9.75v-1.5Zm-8.938 3.5h8.126v-1.5H7.637v1.5Zm8.126 0c.01 0 .023.004.037.018a.09.09 0 0 1 .025.065h1.5c0-.856-.682-1.583-1.562-1.583v1.5Zm.062.083V17h1.5v-6.667h-1.5Zm0 6.667c0 .985-.773 1.75-1.688 1.75v1.5c1.779 0 3.188-1.473 3.188-3.25h-1.5Zm-1.688 1.75H9.264v1.5h4.874v-1.5Zm-4.874 0c-.442 0-.869-.18-1.187-.506l-1.074 1.047a3.157 3.157 0 0 0 2.26.959v-1.5Zm-1.187-.506A1.783 1.783 0 0 1 7.575 17h-1.5c0 .856.331 1.68.927 2.291l1.074-1.047ZM7.575 17v-6.667h-1.5V17h1.5Zm0-6.667c0-.03.01-.051.025-.065.014-.014.026-.018.037-.018v-1.5c-.88 0-1.562.727-1.562 1.583h1.5Z"
                        />
                      </svg>
                      <span className="font-semibold">Hapus</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default TransactionPending;
