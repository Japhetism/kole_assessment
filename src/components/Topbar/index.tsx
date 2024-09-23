import React from "react";
import { getCurrentDate } from "@/utils/helper";

const TopBar = () => {
  return (
    <header className="flex justify-between p-4 bg-gray-50">
      <div className="flex flex-col">
        <h1 className="font-averta text-2xl text-[#15192C]">Dashboard</h1>
        <p className="text-[#92959E] text-xs mt-1">Information about your current plan and usages</p>
      </div>
      <div className="flex items-center justify-end text-[#15192C] flex-grow">
        <span className="p-2 text-sm">{getCurrentDate()}</span>
      </div>
    </header>
  );
};

export default TopBar;