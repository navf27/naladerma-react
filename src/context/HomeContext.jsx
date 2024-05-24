import { createContext, useContext, useState } from "react";
import { axiosPublicInstance } from "../utils/axiosFetcher";

const HomeContext = createContext();

export const useHomeContext = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [loadingContext, setLoadingContext] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState([]);

  const getAllEvents = async () => {
    try {
      setLoadingContext(true);
      const res = await axiosPublicInstance().get("/all-events");

      setFetchedEvents(res.data);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoadingContext(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{ fetchedEvents, getAllEvents, loadingContext }}
    >
      {children}
    </HomeContext.Provider>
  );
};
