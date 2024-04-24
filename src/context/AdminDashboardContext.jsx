import { createContext, useContext, useState } from "react";
import { authInstance, axiosPublicInstance } from "../utils/axiosFetcher";
import toast from "react-hot-toast";

const AdminDashboardContext = createContext();

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);

export const AdminDashboardProvider = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [eventModalOpened, setEventModalOpened] = useState(false);
  const [addEventModalOpened, setAddEventModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingHoc, setLoadingHoc] = useState(false);
  const [dataFetched, setDataFetched] = useState();
  const [categoriesData, setCategoriesData] = useState();
  const [eventDetail, setEventDetail] = useState();
  const [eventIdToUpdate, setEventIdToUpdate] = useState();
  const [image, setImage] = useState();
  const [deleteEventConfirmationOpened, setDeleteEventConfirmationOpened] =
    useState(false);
  const [eventToDelete, setEventToDelete] = useState();

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

  // --->>> START OF function for handling initial data

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

  const onEventSubmission = async (values, action) => {
    try {
      setLoading(true);

      if (image) {
        const dataImg = new FormData();
        dataImg.append("file", image);
        dataImg.append("upload_preset", "naladerma");
        dataImg.append("cloud_name", "dhprwa6af");

        const resImg = await axiosPublicInstance()
          .post(
            "https://api.cloudinary.com/v1_1/dhprwa6af/image/upload",
            dataImg
          )
          .then((res) => res);

        const updateData = { ...values };
        updateData.img_link = resImg.data.url;

        const res = await authInstance().post("/adm/event", updateData);
        console.log(res.data);
      } else {
        setLoading(true);

        const res = await authInstance().post("/adm/event", values);
        console.log(res.data);
      }

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      action.resetForm();
    }
  };

  const onEventUpdate = async (values, action) => {
    try {
      const isValuesEmpty = checkValuesEmpty(values);

      if (isValuesEmpty && !image) {
        setEventDetail(null);
        setEventIdToUpdate(null);
        setEventModalOpened(false);

        toast("Tidak ada perubahan!", { icon: "🟡", duration: 3000 });
      } else {
        if (image) {
          setLoading(true);

          const dataImg = new FormData();
          dataImg.append("file", image);
          dataImg.append("upload_preset", "naladerma");
          dataImg.append("cloud_name", "dhprwa6af");

          const resImg = await axiosPublicInstance()
            .post(
              "https://api.cloudinary.com/v1_1/dhprwa6af/image/upload",
              dataImg
            )
            .then((res) => res);

          if (isValuesEmpty) {
            const updateData = {
              img_link: resImg.data.url,
            };

            const resUpdt = await authInstance().patch(
              `/adm/event/${eventIdToUpdate}`,
              updateData
            );

            console.log(resUpdt.data);
          } else {
            const valuesWithData = Object.keys(values).reduce((acc, key) => {
              if (values[key] !== null && values[key] !== "") {
                acc[key] = values[key];
              }
              return acc;
            }, {});
            const updateData = { ...valuesWithData };
            updateData.img_link = resImg.data.url;

            const resUpdt = await authInstance().patch(
              `/adm/event/${eventIdToUpdate}`,
              updateData
            );

            console.log(resUpdt.data);
          }

          window.location.reload();
        } else {
          setLoading(true);

          const valuesWithData = Object.keys(values).reduce((acc, key) => {
            if (values[key] !== null && values[key] !== "") {
              acc[key] = values[key];
            }
            return acc;
          }, {});

          const res = await authInstance().patch(
            `/adm/event/${eventIdToUpdate}`,
            valuesWithData
          );

          console.log(res.data);

          // update local data
          // const valuesWithData = Object.keys(values).reduce((acc, key) => {
          //   if (values[key] !== null && values[key] !== "") {
          //     acc[key] = values[key];
          //   }
          //   return acc;
          // }, {});

          if (valuesWithData.hasOwnProperty("category_id")) {
            valuesWithData.category_id = parseInt(valuesWithData.category_id);

            const categoryData = categoriesData.find(
              (item) => item.id === valuesWithData.category_id
            );

            valuesWithData.category = {
              id: valuesWithData.category_id,
              name: categoryData.name,
            };
          }

          const updatedEventData = dataFetched.map((item) => {
            if (item.id === eventIdToUpdate) {
              return {
                ...item,
                ...valuesWithData,
              };
            }
            return item;
          });

          setDataFetched(updatedEventData);
          // end of update local data

          toast.success("Event diperbarui!", { duration: 3000 });
        }
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setImage(null);
      setEventModalOpened(false);
      action.resetForm();
    }
  };

  const onEventDelete = async (eventId) => {
    try {
      setLoading(true);

      const res = await authInstance().delete(`/adm/event/${eventId}`);

      console.log(res.data);

      const dataAfterDelete = dataFetched.filter((item) => item.id !== eventId);

      setDataFetched(dataAfterDelete);

      setEventToDelete(null);
      setDeleteEventConfirmationOpened(false);
      setLoading(false);

      toast.success("Event dihapus!", { duration: 3000 });
    } catch (error) {
      console.log(error);
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
        setImage,
        image,
        addEventModalOpened,
        setAddEventModalOpened,
        onEventSubmission,
        deleteEventConfirmationOpened,
        setDeleteEventConfirmationOpened,
        eventToDelete,
        setEventToDelete,
        onEventDelete,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};
