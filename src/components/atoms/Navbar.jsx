import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignOutContext } from "../../context/SignOutContext";
import DropdownUser from "./DropdownUser";

const Navbar = ({ value }) => {
  const [open, setOpen] = useState(false);
  const closeToggler = () => {
    setOpen(false);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const {
    authCheck,
    loading,
    loggedIn,
    totalPending,
    onSignOutClick,
    paymentPendingCheck,
    userData,
  } = useSignOutContext();

  useEffect(() => {
    authCheck();
    paymentPendingCheck();
  }, []);

  return (
    <header id="navbar" className={`flex w-full items-center bg-[#FFFCF2]`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/" className="block py-5 w-fit">
              {/* <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
                className=""
              /> */}
              <span className="font-satisfy font-semibold text-2xl ms-1 lg:ms-0">
                Naladerma
              </span>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                disabled={loading ? true : false}
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#FFCC00] focus:ring-2 lg:hidden`}
              >
                <span
                  className={`relative my-[6px] block h-[2px] w-[30px] bg-slate-600 ${
                    loading ? "animate-pulse" : null
                  }`}
                ></span>
                <span
                  className={`relative my-[6px] block h-[2px] w-[30px] bg-slate-600 ${
                    loading ? "animate-pulse" : null
                  }`}
                ></span>
                <span
                  className={`relative my-[6px] block h-[2px] w-[30px] bg-slate-600 ${
                    loading ? "animate-pulse" : null
                  }`}
                ></span>
                {totalPending > 0 && (
                  <span className="absolute top-0 right-0 bg-[#D13F53] px-2 py-1 rounded-full text-xs text-white drop-shadow-md">
                    {totalPending}
                  </span>
                )}
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute bg-white z-20 right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <li>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();

                        if (location.pathname !== "/") {
                          navigate("/all-events");
                          return;
                        }

                        window.scrollTo({
                          top: document.querySelector(`#event`).offsetTop - 16,
                          behavior: "smooth",
                        });
                        // setTimeout(() => onClick(), 1000);
                      }}
                      // to={NavLink}
                      className="flex py-2 text-base font-medium text-dark-4 hover:text-dark lg:ml-12 lg:inline-flex transition-colors"
                    >
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();

                        if (location.pathname !== "/") {
                          navigate("/");
                          return;
                        }

                        window.scrollTo({
                          top: document.querySelector(`#karya`).offsetTop - 16,
                          behavior: "smooth",
                        });
                        // setTimeout(() => onClick(), 1000);
                      }}
                      // to={NavLink}
                      className="flex py-2 text-base font-medium text-dark-4 hover:text-dark lg:ml-12 lg:inline-flex transition-colors"
                    >
                      Karya
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                          top: document.querySelector(`#footer`).offsetTop,
                          behavior: "smooth",
                        });
                        // setTimeout(() => onClick(), 1000);
                      }}
                      // to={NavLink}
                      className="flex py-2 text-base font-medium text-dark-4 hover:text-dark lg:ml-12 lg:inline-flex transition-colors"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  {totalPending > 0 && (
                    <li className="flex items-center gap-2 lg:hidden">
                      <Link
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/pending-transaction");

                          // window.scrollTo({
                          //   top: document.querySelector(`#footer`).offsetTop,
                          //   behavior: "smooth",
                          // });
                          // setTimeout(() => onClick(), 1000);
                        }}
                        // to={NavLink}
                        className="flex py-2 text-base font-medium text-dark-4 hover:text-dark lg:ml-12 lg:inline-flex transition-colors"
                      >
                        Transaksi Tertunda
                      </Link>
                      <div className="bg-[#D13F53] h-fit inline-block px-2 py-1 rounded-full text-xs text-white">
                        {totalPending > 0 && totalPending}
                      </div>
                    </li>
                  )}

                  <li
                    className={`flex flex-col items-center gap-2 mt-2 lg:hidden ${
                      loggedIn && "hidden"
                    }`}
                  >
                    <Link
                      to={"/sign-in"}
                      className="p-1 text-dark-4 w-full text-center text-base font-medium focus:ring-1 ring-body-color rounded"
                    >
                      Masuk
                    </Link>
                    <Link
                      to={"/sign-up"}
                      className="bg-[#FFCC00] w-full text-center rounded p-1 text-dark font-medium text-base"
                    >
                      Daftar
                    </Link>
                  </li>
                  <li
                    className={`flex flex-col items-center gap-1 mt-2 lg:hidden ${
                      loggedIn ? null : "hidden"
                    }`}
                  >
                    <Link
                      to={
                        userData?.role === "admin"
                          ? "/adm/dashboard"
                          : "dashboard"
                      }
                      className="bg-[#FFFEFB] flex justify-center items-center gap-1 w-full text-center rounded-md p-1 text-dark font-medium text-base"
                    >
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
                      <span className="pe-1">Dashboard</span>
                    </Link>
                    <button
                      onClick={() => onSignOutClick()}
                      className="bg-[#FFCC00] flex justify-center items-center gap-2 w-full text-center rounded-md p-1 text-dark font-medium text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <g
                          stroke="#1C274C"
                          strokeLinecap="round"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinejoin="round"
                            d="M15 12H2m0 0 3.5-3M2 12l3.5 3"
                          />
                          <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121.641.642 1.568.815 3.121.862" />
                        </g>
                      </svg>
                      <span className="pe-1">Keluar</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className={`${loading ? "invisible" : null} ${
                loggedIn ? null : "lg:flex"
              } hidden justify-end pr-16 lg:pr-0 lg:gap-2`}
            >
              <Link
                to={"/sign-in"}
                className="px-7 py-3 text-base font-medium text-dark-2 hover:bg-[#F2EFE6] rounded-md transition-colors"
              >
                Masuk
              </Link>

              <Link
                to={"/sign-up"}
                className="rounded-md bg-[#FFCC00] px-7 py-3 text-base font-medium text-dark-2 hover:bg-[#FFBB00] transition-colors"
              >
                Daftar
              </Link>
            </div>
            {loading ? (
              <p className="bg-gray-300 rounded-full hidden lg:block animate-pulse">
                <span className="invisible">administrator</span>
              </p>
            ) : (
              <DropdownUser />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, idList, onClick }) => {
  return (
    <>
      <li>
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector(`#${idList}`).offsetTop - 16,
              behavior: "smooth",
            });
            setTimeout(() => onClick(), 1000);
          }}
          to={NavLink}
          className="flex py-2 text-base font-medium text-dark-4 hover:text-dark lg:ml-12 lg:inline-flex transition-colors"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
