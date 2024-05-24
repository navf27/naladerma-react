import { createContext, useContext, useState } from "react";
import { axiosPublicInstance } from "../utils/axiosFetcher";

const EventDetailContext = createContext();
export const useEventDetailContext = () => useContext(EventDetailContext);

export const EventDetailProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loadingEv, setLoadingEv] = useState(false);
  const [eventFetched, setEventFetched] = useState([]);

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const getEventDetail = async (id) => {
    try {
      setLoadingEv(true);

      const res = await axiosPublicInstance().get(`/adm/event/${id}`);

      setEventFetched(res.data.data);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoadingEv(false);
    }
  };

  return (
    <EventDetailContext.Provider
      value={{
        modalOpened,
        setModalOpened,
        quantity,
        setQuantity,
        decreaseQuantity,
        getEventDetail,
        eventFetched,
        loadingEv,
      }}
    >
      {children}
    </EventDetailContext.Provider>
  );
};
