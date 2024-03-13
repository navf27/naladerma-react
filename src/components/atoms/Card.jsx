import React from "react";

const Card = ({ children, className }) => {
  return <div className={`bg-[#FFFEFB] ${className}`}>{children}</div>;
};

export default Card;
