import React, { useEffect, useRef, useState } from "react";
import { useSignOutContext } from "../../context/SignOutContext";
import { Link } from "react-router-dom";

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

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { onSignOutClick, username, userData, loggedIn, totalPending } =
    useSignOutContext();

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const getFirstTwoWords = (name) => {
    const words = name.split(" ");
    return words.slice(0, 2).join(" ");
  };

  const firstTwoWords = getFirstTwoWords(username);

  return (
    <>
      {/* <!-- ====== Dropdowns Section Start --> */}
      <div
        className={`lg:flex flex-wrap hidden ${loggedIn ? null : "lg:hidden"}`}
      >
        {/* one */}
        <div ref={domNode}>
          <div className="text-center">
            <div className="relative text-left">
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                }}
                className={`flex items-center me-4 text-base font-medium text-dark-3 relative`}
              >
                {username ? `${firstTwoWords}` : "Administrator"}
                <span className="pl-3">
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
                {totalPending > 0 && (
                  <span className="absolute top-0 right-0 bg-[#D13F53] px-2 py-1 rounded-full text-xs text-white drop-shadow-md translate-x-1/2 -translate-y-1/2">
                    {totalPending}
                  </span>
                )}
              </button>
              <div
                className={`shadow-1 absolute right-4 z-40 mt-2 rounded-md bg-white py-[10px] transition-all ${
                  dropdownOpen
                    ? "top-full opacity-100 visible"
                    : "top-[110%] invisible opacity-0"
                }`}
              >
                <Link
                  to={
                    userData?.role === "admin" ? "/adm/dashboard" : "/dashboard"
                  }
                  className="text-body-color block px-5 py-1 text-base w-full text-left"
                >
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 -0.5 25 25"
                      className="w-5 h-5 opacity-80"
                    >
                      <g
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        clipRule="evenodd"
                      >
                        <path d="M9.918 10H7.082A1.57 1.57 0 0 0 5.5 11.556v5.89A1.569 1.569 0 0 0 7.082 19h2.836a1.569 1.569 0 0 0 1.582-1.555v-5.889a1.569 1.569 0 0 0-1.582-1.555ZM9.918 4H7.082A1.54 1.54 0 0 0 5.5 5.495v1.014A1.54 1.54 0 0 0 7.082 8h2.836A1.54 1.54 0 0 0 11.5 6.508V5.494A1.54 1.54 0 0 0 9.918 4ZM15.082 13h2.835a1.57 1.57 0 0 0 1.583-1.555V5.557A1.569 1.569 0 0 0 17.918 4h-2.836A1.57 1.57 0 0 0 13.5 5.557v5.888A1.569 1.569 0 0 0 15.082 13ZM15.082 19h2.835a1.54 1.54 0 0 0 1.583-1.492v-1.014A1.54 1.54 0 0 0 17.918 15h-2.836a1.54 1.54 0 0 0-1.582 1.493v1.013A1.54 1.54 0 0 0 15.082 19Z" />
                      </g>
                    </svg>
                    <span className="text-sm">Dashboard</span>
                  </div>
                </Link>
                <Link
                  to={"/pending-transaction"}
                  className={`text-body-color px-5 py-1 text-base w-full text-left mt-1 ${
                    totalPending ? "block" : "hidden"
                  }`}
                >
                  <div className="flex gap-1 items-center">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <g
                        stroke="#292D32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                      >
                        <path d="M6.728 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04c0-4.03-.94-5.04-4.72-5.04h-7.56c-3.78 0-4.72 1.01-4.72 5.04V18.3c.01 2.67 1.47 3.29 3.24 1.4ZM9.25 10h5.5" />
                      </g>
                    </svg> */}
                    {totalPending > 0 && (
                      <span className="bg-[#D13F53] py-1 px-2 rounded-full text-xs text-white">
                        {totalPending}
                      </span>
                    )}
                    <span className="text-sm">Transaksi Tertunda</span>
                  </div>
                </Link>
                <button
                  onClick={onSignOutClick}
                  className="text-body-color block px-5 py-1 text-base w-full text-left lg:mt-1"
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
                    <span className="text-sm">Keluar</span>
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

export default DropdownUser;

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
