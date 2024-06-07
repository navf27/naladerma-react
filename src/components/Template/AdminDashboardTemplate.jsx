import React, { useEffect, useState } from "react";
import WhiteButton from "../atoms/WhiteButton";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import AdminOnlyRoute from "../../hoc/AdminOnlyRoute";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignOutContext } from "../../context/SignOutContext";
import Dropdown from "../atoms/AdminPageAtoms/Dropdown";

const AdminDashboardTemplate = ({ children }) => {
  // const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    openSidebar,
    sidebarOpened,
    loadingHoc,
    setSearchOpened,
    setSidebarOpened,
  } = useAdminDashboardContext();

  const { onSignOutClick, logoutLoading, authCheck, userData } =
    useSignOutContext();

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <>
      {loadingHoc || logoutLoading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}
      <div>
        <header className="w-screen bg-[#FFFEFB] h-16 shadow-1 relative z-30 lg:fixed">
          <div className="flex w-full h-full items-center justify-between lg:px-6">
            <div>
              <button
                onClick={() => {
                  openSidebar();
                  setSearchOpened(false);
                }}
                //   id="navbarToggler"
                className={`${
                  sidebarOpened && "navbarTogglerActive"
                } block ms-5 lg:hidden`}
              >
                <span className="relative block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative block h-[2px] w-[30px] bg-body-color"></span>
              </button>

              <Link to={"/"} className="hidden lg:block">
                <span className="font-satisfy font-semibold text-2xl ms-3">
                  Naladerma
                </span>
              </Link>
            </div>
            <Dropdown />
            {/* <nav
                  id="navbarCollapse"
                  className={`absolute z-20 right-4 top-full w-44 max-w-[250px] rounded-lg bg-[#FFFEFB] px-6 py-2 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <button
                      onClick={onSignOutClick}
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex"
                    >
                      <span className="ms-6">Keluar</span>
                      <i className="fi fi-br-sign-out-alt absolute left-5 top-1/3"></i>
                    </button>
                  </ul>
                </nav> */}

            {/* <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="/#"
              className="px-7 py-3 text-base font-medium text-dark hover:bg-[#F2EFE6] transition-colors duration-200"
            >
              Masuk
            </a>

            <a
              href="/#"
              className="rounded-md bg-[#FFD970] px-7 py-3 text-base font-medium text-dark hover:bg-[#FFBB00] transition-colors duration-200"
            >
              Daftar
            </a>
          </div> */}
            {/* <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-1.5 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] text-sm text-body-color font-medium lg:hidden`}
              >
                <span className="pr-5">Administrator</span>
                <i className="fi fi-sr-angle-down absolute right-2 top-2"></i>
              </button> */}
          </div>
        </header>

        <aside
          className={`h-dvh z-20 fixed drop-shadow-lg top-0 flex ${
            sidebarOpened ? "block" : "hidden lg:block"
          }`}
        >
          <div
            className={`flex flex-col px-3 gap-2 pt-24 w-60 bg-white lg:h-full ${
              userData?.role === "admin" ? null : "hidden"
            }`}
          >
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-dashboard"></i>`}
            >
              Dashboard
            </WhiteButton>
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard/categories");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard/categories"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-category-alt"></i>`}
            >
              Categories
            </WhiteButton>
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard/events");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard/events"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-calendar-day"></i>`}
            >
              Events
            </WhiteButton>
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard/users");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard/users"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rs-user"></i>`}
            >
              Users
            </WhiteButton>
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard/customers");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard/customers"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-users"></i>`}
            >
              Customers
            </WhiteButton>
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard/orders");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard/orders"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-shopping-bag"></i>`}
            >
              Orders
            </WhiteButton>
            <WhiteButton
              onClick={() => {
                navigate("/adm/dashboard/tickets");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/adm/dashboard/tickets"
                  ? "bg-[#FFD970] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-ticket-alt"></i>`}
            >
              Tickets
            </WhiteButton>
          </div>

          {/* user side bar */}
          <div
            className={`flex flex-col px-3 gap-3 pt-24 w-60 bg-white lg:h-full ${
              userData?.role === "admin" ? "hidden" : null
            }`}
          >
            <WhiteButton
              onClick={() => {
                navigate("/dashboard");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/dashboard"
                  ? "bg-[#FFCC00] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-dashboard"></i>`}
            >
              Dashboard
            </WhiteButton>

            <WhiteButton
              onClick={() => {
                navigate("/dashboard/events");
                openSidebar();
              }}
              activeClass={
                location.pathname === "/dashboard/events"
                  ? "bg-[#FFCC00] text-dark shadow-1 lg:bg-[#FFD970] lg:hover:bg-[#FFD970]"
                  : null
              }
              logo={`<i class="fi fi-rr-calendar-day"></i>`}
            >
              Events
            </WhiteButton>
          </div>
          <div className="lg:hidden">
            <button
              className="w-dvw h-dvh "
              onClick={() => setSidebarOpened(false)}
            ></button>
          </div>
        </aside>

        {children}
      </div>
      <div
        className={`fixed right-7 bottom-7 lg:right-8 lg:bottom-8 drop-shadow-sm bg-[#FFCC00] p-2 rounded-full ${
          userData?.role === "admin" ? null : "hidden"
        }`}
      >
        <Link to={"/adm/dashboard/scan"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M5 8a1 1 0 0 1-2 0V5.923c0-.76.082-1.185.319-1.627.223-.419.558-.754.977-.977C4.738 3.082 5.162 3 5.923 3H8a1 1 0 0 1 0 2H5.923c-.459 0-.57.022-.684.082a.364.364 0 0 0-.157.157c-.06.113-.082.225-.082.684V8zm3 11a1 1 0 1 1 0 2H5.923c-.76 0-1.185-.082-1.627-.319a2.363 2.363 0 0 1-.977-.977C3.082 19.262 3 18.838 3 18.077V16a1 1 0 1 1 2 0v2.077c0 .459.022.57.082.684.038.07.087.12.157.157.113.06.225.082.684.082H8zm7-15a1 1 0 0 0 1 1h2.077c.459 0 .57.022.684.082.07.038.12.087.157.157.06.113.082.225.082.684V8a1 1 0 1 0 2 0V5.923c0-.76-.082-1.185-.319-1.627a2.363 2.363 0 0 0-.977-.977C19.262 3.082 18.838 3 18.077 3H16a1 1 0 0 0-1 1zm4 12a1 1 0 1 1 2 0v2.077c0 .76-.082 1.185-.319 1.627a2.364 2.364 0 0 1-.977.977c-.442.237-.866.319-1.627.319H16a1 1 0 1 1 0-2h2.077c.459 0 .57-.022.684-.082a.363.363 0 0 0 .157-.157c.06-.113.082-.225.082-.684V16zM3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default AdminDashboardTemplate;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
