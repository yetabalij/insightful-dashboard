import React from "react";
import Sidebar from "../Sidebar";
import PostsDashboardRight from "./PostsDashboardRight";
import BackButton from "../BackButton";
import PostsPagination from "../posts/PostsPagination";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 overflow-x-hidden ">
      <div className="col-span-2 bg-secondary">
        <Sidebar />
      </div>
      <div className="col-span-10 mt-10">
        <BackButton text="Go Back" link="/" />
        <PostsDashboardRight />
        <PostsPagination />
      </div>
    </div>
  );
};

export default Dashboard;
