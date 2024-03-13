import { createContext, useContext, useState } from "react";

const AdminDashboardContext = createContext();

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);

export const AdminDashboardProvider = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [buttonOpened, setButtonOpened] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  const openSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  const setButtonOpenedData = (data) => {
    setButtonOpened(data);
  };

  const setAdminLoading = (data) => {
    setLoading(data);
  };

  return (
    <AdminDashboardContext.Provider
      value={{
        openSidebar,
        sidebarOpened,
        buttonOpened,
        setButtonOpenedData,
        setAdminLoading,
        loading,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};
