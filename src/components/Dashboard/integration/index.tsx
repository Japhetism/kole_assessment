import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { activities } from "@/fixtures/activities";
import { IActivity } from "@/interfaces/activity";

const Integration = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h3 className="font-averta text-md text-[#15192C] text-sm">Integrations</h3>
                <FaEllipsisV className="text-gray-300 cursor-pointer" />
            </div>
            <div className="mt-10 overflow-y-auto max-h-[100px]">
                {activities.map((activity: IActivity, index: number) => (
                    <div key={index} className="p-4">
                        <div className="flex items-start mb-5">
                            <img 
                                src="/images/man.jpg" 
                                alt="Logo" 
                                className="h-8 w-8 mr-2 rounded-full object-cover" 
                            />
                            <div className="ml-2">
                                <p className="text-md text-[#15192C]">{activity.name}</p>
                                <span className="text-xs text-[#15192C] text-2xl">{activity.comment}</span>
                            </div>
                        </div>
                        {index < activities.length - 1 && (
                            <hr className="border-t border-gray-100" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Integration;
