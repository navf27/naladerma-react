import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useAdminDashboardContext } from "../context/AdminDashboardContext";

const AdminOnlyRoute = (Component) => {
  return () => {
    const navigate = useNavigate();
    const auth = Cookies.get("_auth");
    const { setAdminLoading } = useAdminDashboardContext();

    const roleCheck = async () => {
      try {
        setAdminLoading(true);
        const res = await axios.get("http://localhost:8000/api/me", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${auth}`,
          },
        });
        if (res.data.data.role !== "admin") {
          setAdminLoading(false);
          return navigate("/404");
        } else {
          setAdminLoading(false);
          return <Component />;
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      if (!auth) {
        return navigate("/sign-in");
      } else {
        roleCheck();
      }
    }, [auth]);

    return <Component />;
  };
};

export default AdminOnlyRoute;
