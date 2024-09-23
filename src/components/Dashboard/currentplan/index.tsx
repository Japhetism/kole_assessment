import React from "react";
import { FaChevronRight, FaUsers } from "react-icons/fa";
import ProgressBar from "@/components/progresbar";
import { currentPlans } from "@/fixtures/currentPlans";
import { ICurrentPlan } from "@/interfaces/currentplan";

const CurrentPlan = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-averta text-md text-[#15192C]">Current Plan</h3>
            <p className="text-[#92959E] text-xs mt-1">Information and usages of your current plan</p>
            <div className="flex-1 flex mt-10 justify-between items-center">
                <div className="p-2 rounded-md bg-[#EAF9FF]">
                    <FaUsers className="text-sm text-[#A1D6E0]" />
                </div>
                <div className="ml-4 flex-grow">
                    <p className="text-xs text-[#92959E]">Teams Plan</p>
                    <h2 className="text-xs text-[#15192C] text-2xl font-bold">$99/mo</h2>
                </div>
                <div className="ml-4">
                    <FaChevronRight className="text-xs text-[#15192C]" />
                </div>
            </div>
            <div className="mt-10">
                {currentPlans.map((currentPlan: ICurrentPlan, index: number) => (
                    <div className="mb-5" key={index}>
                        <ProgressBar
                            name={currentPlan.name}
                            total={currentPlan.total}
                            value={currentPlan.value}
                            color={currentPlan.color}
                            sign={currentPlan.sign}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CurrentPlan;