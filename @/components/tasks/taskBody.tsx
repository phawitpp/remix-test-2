import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";
import { DataTable } from "./taskTable";
import { columns } from "@/lib/columns";
import { TaskType } from "~/types/taskType";

interface TaskBodyProps {
  data: TaskType[];
}

const TaskBody: React.FC<TaskBodyProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  gap-4 w-5/12">
          <Input
            placeholder="Filter tasks..."
            className="bg-neutral-950 border-neutral-800 placeholder:text-neutral-500"
          />
          <Button
            className="bg-neutral-950 hover:bg-neutral-800 text-white  hover:text-white border border-dashed border-neutral-800"
            size={"sm"}
          >
            <div className="flex flex-row gap-2 items-center">
              <PlusCircleIcon className="h-4 w-4" />
              <span>{"  Status"}</span>
            </div>
          </Button>
          <Button
            className="bg-neutral-950 hover:bg-neutral-800 text-white hover:text-white border border-dashed border-neutral-800"
            size={"sm"}
          >
            <div className="flex flex-row gap-2 items-center">
              <PlusCircleIcon className="h-4 w-4" />
              <span>{"  Priority"}</span>
            </div>
          </Button>
        </div>
        <Button className="bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white border border-neutral-800">
          <span>Filter</span>
        </Button>
      </div>

      {/* data table */}
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default TaskBody;
