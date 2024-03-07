import React from "react";

const YellowButton = ({ children, width }) => {
  const className = `${width} bg-[#FFCC00] border-[#FFCC00] border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark hover:bg-[#FFBB00] hover:border-[#FFBB00] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#FFBB00] active:border-[#FFBB00] transition-colors duration-200`;
  return (
    <button className={className} type="submit">
      {children}
    </button>
  );
};

export default YellowButton;
