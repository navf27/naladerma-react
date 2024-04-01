import React from "react";

const DashboardCardSkeleton = () => {
  return (
    <div className="bg-[#FFFEFB] w-full p-5 drop-shadow-md rounded-lg">
      <div className="animate-pulse">
        <div className="w-7 h-7 mt-1 bg-gray-300 rounded-full"></div>
        <p className="text-dark text-2xl font-medium mt-4 bg-gray-300 w-fit rounded-full">
          <span className="invisible">12345</span>
        </p>
        <p className="text-slate-500 text-base mt-1 bg-gray-300 w-fit rounded-full">
          <span className="invisible">Total Event</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardCardSkeleton;
