import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TaskBody: React.FC = () => {
  // Implement your component logic here

  return (
    <div className="flex flex-col gap-2">
      <div
        className="grid 
        grid-cols-12
        w-full
        h-full
        "
      >
        <div className="col-span-5">
          <Input
            placeholder="Filter tasks..."
            className="bg-neutral-950 border-neutral-800 placeholder:text-neutral-500"
          />
          <Button></Button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TaskBody;
