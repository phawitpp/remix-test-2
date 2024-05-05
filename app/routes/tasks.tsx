import React from "react";
import TaskHeader from "@/components/tasks/taskHeader";
import TaskBody from "@/components/tasks/taskBody";
const Tasks: React.FC = () => {
  return (
    <div className="bg-neutral-950 h-screen w-screen flex flex-col items-center text-white">
      <div className="p-10 lg:p-24 w-screen flex flex-col gap-10">
        {" "}
        <TaskHeader />
        <TaskBody />
      </div>
    </div>
  );
};

export default Tasks;
