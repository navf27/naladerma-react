import React, { useEffect } from "react";
import AdminDashboardTemplate from "../components/Template/AdminDashboardTemplate";
import Profile from "../assets/images/profile-gray.jpg";
import { useSignOutContext } from "../context/SignOutContext";
import { useUserDashboardContext } from "../context/UserDashboardContext";
import UserDetailModal from "../components/atoms/UserDetailModal";
import { FormikProvider } from "../context/FormikContext";
import { Toaster } from "react-hot-toast";

const UserDashboard = () => {
  const { authCheck, userData } = useSignOutContext();
  const { modalOpened, setModalOpened, loading, onUserUpdate } =
    useUserDashboardContext();

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}

      {modalOpened
        ? userData && (
            <FormikProvider
              initialValues={{
                name: userData?.name,
                email: userData?.email,
                phone: userData?.phone,
              }}
              onSubmit={onUserUpdate}
            >
              <UserDetailModal />
            </FormikProvider>
          )
        : null}

      <Toaster />

      <AdminDashboardTemplate>
        <div className="lg:ms-60 p-4">
          <div>
            <div className="lg:mt-16 flex justify-center">
              <div className="bg-[#FFFEFB] w-72 pb-12 mt-10 lg:mt-10 drop-shadow-md rounded-lg relative">
                <div className="bg-[#FFD970] h-32 rounded-lg">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setModalOpened(true)}
                      className="p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#fff"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <g fill="#000">
                          <path
                            d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1c5.185 0 7.778 0 9.39 1.61C23 4.223 23 6.816 23 12c0 5.185 0 7.778-1.61 9.39C19.777 23 17.184 23 12 23c-5.185 0-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12Z"
                            opacity={0.5}
                          />
                          <path d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.066 6.066 0 0 1-2.3-1.449 6.066 6.066 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5.045 5.045 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77-.409 1.226-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383 1.224-.408.77-.257c.597-.199.895-.298 1.175-.432.331-.158.644-.35.933-.576ZM22.113 6.17a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.734.734 0 0 0-.206.651c.027.15.077.37.168.633a4.911 4.911 0 0 0 1.174 1.863 4.91 4.91 0 0 0 1.862 1.174c.263.09.483.141.633.168.24.043.48-.035.652-.207l.178-.178Z" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <img
                  src={Profile}
                  alt=""
                  className="w-28 h-28 absolute top-14 left-1/2 -translate-x-1/2 rounded-full drop-shadow-md"
                />
                <div className="px-2">
                  {userData ? (
                    <h3 className="text-center text-lg mt-14 font-medium text-dark-3 px-2">
                      {userData.name}
                    </h3>
                  ) : (
                    <h3 className="text-center text-lg mt-14 font-medium text-dark-3 px-2">
                      <span className="bg-gray-300 rounded-full animate-pulse">
                        <span className="invisible">Muhammad Naufal</span>
                      </span>
                    </h3>
                  )}

                  <div className="mt-5 flex flex-col items-center gap-1">
                    {userData ? (
                      <p className="text-sm text-dark-4 flex justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          width={200}
                          height={200}
                          viewBox="0 0 512 512"
                          className="w-5 h-5"
                        >
                          <path
                            d="M440.917 67.925H71.083C31.827 67.925 0 99.752 0 139.008v233.984c0 39.256 31.827 71.083 71.083 71.083h369.834c39.255 0 71.083-31.827 71.083-71.083V139.008c0-39.256-31.828-71.083-71.083-71.083zM178.166 321.72l-99.54 84.92c-7.021 5.992-17.576 5.159-23.567-1.869-5.992-7.021-5.159-17.576 1.87-23.567l99.54-84.92c7.02-5.992 17.574-5.159 23.566 1.87 5.992 7.02 5.159 17.575-1.869 23.566zM256 289.436c-13.314-.033-26.22-4.457-36.31-13.183l.008.008-.032-.024c.008.008.017.008.024.016L66.962 143.694c-6.98-6.058-7.723-16.612-1.674-23.583 6.057-6.98 16.612-7.723 23.582-1.674l152.771 132.592c3.265 2.906 8.645 5.004 14.359 4.971 5.706.017 10.995-2.024 14.44-5.028l.074-.065 152.615-132.469c6.971-6.049 17.526-5.306 23.583 1.674 6.048 6.97 5.306 17.525-1.674 23.583l-152.77 132.599c-10.057 8.635-22.946 13.125-36.268 13.142zm200.948 115.335c-5.992 7.028-16.547 7.861-23.566 1.869l-99.54-84.92c-7.028-5.992-7.861-16.546-1.869-23.566 5.991-7.029 16.546-7.861 23.566-1.87l99.54 84.92c7.028 5.991 7.861 16.546 1.869 23.567z"
                            style={{
                              fill: "#000",
                            }}
                          />
                        </svg>
                        <span>{userData?.email}</span>
                      </p>
                    ) : (
                      <p className="text-sm text-dark-4 flex justify-center gap-2 bg-gray-300 rounded-full animate-pulse w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          width={200}
                          height={200}
                          viewBox="0 0 512 512"
                          className="w-5 h-5 invisible"
                        >
                          <path
                            d="M440.917 67.925H71.083C31.827 67.925 0 99.752 0 139.008v233.984c0 39.256 31.827 71.083 71.083 71.083h369.834c39.255 0 71.083-31.827 71.083-71.083V139.008c0-39.256-31.828-71.083-71.083-71.083zM178.166 321.72l-99.54 84.92c-7.021 5.992-17.576 5.159-23.567-1.869-5.992-7.021-5.159-17.576 1.87-23.567l99.54-84.92c7.02-5.992 17.574-5.159 23.566 1.87 5.992 7.02 5.159 17.575-1.869 23.566zM256 289.436c-13.314-.033-26.22-4.457-36.31-13.183l.008.008-.032-.024c.008.008.017.008.024.016L66.962 143.694c-6.98-6.058-7.723-16.612-1.674-23.583 6.057-6.98 16.612-7.723 23.582-1.674l152.771 132.592c3.265 2.906 8.645 5.004 14.359 4.971 5.706.017 10.995-2.024 14.44-5.028l.074-.065 152.615-132.469c6.971-6.049 17.526-5.306 23.583 1.674 6.048 6.97 5.306 17.525-1.674 23.583l-152.77 132.599c-10.057 8.635-22.946 13.125-36.268 13.142zm200.948 115.335c-5.992 7.028-16.547 7.861-23.566 1.869l-99.54-84.92c-7.028-5.992-7.861-16.546-1.869-23.566 5.991-7.029 16.546-7.861 23.566-1.87l99.54 84.92c7.028 5.991 7.861 16.546 1.869 23.567z"
                            style={{
                              fill: "#000",
                            }}
                          />
                        </svg>
                        <span className="invisible">
                          bronaufalaji@gmail.com
                        </span>
                      </p>
                    )}

                    {userData ? (
                      <p className="text-sm text-dark-4 flex justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8Zm8 4H8v12h8V6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{userData?.phone}</span>
                      </p>
                    ) : (
                      <p className="text-sm text-dark-4 flex justify-center gap-1 bg-gray-300 rounded-full animate-pulse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="h-5 w-5 invisible"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8Zm8 4H8v12h8V6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="invisible">0895365913689</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminDashboardTemplate>
    </>
  );
};

export default UserDashboard;
