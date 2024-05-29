import { createContext, useContext, useState } from "react";

const TransactionPendingContext = createContext();
export const useTransactionPendingContext = () =>
  useContext(TransactionPendingContext);

export const TransactionPendingProvider = ({ children }) => {
  const [delConfirmOpened, setDelConfirmOpened] = useState(false);
  const [eventToDelete, setEventToDelete] = useState("");

  return (
    <TransactionPendingContext.Provider
      value={{
        delConfirmOpened,
        setDelConfirmOpened,
        eventToDelete,
        setEventToDelete,
      }}
    >
      {children}
    </TransactionPendingContext.Provider>
  );
};
