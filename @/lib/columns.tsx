import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { TaskType } from "~/types/taskType";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
export const columns: ColumnDef<TaskType>[] = [
  {
    accessorKey: "id",
    header() {
      return (
        <div>
          <Input type="checkbox" className="h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const isChecked = row.isSelected;
      const toggleCheckbox = () => {
        row.toggleSelected();
      };

      return (
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const txt: unknown = row.getValue("title");
      const type = row.getValue("type");
      return (
        <>
          <div className="font-medium">{txt}</div>
          <div className="text-xs text-neutral-500">{type}</div>
        </>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const txt = row.getValue("status");

      return (
        <div className="font-medium">
          {txt === "In Progress" ? (
            <span className="text-green-500">{txt}</span>
          ) : txt === "Completed" ? (
            <span className="text-blue-500">{txt}</span>
          ) : txt === "Pending" ? (
            <span className="text-yellow-500">{txt}</span>
          ) : (
            <span className="text-red-500">{txt}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const txt: unknown = row.getValue("priority");

      return <div className="font-medium">{txt}</div>;
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
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
