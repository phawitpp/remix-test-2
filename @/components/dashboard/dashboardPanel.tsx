import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { addDays, format } from "date-fns";
import {
  CalendarIcon,
  DollarSign,
  UserRound,
  CreditCard,
  Activity,
} from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import DashboardChart from "./dashboardChart";
const DashboardPanel: React.FC = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const cardInfo: {
    title: string;
    amount: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Total revenue",
      amount: "$45,231.89",
      description: "+20.1% from last month",
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      title: "Subscriptions",
      amount: "+2350",
      description: "+180.1% from last month",
      icon: <UserRound className="w-4 h-4" />,
    },
    {
      title: "Sales",
      amount: "+12,234",
      description: "+19% from last month",
      icon: <CreditCard className="w-4 h-4" />,
    },
    {
      title: "Active Now",
      amount: "+573",
      description: "+201 since last hour",
      icon: <Activity className="w-4 h-4" />,
    },
  ];
  const recentSales: {
    name: string;
    email: string;
    amount: string;
  }[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      amount: "+$2,345.67",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      amount: "+$1,234.56",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      amount: "+$3,456.78",
    },
    {
      name: "Bob Williams",
      email: "bob.williams@example.com",
      amount: "+$4,567.89",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      amount: "+$5,678.90",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      amount: "+$6,789.01",
    },
  ];
  return (
    <div className="w-screen flex flex-col justify-between px-10 gap-4">
      <div className="flex flex-row justify-between">
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

      <Menubar className="h-10 bg-neutral-800 border-0 w-max">
        <MenubarMenu>
          <MenubarTrigger className="bg-black">Overview</MenubarTrigger>
          <MenubarTrigger>Analytics</MenubarTrigger>
          <MenubarTrigger>Reports</MenubarTrigger>
          <MenubarTrigger>Notifications</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-row gap-4 w-full">
        {cardInfo.map((card, key) => (
          <Card
            key={key}
            className="bg-neutral-950 text-white border border-neutral-800 w-full"
          >
            <CardHeader>
              <div className="flex flex-row justify-between items-center font-medium">
                {" "}
                {card.title}
                {card.icon}
              </div>
            </CardHeader>
            <CardContent>
              <span className="text-3xl font-bold">{card.amount}</span>
              <CardDescription className="text-neutral-400">
                {card.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-row gap-4 w-full">
        <Card className="bg-neutral-950 text-white border border-neutral-800 w-7/12">
          <CardHeader className="font-medium">Overview</CardHeader>
          <CardContent>
            <DashboardChart />
          </CardContent>
        </Card>{" "}
        <Card className="bg-neutral-950 text-white border border-neutral-800 w-5/12">
          <CardHeader>
            <span className="font-medium">Recent Sales</span>
            <span className="text-neutral-400">
              You made 265 sales this month.
            </span>
            <div className="md:hidden">
              Your screen is too small to display the table. Please use a larger
              screen.
            </div>
            {recentSales.map((sale, key) => (
              <div
                key={key}
                className="md:flex flex-row p-2 gap-4 justify-between items-center w-full hidden"
              >
                <div className="flex flex-row gap-4 w-max ">
                  <div className=" w-10 h-10 bg-white rounded-3xl flex flex-row items-center justify-center">
                    <div className="w-5 h-5 bg-black rounded-xl"> </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium">{sale.name}</span>
                    <span className="text-neutral-400 text-sm">
                      {sale.email}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-white font-medium">{sale.amount}</span>
                </div>
              </div>
            ))}
          </CardHeader>
          <CardContent></CardContent>
        </Card>{" "}
      </div>
    </div>
  );
};

export default DashboardPanel;
