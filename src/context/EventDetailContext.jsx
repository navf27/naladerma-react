import { createContext, useContext, useState } from "react";

const EventDetailContext = createContext();
export const useEventDetailContext = () => useContext(EventDetailContext);

export const EventDetailProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
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
      }}
    >
      {children}
    </EventDetailContext.Provider>
  );
};
