import React from "react";

const TaskHeader: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold mt-4">Welcome back!</h1>
        <p className="text-base text-neutral-400">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
      <div className="w-10 h-10 bg-white rounded-3xl"></div>
    </div>
  );
};

export default TaskHeader;
