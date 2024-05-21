import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignOutContext } from "../../context/SignOutContext";
import DropdownUser from "./DropdownUser";

const Navbar = ({ value }) => {
  const [open, setOpen] = useState(false);
  const closeToggler = () => {
    setOpen(false);
  };
  const { loading, loggedIn } = useSignOutContext();

  return (
    <header id="navbar" className={`flex w-full items-center bg-[#FFFCF2]`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="#" className="block py-5 w-fit">
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
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#FFCC00] focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-600"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-600"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-600"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute z-20 right-4 top-full w-full max-w-[250px] rounded-lg bg-[#FFFEFB] px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  {value?.map((value, index) => {
                    const lowerCaseValue = value?.toLowerCase();

                    if (value === "Tentang Kami") {
                      const lowerCaseValue2 = "footer";

                      return (
                        <ListItem
                          key={index}
                          NavLink={lowerCaseValue}
                          idList={lowerCaseValue2}
                          onClick={closeToggler}
                        >
                          {value}
                        </ListItem>
                      );
                    }

                    return (
                      <ListItem
                        key={index}
                        NavLink={lowerCaseValue}
                        idList={lowerCaseValue}
                        onClick={closeToggler}
                      >
                        {value}
                      </ListItem>
                    );
                  })}
                  <li className="flex flex-col items-center gap-2 mt-2 lg:hidden">
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
                </ul>
              </nav>
            </div>
            <div
              className={`${loading && "invisible"} ${
                loggedIn && "invisible"
              } hidden justify-end pr-16 sm:flex lg:pr-0 lg:gap-2`}
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
            {loggedIn ? <DropdownUser /> : null}
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
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector(`#${idList}`).offsetTop - 16,
              behavior: "smooth",
            });
            setTimeout(() => onClick(), 1000);
          }}
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark-4 hover:text-dark lg:ml-12 lg:inline-flex transition-colors"
        >
          {children}
        </a>
      </li>
    </>
  );
};
