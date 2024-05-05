import React from "react";
import TaskHeader from "@/components/tasks/taskHeader";
import TaskBody from "@/components/tasks/taskBody";
import { json, useLoaderData } from "@remix-run/react";
import { fetchTaskData } from "~/data/taskData";
export const loader = async () => {
  return json(await fetchTaskData());
};
const Tasks: React.FC = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="bg-neutral-950 h-screen w-screen flex flex-col items-center text-white overflow-scroll">
      <div className="p-10 lg:p-24 w-screen flex flex-col gap-10">
        {" "}
        <TaskHeader />
        <TaskBody data={data} />
      </div>
    </div>
  );
};

export default Tasks;
