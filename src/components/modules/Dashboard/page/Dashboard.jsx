import React from "react";
import SideBar from "../../../ui/sidebar/SideBar";
import DashBoardContent from "../component/DashBoardContent";
import "./index.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <DashBoardContent />
    </div>
  );
}

export default Dashboard;
