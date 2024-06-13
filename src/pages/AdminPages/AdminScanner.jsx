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
      fps: 5,
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
        <div className="p-4">
          <div className="lg:ms-60 lg:mt-16 flex justify-center items-center h-screen relative -top-24">
            <div className="w-full lg:w-1/2 lg:mt-24 border border-red">
              {/* <QrReader
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
              /> */}
              {/* <p>{data}</p> */}
              <div id="reader"></div>
            </div>
          </div>
        </div>
      </AdminDashboardTemplate>
    </>
  );
};

export default AdminScanner;
