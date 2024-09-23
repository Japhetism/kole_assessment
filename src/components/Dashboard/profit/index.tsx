import React from "react";
import { growths } from "@/fixtures/growths";
import { IGrowth } from "@/interfaces/growth";

const ProfitGrowth = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-averta text-md text-[#15192C]">P&L</h3>
            <p className="text-[#92959E] text-xs mt-1">Total profit growth of 25%</p>
            <div className="mt-10">
                {growths.map((growth: IGrowth, index: number) => (
                    <div className="flex items-start mb-5" key={index}>
                        <div className="w-2 h-2 rounded-full mt-1" style={{ backgroundColor: growth.color }}></div>
                        <div className="ml-2">
                            <p className="text-xs text-[#92959E]">{growth.name}</p>
                            <h2 className="text-sm text-[#15192C] text-2xl">{growth.value}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfitGrowth;
