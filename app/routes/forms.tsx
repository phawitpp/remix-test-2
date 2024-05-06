import { FormsNav } from "@/components/forms/formsNav";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "@remix-run/react";
import React from "react";

type FormsProps = {
  children: React.ReactNode;
};
const sidebarNavItems = [
  {
    title: "Profile",
    href: "/forms/profile",
  },
  {
    title: "Account",
    href: "/forms/account",
  },
  {
    title: "Appearance",
    href: "/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/forms/notifications",
  },
  {
    title: "Display",
    href: "/forms/display",
  },
];
const Forms: React.FC<FormsProps> = () => {
  return (
    <div className="bg-neutral-950 h-screen w-screen flex flex-col  text-white gap-4 overflow-scroll">
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-neutral-500">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <FormsNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
