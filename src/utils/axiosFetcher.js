import axios from "axios";
import Cookies from "js-cookie";

export const authInstance = () => {
  const token = Cookies.get("_auth");

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
};
