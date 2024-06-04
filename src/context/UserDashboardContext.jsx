import { createContext, useContext, useState } from "react";
import { authInstance } from "../utils/axiosFetcher";
import { useSignOutContext } from "./SignOutContext";
import toast from "react-hot-toast";

const UserDashboardContext = createContext();
export const useUserDashboardContext = () => useContext(UserDashboardContext);

export const UserDashboardProvider = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [loadingHoc, setLoadingHoc] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userData, setUserData, setUsername } = useSignOutContext();

  const openSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };

  const onUserUpdate = async (values, action) => {
    setLoading(true);

    try {
      if (values.email === userData.email) {
        const { email, ...userWithoutEmail } = values;

        const res = await authInstance().patch(
          `/usr/update/${userData?.id}`,
          userWithoutEmail
        );

        setUserData(res.data.data);
        setUsername(res.data.data.name);
        setModalOpened(false);
        setLoading(false);
        toast.success("Data diri diperbarui.");

        return;
      }

      const res = await authInstance().patch(
        `/usr/update/${userData?.id}`,
        values
      );

      setUserData(res.data.data);
      setUsername(res.data.data.name);
      setModalOpened(false);
      setLoading(false);
      toast.success("Data diri diperbarui.");
    } catch (error) {
      console.log(error.response);
    } finally {
      action.resetForm();
    }
  };

  return (
    <UserDashboardContext.Provider
      value={{
        sidebarOpened,
        loadingHoc,
        searchOpened,
        setSidebarOpened,
        setLoadingHoc,
        setSearchOpened,
        openSidebar,
        modalOpened,
        setModalOpened,
        loading,
        onUserUpdate,
      }}
    >
      {children}
    </UserDashboardContext.Provider>
  );
};
