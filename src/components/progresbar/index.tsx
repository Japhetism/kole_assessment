import React from "react";
import { ICurrentPlan } from "@/interfaces/currentplan";

const ProgressBar = ({ name, total, value, color, sign }: ICurrentPlan) => {
    
    const percentage = total > 0 ? (value / total) * 100 : 0;

    return (
        <div className="w-full">
            <div className="flex justify-between mb-2">
                <span className="text-left text-xs">{name}</span>
                <span className="text-right text-xs">{`${value}${sign}/${total}${sign}`}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: color || "#3B82F6"
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
