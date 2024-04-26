import React, { useEffect, useState, useRef } from "react";
import Table from "../../components/atoms/AdminPageAtoms/Table";
import AdminDashboardTemplate from "../../components/Template/AdminDashboardTemplate";
import TableSkeleton from "../../components/atoms/TableSkeleton";
import { useAdminDashboardContext } from "../../context/AdminDashboardContext";
import ReactPaginate from "react-paginate";
import SearchIcon from "../../assets/search.png";
import EventModal from "../../components/atoms/AdminPageAtoms/EventModal";
import { FormikProvider } from "../../context/FormikContext";
import * as yup from "yup";
import AddEventModal from "../../components/atoms/AdminPageAtoms/AddEventModal";
import DeleteEventConfirmationModal from "../../components/atoms/AdminPageAtoms/DeleteEventConfirmationModal";
import toast, { Toaster } from "react-hot-toast";
import CategoryModal from "../../components/atoms/AdminPageAtoms/CategoryModal";
import DeleteCategoryConfirmationModal from "../../components/atoms/AdminPageAtoms/DeleteCategoryConfirmationModal";
import AddCategoryModal from "../../components/atoms/AdminPageAtoms/AddCategoryModal";

const AdminCategories = () => {
  const {
    dataFetched,
    clearDataFetched,
    scrollToTop,
    setSidebarOpened,
    searchOpened,
    setSearchOpened,
    categoryIndex,
    categoryModalOpened,
    setCategoryModalOpened,
    setCategoryDetail,
    setCategoryIdToUpdate,
    onCategoryUpdate,
    setCategoryToDelete,
    deleteCategoryConfirmationOpened,
    setDeleteCategoryConfirmationOpened,
    setAddCategoryModalOpened,
    addCategoryModalOpened,
    onCategorySubmission,
  } = useAdminDashboardContext();

  useEffect(() => {
    categoryIndex();
    succesToastCheck();

    return () => {
      clearDataFetched();
    };
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const filteredData = Array.isArray(dataFetched)
    ? dataFetched?.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
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

  const thData = ["Nama", "Aksi"];

  const TdStyle = {
    NoStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#FFFCF2] py-5 px-2 text-center text-base font-medium`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#FFFCF2] py-5 px-2 text-center text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-[#FFFEFB] py-5 px-2 text-center text-base font-medium`,
    TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
  };

  const succesToastCheck = () => {
    const sessionStorageData = sessionStorage.getItem("addCategorySuccess");

    if (sessionStorageData) {
      toast.success("Kategori ditambahkan!");
      sessionStorage.clear();
    }
  };

  return (
    <>
      <Toaster />

      <AdminDashboardTemplate>
        {categoryModalOpened ? (
          <>
            <FormikProvider
              initialValues={{
                name: "",
              }}
              onSubmit={onCategoryUpdate}
            >
              <CategoryModal />
            </FormikProvider>
          </>
        ) : null}

        {addCategoryModalOpened ? (
          <>
            <FormikProvider
              initialValues={{
                name: "",
              }}
              onSubmit={onCategorySubmission}
              validationSchema={yup.object().shape({
                name: yup.string().max(45, "Maksimal 45 karakter."),
              })}
            >
              <AddCategoryModal />
            </FormikProvider>
          </>
        ) : null}

        {deleteCategoryConfirmationOpened ? (
          <DeleteCategoryConfirmationModal />
        ) : null}

        <div className="w-screen p-4">
          <section className="mb-4 flex justify-between items-end relative">
            <div>
              <div className="border-l-[5px] border-[#FFD970] pl-4">
                <h2 className="mb-2 text-2xl font-semibold text-dark">
                  Categories
                </h2>
                <p className="text-sm font-medium text-body-color">
                  Ketuk kategori untuk edit.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 top-1 relative">
              <div>
                <input
                  id="searchInput"
                  name="searchInput"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  type="text"
                  placeholder="Cari disini ..."
                  className={`${
                    searchOpened ? "opacity-100" : "opacity-0 invisible"
                  } w-56 bg-white absolute top-1 right-14 z-10 rounded-md drop-shadow-lg dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition-all focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2`}
                />
              </div>
              <div>
                <button onClick={() => setAddCategoryModalOpened(true)}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-14 h-14 opacity-70"
                  >
                    <path
                      opacity="0.4"
                      d="M6 12H18"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 18V6"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="w-9 h-9">
                <button
                  onClick={() => {
                    setSearchOpened(!searchOpened);
                    setSidebarOpened(false);
                  }}
                >
                  <label htmlFor="searchInput">
                    <img src={SearchIcon} alt="" className="opacity-60" />
                  </label>
                </button>
              </div>
            </div>
          </section>
          {dataFetched ? (
            <>
              <Table th={thData}>
                {Array.isArray(currentPageData)
                  ? currentPageData?.map((item, index) => (
                      <tr key={index}>
                        <td className={TdStyle.NoStyle}>
                          <div
                            onClick={() => {
                              setCategoryDetail(
                                currentPageData.find(
                                  (data) => data.id === item.id
                                )
                              );
                              setCategoryIdToUpdate(item.id);
                              setCategoryModalOpened(true);
                            }}
                          >
                            {pageNumber * itemsPerPage + index + 1}
                          </div>
                        </td>
                        <td className={TdStyle.TdStyle2}>
                          <div
                            onClick={() => {
                              setCategoryDetail(
                                currentPageData.find(
                                  (data) => data.id === item.id
                                )
                              );
                              setCategoryIdToUpdate(item.id);
                              setCategoryModalOpened(true);
                            }}
                          >
                            {item.name}
                          </div>
                        </td>
                        <td className={TdStyle.TdStyle}>
                          <button
                            onClick={() => {
                              setDeleteCategoryConfirmationOpened(true);
                              setCategoryToDelete(item);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="h-9 w-9 mx-auto"
                            >
                              <path
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="m14.625 7-.103-.21A3.148 3.148 0 0 0 11.7 5a3.148 3.148 0 0 0-2.823 1.79L8.775 7h5.85Z"
                                clipRule="evenodd"
                              />
                              <path
                                fill="#000"
                                d="M10.612 11.81a.75.75 0 0 0-1.074 1.047l1.074-1.047Zm.551 2.714a.75.75 0 1 0 1.074-1.047l-1.074 1.047Zm-1.625.62a.75.75 0 0 0 1.074 1.047l-1.074-1.047Zm2.699-.62a.75.75 0 1 0-1.074-1.047l1.074 1.047Zm1.625-1.667a.75.75 0 1 0-1.074-1.047l1.074 1.047Zm-2.699.62a.75.75 0 0 0 1.074 1.047l-1.074-1.047Zm1.625 2.714a.75.75 0 1 0 1.074-1.047l-1.074 1.047Zm-.551-2.714a.75.75 0 0 0-1.074 1.047l1.074-1.047Zm4.338-5.727a.75.75 0 0 0 0-1.5v1.5Zm-1.95-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-7.8 0a.75.75 0 0 0 0 1.5v-1.5Zm1.95 1.5a.75.75 0 1 0 0-1.5v1.5ZM7.539 18.268l-.537.523.537-.523ZM6.825 16.5h.75-.75Zm2.713-3.643 1.625 1.667 1.074-1.047-1.625-1.668-1.074 1.048Zm1.074 3.334 1.625-1.667-1.074-1.047-1.625 1.666 1.074 1.048Zm2.176-4.381-1.625 1.666 1.074 1.048 1.625-1.667-1.074-1.047Zm1.074 3.333-1.625-1.667-1.074 1.048 1.625 1.667 1.074-1.047Zm2.713-8.893h-1.95v1.5h1.95v-1.5Zm-9.75 1.5h1.95v-1.5h-1.95v1.5Zm.812 2h8.126v-1.5H7.637v1.5Zm8.126 0c.01 0 .023.004.037.018a.091.091 0 0 1 .025.065h1.5c0-.856-.682-1.583-1.562-1.583v1.5Zm.062.083V16.5h1.5V9.833h-1.5Zm0 6.667c0 .985-.773 1.75-1.688 1.75v1.5c1.779 0 3.188-1.473 3.188-3.25h-1.5Zm-1.688 1.75H9.264v1.5h4.874v-1.5Zm-4.874 0c-.442 0-.869-.18-1.187-.506l-1.074 1.047a3.157 3.157 0 0 0 2.26.96v-1.5Zm-1.187-.506a1.783 1.783 0 0 1-.501-1.244h-1.5c0 .856.331 1.68.927 2.291l1.074-1.047ZM7.575 16.5V9.833h-1.5V16.5h1.5Zm0-6.667c0-.03.01-.05.025-.065.014-.014.026-.018.037-.018v-1.5c-.88 0-1.562.727-1.562 1.583h1.5Z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  : null}
              </Table>
            </>
          ) : (
            <>
              <TableSkeleton th={thData} />
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
                  <button className="flex bg-white h-9 w-9 items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-stroke hover:bg-[#FFCC00] hover:text-dark">
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

export default AdminCategories;
