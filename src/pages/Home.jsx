import React from "react";
import YellowButton from "../components/Atoms/YellowButton";
import { useSignOutContext } from "../context/SignOutContext";
import { Link } from "react-router-dom";
import PrivateRoute from "../hoc/PrivateRoute";

const Home = () => {
  const { onSignOutClick, loading } = useSignOutContext();

  return (
    <div>
      {loading ? (
        <div className="border border-red-500 fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null}
      <h2>Home</h2>
      <Link onClick={onSignOutClick}>
        <YellowButton>Keluar</YellowButton>
      </Link>
    </div>
  );
};

export default PrivateRoute(Home);
