"use client";

import React from "react";
import LineChart from "@/components/charts/linechart";
import { FaSlidersH } from "react-icons/fa";

const ApiCalls = () => {
    const labels = ["10:30 AM", "11:30 AM", "12:30 PM", "01:30 PM", "02:30 PM", "03:30 PM"];
    const data = [650, 159, 860, 281, 656, 505];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center justify-between">
                <h3 className="text-md">API Calls in last 6 hours</h3>
                <FaSlidersH className="text-gray-300 cursor-pointer text-sm" />
            </div>
            <div className="mt-4">
                <div className="h-72 w-full">
                    <LineChart labels={labels} data={data} />
                </div>
            </div>
        </div>
    )
}

export default ApiCalls;