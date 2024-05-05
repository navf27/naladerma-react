import React from "react";

const Card = ({ children }) => {
  return (
    <div className={`bg-[#FFFEFB] w-full lg:w-80 p-5 shadow-2 rounded-lg`}>
      {children}
    </div>
  );
};

export default Card;
