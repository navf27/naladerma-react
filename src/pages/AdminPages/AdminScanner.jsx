import React, { useState } from "react";
import AdminDashboardTemplate from "../../components/Template/AdminDashboardTemplate";
import { QrReader } from "react-qr-reader";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import { Toaster } from "react-hot-toast";

const AdminScanner = () => {
  // const [data, setData] = useState("No result");
  const { onQrScan, loading } = useAdminDashboardContext();

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
            <div className="w-full lg:w-1/2">
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
              />
              {/* <p>{data}</p> */}
            </div>
          </div>
        </div>
      </AdminDashboardTemplate>
    </>
  );
};

export default AdminScanner;
