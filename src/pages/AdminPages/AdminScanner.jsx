import React, { useEffect, useState } from "react";
import AdminDashboardTemplate from "../../components/Template/AdminDashboardTemplate";
import { QrReader } from "react-qr-reader";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import { Toaster } from "react-hot-toast";
import { Html5QrcodeScanner } from "html5-qrcode";

const AdminScanner = () => {
  // const [data, setData] = useState("No result");
  const { onQrScan, loading } = useAdminDashboardContext();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 1,
    });

    scanner.render(success, error);

    function success(result) {
      // scanner.clear();
      console.log(result);
      onQrScan(result);
    }

    function error(err) {
      console.log(err);
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <>
      <Toaster />
      {loading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}

      <AdminDashboardTemplate>
        <div className="lg:ps-64 lg:mt-7 h-screen absolute top-0 w-full p-4 lg:flex lg:justify-center lg:items-center">
          {/* <div className="lg:ms-60 lg:mt-16 flex justify-center items-center h-screen relative -top-24">
            <div className="w-full lg:w-1/2 lg:mt-24 border border-red">
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    // setData(result?.text);
                    onQrScan(result?.text);
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                style={{ width: "100%" }}
                constraints={{ facingMode: "user" }}
              />
              <p>{data}</p>
              <div id="reader"></div>
            </div>
          </div> */}

          <div className="w-full lg:w-fit h-full lg:h-fit flex items-center">
            <div id="reader" className="h-fit w-full lg:w-96 lg:h-96"></div>
          </div>
        </div>
      </AdminDashboardTemplate>
    </>
  );
};

export default AdminScanner;
