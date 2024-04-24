import React from "react";

const Card = ({ children }) => {
  return (
    <div className={`bg-[#FFFEFB] w-full p-5 shadow-1 rounded-lg`}>
      {children}
    </div>
  );
};

export default Card;
