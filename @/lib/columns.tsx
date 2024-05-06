import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { TaskType } from "~/types/taskType";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ChevronsUpDown,
  Circle,
  CircleHelp,
  MoreHorizontal,
  Timer,
} from "lucide-react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
export const columns: ColumnDef<TaskType>[] = [
  {
    accessorKey: "id",
    header() {
      return (
        <div className="flex flex-row gap-2 items-center">
          <Checkbox className="border border-white" />
          <span className="text-neutral-600">Task</span>
        </div>
      );
    },
    cell: ({ row }) => {
      const txt = row.getValue("id");
      return (
        <div className="flex flex-row gap-2 items-center">
          <Checkbox className="border border-white" />

          <span>{"TASK-" + txt}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          size={"sm"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex flex-row gap-1 items-center text-neutral-600 hover:bg-neutral-700 hover:text-white"
        >
          Title
          <ChevronsUpDown className="ml-2 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const txt: unknown = row.getValue("title");
      return (
        <>
          <div className="font-medium flex flex-row gap-1">
            <Badge className="bg-neutral-950 border border-neutral-800">
              {row.original.type}
            </Badge>
            {txt}
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "status",
    header() {
      return <span className="text-neutral-600">Status</span>;
    },
    cell: ({ row }) => {
      const txt = row.getValue("status");

      return (
        <div className="font-medium">
          {txt === "In Progress" ? (
            <div className="flex flex-row gap-1">
              <Timer className="h-4 w-4" />
              {txt}
            </div>
          ) : txt === "Completed" ? (
            <div className="flex flex-row gap-1">
              <Circle className="h-4 w-4" />
              {txt}
            </div>
          ) : txt === "Pending" ? (
            <div className="flex flex-row gap-1">
              <CircleHelp className="h-4 w-4" />
              {txt}
            </div>
          ) : (
            <span className="text-red-500">{txt}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header() {
      return <span className="text-neutral-600">Priority</span>;
    },
    cell: ({ row }) => {
      const txt: unknown = row.getValue("priority");

      return (
        <div className="font-medium">
          {txt === "High" ? (
            <div className="flex flex-row gap-1">
              <ArrowUp className="h-4 w-4" />
              {txt}
            </div>
          ) : txt === "Medium" ? (
            <div className="flex flex-row gap-1">
              <ArrowRight className="h-4 w-4" />
              {txt}
            </div>
          ) : (
            <div className="flex flex-row gap-1">
              <ArrowDown className="h-4 w-4" />
              {txt}
            </div>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-neutral-950 border border-neutral-800 text-white"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Make a copy</DropdownMenuItem>
              <DropdownMenuItem>Favorite</DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className=" border border-neutral-800" />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Labels</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuContent
                  align="start"
                  className="bg-neutral-950 border border-neutral-800 text-white"
                >
                  <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="top">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator className=" border border-neutral-800" />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
