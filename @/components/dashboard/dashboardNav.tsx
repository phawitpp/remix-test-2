import React from "react";
import { ComboBoxInfo } from "~/types/dashboardType";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ChevronsUpDown, CirclePlus } from "lucide-react";

const DashboardNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const comboBoxInfo: ComboBoxInfo = {
    personal: {
      name: "John Doe",
    },
    teams: [
      {
        name: "Acme Inc.",
        members: [
          {
            name: "John Doe",
            role: "Developer",
          },
          {
            name: "Jane Doe",
            role: "Designer",
          },
        ],
      },
      {
        name: "Monsters Inc.",
        members: [
          {
            name: "John Doe",
            role: "Developer",
          },
          {
            name: "Jane Doe",
            role: "Designer",
          },
        ],
      },
    ],
  };
  const menuLinks: string[] = ["Overview", "Customers", "Products", "Settings"];

  return (
    <nav className="w-screen px-6 py-3 border border-neutral-800 flex flex-row justify-between">
      <div className="flex flex-row gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 text-left hover:text-white"
            >
              <div className="flex flex-row gap-3">
                {" "}
                <div className="w-5 h-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-400"></div>
                <span>{comboBoxInfo.personal.name}</span>
              </div>

              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0 border-0 text-white">
            <Command
              className=" w-max bg-neutral-950 border border-neutral-800 text-white
"
            >
              <CommandInput
                placeholder="Search team..."
                className=" border-0 no-underline text-white bg-neutral-950"
              />
              <CommandList className="text-white">
                <CommandGroup heading="Personal Account">
                  <CommandItem className="bg-neutral-950 text-white">
                    <div className="flex flex-row gap-3">
                      <div className="w-5 h-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-400"></div>
                      <span>{comboBoxInfo.personal.name}</span>
                    </div>
                  </CommandItem>
                </CommandGroup>
                <CommandGroup heading="Teams">
                  <CommandItem className="bg-neutral-950 text-white">
                    <div className="flex flex-row gap-3">
                      <div className="w-5 h-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-400"></div>
                      <span>{comboBoxInfo.teams[0].name}</span>
                    </div>
                  </CommandItem>
                  <CommandItem className="bg-neutral-950 text-white">
                    <div className="flex flex-row gap-3">
                      <div className="w-5 h-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-400"></div>
                      <span>{comboBoxInfo.teams[1].name}</span>
                    </div>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator className="bg-neutral-800" />
                <CommandItem className="h-10">
                  <div className="flex flex-row gap-3">
                    <CirclePlus className="w-5 h-5" />
                    <span>Create Team</span>
                  </div>
                </CommandItem>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="flex flex-row">
          {menuLinks.map((link, key) => (
            <Button
              key={key}
              variant="link"
              className={
                link === "Overview"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }
            >
              {link}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <Input
          placeholder="Search..."
          className="w-[300px] bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600"
        />
        <div className="w-8 h-8 bg-gradient-to-t from-neutral-800 to-neutral-400 rounded-3xl "></div>
      </div>
    </nav>
  );
};

export default DashboardNav;
