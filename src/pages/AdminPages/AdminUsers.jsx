import React, { useEffect, useState, useRef } from "react";
import Table from "../../components/Atoms/AdminPageAtoms/Table";
import AdminDashboardTemplate from "../../components/Template/AdminDashboardTemplate";
import TableSkeleton from "../../components/Atoms/TableSkeleton";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import ReactPaginate from "react-paginate";
import SearchIcon from "../../assets/search.png";

const AdminUsers = () => {
  const {
    userIndex,
    dataFetched,
    clearDataFetched,
    scrollToTop,
    setSidebarOpened,
    searchOpened,
    setSearchOpened,
  } = useAdminDashboardContext();

  useEffect(() => {
    userIndex();
    setSearchOpened(false);

    return () => {
      clearDataFetched();
    };
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const filteredData = Array.isArray(dataFetched)
    ? dataFetched?.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  const currentPageData = filteredData?.slice(
    pageNumber * itemsPerPage,
    (pageNumber + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPageNumber(0);
  };

  const thData = ["Nama", "Email", "Handphone"];
  const TdStyle = {
    NoStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#FFFCF2] py-5 px-2 text-center text-base font-medium`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#FFFCF2] py-5 px-2 text-center text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-[#FFFEFB] py-5 px-2 text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
  };

  const button = {
    onClick: {},
    text: "Button Text",
  };

  return (
    <>
      <AdminDashboardTemplate>
        <div className="w-screen p-4">
          <section className="mb-4 flex justify-between relative">
            <div>
              <div className="border-l-[5px] border-[#FFD970] pl-4">
                <h2 className="mb-2 text-2xl font-semibold text-dark">Users</h2>
                <p className="text-sm font-medium text-body-color">
                  List user yang terdaftar.
                </p>
              </div>
            </div>
            <div className="self-center w-full absolute z-20 flex justify-end items-center gap-4 top-3">
              <div className="">
                <input
                  id="searchInput"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  type="text"
                  placeholder="Cari disini ..."
                  className={`${
                    searchOpened ? "opacity-100" : "opacity-0"
                  } w-full bg-white rounded-md drop-shadow-lg dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition-all focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2`}
                />
              </div>
              <button
                onClick={() => {
                  setSearchOpened(!searchOpened);
                  setSidebarOpened(false);
                }}
              >
                <label htmlFor="searchInput">
                  <img src={SearchIcon} alt="" className="w-9 h-9 opacity-60" />
                </label>
              </button>
            </div>
          </section>
          {dataFetched ? (
            <>
              <Table th={thData}>
                {Array.isArray(currentPageData)
                  ? currentPageData?.map((item, index) => (
                      <tr key={index}>
                        <td className={TdStyle.NoStyle}>
                          {pageNumber * itemsPerPage + index + 1}
                        </td>
                        <td className={TdStyle.TdStyle2}>{item.name}</td>
                        <td className={TdStyle.TdStyle}>{item.email}</td>
                        <td className={TdStyle.TdStyle2}>{item.phone}</td>
                      </tr>
                    ))
                  : null}
              </Table>
            </>
          ) : (
            <>
              <TableSkeleton th={thData} button={button} />
            </>
          )}

          {/* <Pagination /> */}
          <div className="w-full flex justify-center">
            <div className="bg-white p-2 mt-4 border border-stroke w-fit rounded-md">
              <ReactPaginate
                className="flex gap-1"
                previousLabel={
                  <button
                    href=""
                    className="flex bg-white h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-stroke hover:bg-[#FFCC00] hover:text-dark"
                  >
                    <span>
                      <svg
                        width={8}
                        height={15}
                        viewBox="0 0 8 15"
                        className="fill-current stroke-current"
                      >
                        <path
                          d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                          strokeWidth="0.3"
                        />
                      </svg>
                    </span>
                  </button>
                }
                nextLabel={
                  <button
                    href=""
                    className="flex bg-white h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-stroke hover:bg-[#FFCC00] hover:text-dark"
                  >
                    <span>
                      <svg
                        width={8}
                        height={15}
                        viewBox="0 0 8 15"
                        className="fill-current stroke-current"
                      >
                        <path
                          d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                          strokeWidth="0.3"
                        />
                      </svg>
                    </span>
                  </button>
                }
                pageCount={Math.ceil(filteredData?.length / itemsPerPage)}
                pageClassName="flex px-[6px] bg-white h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-stroke hover:text-dark"
                activeLinkClassName="bg-[#FFCC00] w-full rounded-md text-center text-dark"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
              />
            </div>
          </div>
        </div>
      </AdminDashboardTemplate>
    </>
  );
};

export default AdminUsers;
