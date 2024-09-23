import React from "react";
import Analysis from "./analysis";
import ApiCalls from "./apicalls";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 flex-1">
        <Analysis />
        <div className="mt-5">
            <ApiCalls />
        </div>
    </div>
  );
};

export default Dashboard;
