import React from "react";

const WhiteButton = ({ children, activeClass, onClick, logo }) => {
  return (
    <button
      className={`inline-flex items-center text-body-color relative rounded-md border border-transparent px-4 py-3 text-center text-base font-medium disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 ${
        activeClass && activeClass
      }`}
      onClick={onClick}
    >
      <div className="absolute top-3.5">
        <div dangerouslySetInnerHTML={{ __html: logo }} />
      </div>
      <div className="ms-7 ">{children}</div>
    </button>
  );
};

export default WhiteButton;
