import React from "react";
import Analysis from "./analysis";
import ApiCalls from "./apicalls";
import ProfitGrowth from "./profit";
import CurrentPlan from "./currentplan";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 flex-1">
        <Analysis />
        <div className="mt-5">
            <ApiCalls />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
            <ProfitGrowth />
            <CurrentPlan />
        </div>
    </div>
  );
};

export default Dashboard;
