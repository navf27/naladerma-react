import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AlreadyLoggedInRoute = (Component) => {
  return () => {
    const navigate = useNavigate();
    const auth = Cookies.get("_auth");

    useEffect(() => {
      if (auth) {
        return navigate("/");
      }
    }, [auth]);

    return <Component />;
  };
};

export default AlreadyLoggedInRoute;
