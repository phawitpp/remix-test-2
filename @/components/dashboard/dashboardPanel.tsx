import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const DashboardPanel: React.FC = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="w-screen flex flex-row justify-between px-10">
      <span className=" font-bold text-4xl">Dashboard</span>
      <div
        className="
  flex flex-row justify-between gap-4
  "
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"default"}
              className={cn(
                "w-[250px] justify-start text-left font-normal bg-neutral-950 border border-neutral-800 hover:bg-neutral-800",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        <Button variant={"secondary"}>Download</Button>
      </div>
    </div>
  );
};

export default DashboardPanel;
