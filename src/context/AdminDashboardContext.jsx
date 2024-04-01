import { createContext, useContext, useState } from "react";
import { authInstance } from "../utils/axiosFetcher";

const AdminDashboardContext = createContext();

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);

export const AdminDashboardProvider = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [eventModalOpened, setEventModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingHoc, setLoadingHoc] = useState(false);
  const [dataFetched, setDataFetched] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [eventDetail, setEventDetail] = useState();
  const [eventIdToUpdate, setEventIdToUpdate] = useState();

  const openSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  const setAdminCheckLoading = (data) => {
    setLoadingHoc(data);
  };

  const clearDataFetched = () => {
    setDataFetched(null);
    setCategoriesData(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  // --->>> function for handling initial data

  const dashboardIndex = async () => {
    try {
      const res = await authInstance()
        .get("/adm")
        .then((res) => res);

      setDataFetched(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const customerIndex = async () => {
    try {
      const res = await authInstance()
        .get("/adm/customers")
        .then((res) => res);

      setDataFetched(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const userIndex = async () => {
    try {
      const res = await authInstance()
        .get("/adm/users")
        .then((res) => res);

      setDataFetched(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const eventIndex = async () => {
    try {
      const res = await authInstance()
        .get("/adm/events")
        .then((res) => res);

      const resCat = await authInstance()
        .get("/adm/categories")
        .then((res) => res);

      setDataFetched(res.data.data);
      setCategoriesData(resCat.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderIndex = async () => {
    try {
      const res = await authInstance()
        .get("/adm/orders")
        .then((res) => res);

      setDataFetched(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ticketIndex = async () => {
    try {
      const res = await authInstance()
        .get("/adm/tickets")
        .then((res) => res);

      setDataFetched(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // --->>> END OF function for handling initial data

  function checkValuesEmpty(obj) {
    const values = Object.values(obj);

    return values.every(
      (value) => typeof value === "string" && value.trim() === ""
    );
  }

  const onEventUpdate = async (values, action) => {
    try {
      // setLoading(true);

      console.log(values);
      // console.log(eventIdToUpdate);

      const isValuesEmpty = checkValuesEmpty(values);

      console.log(isValuesEmpty);

      if (isValuesEmpty) {
        setEventDetail(null);
        setEventIdToUpdate(null);
        setEventModalOpened(false);
      }

      // setTimeout(() => {
      //   setLoading(false);
      // }, 3000);
    } catch (error) {
    } finally {
      action.resetForm();
    }
  };

  return (
    <AdminDashboardContext.Provider
      value={{
        openSidebar,
        sidebarOpened,
        setAdminCheckLoading,
        loading,
        scrollToTop,
        dashboardIndex,
        customerIndex,
        dataFetched,
        clearDataFetched,
        setSidebarOpened,
        userIndex,
        orderIndex,
        setSearchOpened,
        searchOpened,
        eventIndex,
        eventModalOpened,
        setEventModalOpened,
        ticketIndex,
        categoriesData,
        onEventUpdate,
        loadingHoc,
        setEventIdToUpdate,
        eventDetail,
        setEventDetail,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};
