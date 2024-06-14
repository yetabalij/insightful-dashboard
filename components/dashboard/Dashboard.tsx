import React from "react";
import Sidebar from "../Sidebar";
import DashboardRight from "./DashboardRight";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 overflow-x-hidden ">
      <div className="col-span-2 bg-secondary">
        <Sidebar />
      </div>
      <div className="col-span-10 mt-10">
        <DashboardRight />
      </div>
    </div>
  );
};

export default Dashboard;
