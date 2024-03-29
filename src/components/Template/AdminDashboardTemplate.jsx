import React, { useState } from "react";
import WhiteButton from "../Atoms/WhiteButton";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import AdminOnlyRoute from "../../hoc/AdminOnlyRoute";
import { useLocation, useNavigate } from "react-router-dom";

const AdminDashboardTemplate = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { openSidebar, sidebarOpened, loading } = useAdminDashboardContext();

  return (
    <>
      {loading ? (
        <div className="border border-red-500 fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-[#FFFCF2]">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}
      <header className={`flex w-full items-center bg-[#FFFEFB] h-16 shadow-1`}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a className="block w-full py-5">
                {/* <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                  alt="logo"
                  className=""
                /> */}
                {/* <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              /> */}
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute left-2 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#FFCC00] focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                </button> */}
                <button
                  onClick={openSidebar}
                  //   id="navbarToggler"
                  className={`${
                    sidebarOpened && "navbarTogglerActive"
                  } absolute left-1.5 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute z-20 right-4 top-full w-44 max-w-[250px] rounded-lg bg-[#FFFEFB] px-6 py-2 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    {/* <ListItem NavLink="/#">Home</ListItem>
                    <ListItem NavLink="/#">Payment</ListItem>
                    <ListItem NavLink="/#">About</ListItem> */}
                    <ListItem>
                      <span className="ms-6">Keluar</span>
                      <i class="fi fi-br-sign-out-alt absolute left-5 top-1/3"></i>
                    </ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a
                  href="/#"
                  className="px-7 py-3 text-base font-medium text-dark hover:bg-[#F2EFE6] transition-colors duration-200"
                >
                  Masuk
                </a>

                <a
                  href="/#"
                  className="rounded-md bg-[#FFCC00] px-7 py-3 text-base font-medium text-dark hover:bg-[#FFBB00] transition-colors duration-200"
                >
                  Daftar
                </a>
              </div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-1.5 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] text-sm text-slate-500 font-medium lg:hidden`}
              >
                {/* <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span> */}
                <span className="pr-5">Administrator</span>
                <i className="fi fi-sr-angle-down absolute right-2 top-2"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`h-dvh w-60 bg-[#FFFCF2] z-10 absolute drop-shadow-lg ${
          sidebarOpened ? "block" : "hidden"
        }`}
      >
        <div className="w-full flex flex-col px-3 gap-2 pt-10">
          <WhiteButton
            onClick={() => {
              navigate("/adm/dashboard");
              openSidebar();
            }}
            activeClass={
              location.pathname === "/adm/dashboard"
                ? "bg-[#FFFEFB] text-dark shadow-1"
                : null
            }
            logo={`<i class="fi fi-rr-dashboard"></i>`}
          >
            Dashboard
          </WhiteButton>
          <WhiteButton
            onClick={() => {
              navigate("/adm/dashboard/users");
              openSidebar();
            }}
            activeClass={
              location.pathname === "/adm/dashboard/users"
                ? "bg-[#FFFEFB] text-dark shadow-1"
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
                ? "bg-[#FFFEFB] text-dark shadow-1"
                : null
            }
            logo={`<i class="fi fi-rs-user"></i>`}
          >
            Users
          </WhiteButton>
          <WhiteButton
            onClick={() => {
              navigate("/adm/dashboard/users");
              openSidebar();
            }}
            activeClass={
              location.pathname === "/adm/dashboard/users"
                ? "bg-[#FFFEFB] text-dark shadow-1"
                : null
            }
            logo={`<i class="fi fi-rr-users"></i>`}
          >
            Customers
          </WhiteButton>
          <WhiteButton
            onClick={() => {
              navigate("/adm/dashboard/users");
              openSidebar();
            }}
            activeClass={
              location.pathname === "/adm/dashboard/users"
                ? "bg-[#FFFEFB] text-dark shadow-1"
                : null
            }
            logo={`<i class="fi fi-rr-shopping-bag"></i>`}
          >
            Orders
          </WhiteButton>
          <WhiteButton
            onClick={() => {
              navigate("/adm/dashboard/users");
              openSidebar();
            }}
            activeClass={
              location.pathname === "/adm/dashboard/users"
                ? "bg-[#FFFEFB] text-dark shadow-1"
                : null
            }
            logo={`<i class="fi fi-rr-ticket-alt"></i>`}
          >
            Tickets
          </WhiteButton>
        </div>
      </aside>

      {children}
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
          className="flex py-2 text-base font-medium text-slate-500 hover:text-dark lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
