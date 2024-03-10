import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoggedInRoute = (Component) => {
  return () => {
    const navigate = useNavigate();
    const auth = Cookies.get("_auth");

    useEffect(() => {
      if (auth) {
        navigate("/");
      }
    }, [auth]);

    return <Component />;
  };
};

export default LoggedInRoute;
