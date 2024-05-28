import React from "react";

const SnapModal = () => {
  return (
    <>
      {/* {loadingCheckout ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-[#FFD970] rounded-full"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-[#FFD970] rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      ) : null} */}

      <div className="container mx-auto">
        <div
          className={`fixed z-40 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5`}
        >
          <div id="snap-div"></div>
        </div>
      </div>
    </>
  );
};

export default SnapModal;
