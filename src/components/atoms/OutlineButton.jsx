import React from "react";

const OutlineButton = () => {
  return (
    <button className="border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-dark hover:bg-[#FFCC00] dark:hover:bg-[#FFCC00] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
      View Details
    </button>
  );
};

export default OutlineButton;
