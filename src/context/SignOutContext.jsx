import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { authInstance } from "../utils/axiosFetcher";
import toast from "react-hot-toast";

const SignOutContext = createContext();

export const useSignOutContext = () => useContext(SignOutContext);

export const SignOutProvider = ({ children }) => {
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState();
  const [totalPending, setTotalPending] = useState();
  const [fetchedPending, setFetchedPending] = useState([]);
  const [trsDelLoading, setTrsDelLoading] = useState(false);
  const [delConfirmOpened, setDelConfirmOpened] = useState(false);
  const [trsToDelete, setTrsToDelete] = useState("");

  const navigate = useNavigate();

  const onSignOutClick = async () => {
    setLogoutLoading(true);

    try {
      const token = Cookies.get("_auth");

      const res = await authInstance().get("http://localhost:8000/api/logout", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      Cookies.remove("_auth");

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLogoutLoading(false);
    }
  };

  const authCheck = async () => {
    setLoading(true);

    try {
      const tokenExist = Cookies.get("_auth");
      if (tokenExist) {
        const res = await authInstance().get("/me");

        if (res.status === 200) {
          setLoggedIn(true);
          setUsername(res.data.data.name);
          setUserData(res.data.data);
        }
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error.response);
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const paymentPendingCheck = async () => {
    setLoading(true);

    try {
      if (loggedIn) {
        const res = await authInstance().get("/user-pdg-payments");

        setTotalPending(res.data.data.length);
        setFetchedPending(res.data.data);
      } else {
        return;
      }
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const onTransactionDelete = async (transId) => {
    setTrsDelLoading(true);
    try {
      const res = await authInstance().delete(`/del-transaction/${transId}`);

      console.log(res.data);

      const dataAfterDelete = fetchedPending.filter(
        (item) => item.id !== transId
      );

      setFetchedPending(dataAfterDelete);
      setTotalPending(dataAfterDelete.length);
      setTrsToDelete(null);
      setDelConfirmOpened(false);
    } catch (error) {
      console.log(error.response);
    } finally {
      setTrsDelLoading(false);
      toast.success("Transaksi Dihapus.");
    }
  };

  return (
    <SignOutContext.Provider
      value={{
        onSignOutClick,
        logoutLoading,
        authCheck,
        loading,
        loggedIn,
        username,
        setUsername,
        paymentPendingCheck,
        totalPending,
        fetchedPending,
        onTransactionDelete,
        trsDelLoading,
        delConfirmOpened,
        setDelConfirmOpened,
        trsToDelete,
        setTrsToDelete,
        userData,
        setUserData,
      }}
    >
      {children}
    </SignOutContext.Provider>
  );
};
