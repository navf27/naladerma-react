import { createContext, useContext, useState } from "react";
import { authInstance, axiosPublicInstance } from "../utils/axiosFetcher";
import Cookies from "js-cookie";
import { useSignOutContext } from "./SignOutContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EventDetailContext = createContext();
export const useEventDetailContext = () => useContext(EventDetailContext);

export const EventDetailProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [quantityBuy, setQuantityBuy] = useState(1);
  const [loadingEv, setLoadingEv] = useState(false);
  const [loadingUserInfo, setLoadingUserInfo] = useState(false);
  const [eventFetched, setEventFetched] = useState([]);
  const [userInfo, setUserInfo] = useState();
  const [buyButtonClicked, setBuyButtonClicked] = useState(false);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [snapOpened, setSnapOpened] = useState(false);
  const [snapToken, setSnapToken] = useState();
  const { loggedIn } = useSignOutContext();

  const navigate = useNavigate();

  const decreaseQuantity = () => {
    if (quantityBuy === 1) {
      return;
    } else {
      setQuantityBuy(quantityBuy - 1);
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

  const getUserInfo = async () => {
    try {
      setLoadingUserInfo(true);

      const auth = Cookies.get("_auth");

      if (auth) {
        const res = await authInstance().get("/me");

        if (res.status === 401) {
          return;
        }

        setUserInfo(res.data.data);
      } else {
        return;
      }
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoadingUserInfo(false);
    }
  };

  const onPayNowSubmit = async (values, action) => {
    setLoadingCheckout(true);
    setQuantityBuy(1);

    try {
      // console.log(values);
      if (loggedIn) {
        const res = await authInstance().post(
          `/checkout-user/${eventFetched?.id}`,
          values
        );
        // console.log(res.data);

        setModalOpened(false);

        window.snap.pay(res.data.data.snapToken, {
          onClose: function () {
            // toast.error("Transaksi Ditunda.");
            window.location.reload();
          },
          onSuccess: function (result) {
            toast.success("Pembayaran Berhasil.");
            console.log(result);
          },
        });
      } else {
        const res = await axiosPublicInstance().post(
          `/checkout-customer/${eventFetched?.id}`,
          values
        );

        // console.log(res.data);

        setModalOpened(false);

        window.snap.pay(res.data.data.snapToken, {
          onClose: function () {
            // toast.error("Transaksi Dibatalkan.");
            window.location.reload();
          },
          onSuccess: function (result) {
            toast.success("Pembayaran Berhasil.");
            console.log(result);
          },
        });
      }
    } catch (error) {
      if (error.response.data.message === "daily order limit") {
        toast.error("Batas maksimum order tercapai.");
      } else {
        console.log(error.response);
      }
      setModalOpened(false);
    } finally {
      setLoadingCheckout(false);
      action.resetForm();
    }
  };

  return (
    <EventDetailContext.Provider
      value={{
        modalOpened,
        setModalOpened,
        quantityBuy,
        setQuantityBuy,
        decreaseQuantity,
        getEventDetail,
        eventFetched,
        loadingEv,
        getUserInfo,
        userInfo,
        loadingUserInfo,
        onPayNowSubmit,
        buyButtonClicked,
        setBuyButtonClicked,
        loadingCheckout,
        snapOpened,
        setSnapOpened,
      }}
    >
      {children}
    </EventDetailContext.Provider>
  );
};
