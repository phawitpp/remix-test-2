import { Separator } from "@/components/ui/separator";
import React from "react";

type FormsProps = {
  children: React.ReactNode;
};

const Forms: React.FC<FormsProps> = ({ children }) => {
  return (
    <div className="bg-neutral-950 h-full w-screen flex flex-col  text-white gap-4">
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
            {/* <SidebarNav items={sidebarNavItems} /> */}
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Forms;