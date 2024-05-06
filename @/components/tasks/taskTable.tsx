import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="rounded-md border border-neutral-800">
      <Table className=" overflow-scroll">
        <TableHeader className="hover:bg-neutral-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="hover:bg-neutral-800 border-neutral-800"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-neutral-900 border-neutral-800"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex flex-row justify-between px-8 items-center py-4">
        <span className="text-neutral-600 text-sm font-semibold">
          {"0 of 50 row(s) selected."}
        </span>
        <div className="flex flex-row justify-between gap-16 items-center">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-white text-sm font-semibold">
              {"Rows per page"}
            </span>
            <Select>
              <SelectTrigger className="w-[70px] bg-neutral-950 h-[30px] border border-neutral-800">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950 text-white border border-neutral-800">
                <SelectGroup>
                  <SelectItem value="apple" className="hover:bg-neutral-800">
                    1
                  </SelectItem>
                  <SelectItem value="banana">5</SelectItem>
                  <SelectItem value="blueberry">10</SelectItem>
                  <SelectItem value="grapes">20</SelectItem>
                  <SelectItem value="pineapple">50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <span className="text-sm font-semibold">{`Page 1 of 10`}</span>
          </div>

          <div className="flex flex-row gap-2">
            <Button
              className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 hover:text-white"
              size={"sm"}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft className="w-3 h-3" />
            </Button>
            <Button
              className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 hover:text-white"
              size={"sm"}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="w-3 h-3" />
            </Button>
            <Button
              className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 hover:text-white"
              size={"sm"}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="w-3 h-3" />
            </Button>
            <Button
              className="bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 hover:text-white"
              size={"sm"}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
