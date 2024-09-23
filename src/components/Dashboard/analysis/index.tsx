import React from "react";
import { analysis } from "@/fixtures/analysis";
import { IAnalysis } from "@/interfaces/analysis";

const IconBgColors = ["#FFF2E9", "#EDE8FF", "#EAF9FF", "#FFEBEF"];
const IconTextColors = ["#FF8C8C", "#B8B4E6", "#A1D6E0", "#FFB3B8"];

const Analysis = () => {
    return (
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md flex flex-col md:flex-row">
            {analysis.map((item: IAnalysis, index: number) => {
                const Icon = item.icon;
                const bgColor = IconBgColors[index % IconBgColors.length];
                const textColor = IconTextColors[index % IconTextColors.length];
                return (
                    <React.Fragment key={index}>
                        <div className="flex-1 flex items-center justify-center mb-4 md:mb-0">
                            {Icon && (
                                <div style={{ backgroundColor: bgColor }} className="p-2 rounded-md">
                                    <Icon className="text-sm" style={{ color: textColor }} />
                                </div>
                            )}
                            <div className="ml-2 text-center md:text-left">
                                <p className="text-sm text-[#92959E]">{item.name}</p>
                                <h2 className="text-xs text-[#15192C] text-2xl font-bold">{item.count}</h2>
                            </div>
                        </div>
                        {index < analysis.length - 1 && (
                            <div className="border-l border-gray-300 mx-4 hidden md:block"></div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Analysis;
