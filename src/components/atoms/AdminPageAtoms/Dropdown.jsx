import React, { useEffect, useRef, useState } from "react";
import { useAdminDashboardContext } from "../../../context/AdminDashboardContext";
import { useSignOutContext } from "../../../context/SignOutContext";
import { useNavigate } from "react-router-dom";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setSidebarOpened, setSearchOpened } = useAdminDashboardContext();
  const { onSignOutClick, username, loading } = useSignOutContext();

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const getFirstTwoWords = (name) => {
    const words = name.split(" ");
    return words.slice(0, 2).join(" ");
  };

  const firstTwoWords = getFirstTwoWords(username);

  const navigate = useNavigate();

  return (
    <>
      {/* <!-- ====== Dropdowns Section Start --> */}
      <div className="flex flex-wrap">
        {/* one */}
        <div ref={domNode}>
          <div className="py-8 text-center">
            <div className="relative text-left">
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setSidebarOpened(false);
                  setSearchOpened(false);
                }}
                className={`flex items-center me-4 text-base font-medium text-body-color`}
              >
                {loading ? (
                  <p className="bg-gray-300 rounded-full hidden lg:block animate-pulse">
                    <span className="invisible">administrator</span>
                  </p>
                ) : username ? (
                  username ? (
                    `${firstTwoWords}`
                  ) : (
                    "Administrator"
                  )
                ) : (
                  "Administrator"
                )}

                <span className="pl-4">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`shadow-1 absolute right-4 w-40 z-40 mt-2 rounded-md bg-white py-[10px] transition-all ${
                  dropdownOpen
                    ? "top-full opacity-100 visible"
                    : "top-[110%] invisible opacity-0"
                }`}
              >
                <button
                  onClick={() => navigate("/")}
                  className="text-body-color block px-5 py-1 text-base w-full text-left mb-2"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 -0.5 25 25"
                      className="w-5 h-5 opacity-70"
                    >
                      <g stroke="#000" strokeLinecap="round" strokeWidth={1.5}>
                        <path
                          strokeLinejoin="round"
                          d="M5.5 10.967v4.645A3.312 3.312 0 0 0 8.733 19h7.538a3.312 3.312 0 0 0 3.23-3.388v-4.645a4.38 4.38 0 0 0-1.727-3.493l-3.06-1.855a4.262 4.262 0 0 0-4.425 0l-3.06 1.855a4.381 4.381 0 0 0-1.727 3.493Z"
                          clipRule="evenodd"
                        />
                        <path d="M14.655 15.183a2.678 2.678 0 0 1-4.308 0" />
                      </g>
                    </svg>
                    <span>Beranda</span>
                  </div>
                </button>
                <button
                  onClick={onSignOutClick}
                  className="text-body-color block px-5 py-1 text-base w-full text-left"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <g
                        stroke="#1C274C"
                        strokeLinecap="round"
                        strokeWidth={1.5}
                      >
                        <path d="M12 20a8 8 0 1 1 0-16" opacity={0.5} />
                        <path
                          strokeLinejoin="round"
                          d="M10 12h10m0 0-3-3m3 3-3 3"
                        />
                      </g>
                    </svg>
                    <span>Keluar</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
      </div>
      {/* <!-- ====== Dropdowns Section End -->    */}
    </>
  );
};

export default Dropdown;

const DropdownItem = ({ label, href }) => {
  return (
    <button
      onClick={onSignOutClick}
      className="text-body-color block px-5 py-1 text-base"
    >
      {label}
    </button>
  );
};
