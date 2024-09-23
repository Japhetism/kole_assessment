import React from "react";
import { getCurrentDate } from "@/utils/helper";

const TopBar = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between px-4 md:px-8 py-4 md:py-6 bg-gray-50">
      <div className="flex flex-col mb-2 md:mb-0">
        <h1 className="font-averta text-xl md:text-2xl text-[#15192C]">Dashboard</h1>
        <p className="text-[#92959E] text-xs mt-1">Information about your current plan and usages</p>
      </div>
      <div className="flex items-center justify-end text-[#15192C] flex-grow">
        <span className="p-2 text-sm">{getCurrentDate()}</span>
      </div>
    </header>
  );
};

export default TopBar;