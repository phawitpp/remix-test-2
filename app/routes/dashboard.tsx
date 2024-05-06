import React from "react";
import DashboardNav from "@/components/dashboard/dashboardNav";
import DashboardPanel from "@/components/dashboard/dashboardPanel";
const Dashboard: React.FC = () => {
  return (
    <div className="bg-neutral-950 h-full w-screen flex flex-col items-center  text-white gap-4">
      <DashboardNav />
      <DashboardPanel />
    </div>
  );
};

export default Dashboard;
