import React from "react";

const EventModalInputSkeleton = () => {
  return (
    <form>
      <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
        <label className="bg-gray-300 w-fit animate-pulse rounded-full mb-2 text-left block text-base font-medium text-body-color">
          <span className="invisible">Nama Event</span>
        </label>
        <input
          type="text"
          className="w-full bg-gray-300 rounded-full animate-pulse border border-stroke py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
        />
      </div>
      <div className="w-full mb-4 md:w-1/2 lg:w-1/3">
        <label className="bg-gray-300 w-fit animate-pulse rounded-full mb-2 text-left block text-base font-medium text-body-color">
          <span className="invisible">Nama Event</span>
        </label>
        <div className="relative z-20">
          <select className="relative z-20 w-full appearance-none rounded-full animate-pulse border border-stroke bg-gray-300 py-[10px] px-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"></select>
        </div>
      </div>
      <div className="w-full mb-2 md:w-1/2 lg:w-1/3">
        <label className="bg-gray-300 w-fit animate-pulse rounded-full mb-2 text-left block text-base font-medium text-body-color">
          <span className="invisible">Nama Event</span>
        </label>
        <textarea
          rows="5"
          className="w-full appearance-none bg-gray-300 rounded-3xl animate-pulse border border-stroke p-5 text-dark-6 outline-none transition focus:border-[#FFCC00] active:border-[#FFCC00] disabled:cursor-default disabled:bg-gray-2"
        />
      </div>
    </form>
  );
};

export default EventModalInputSkeleton;
