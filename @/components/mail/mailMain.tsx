"use client";

import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";

import MailSwitcher from "@/components/mail/mailSwitcher";
import MailDisplay from "@/components/mail/mailDisplay";
import MailList from "@/components/mail/mailList";
import MailNav from "@/components/mail/mailNav";
import { type Mail } from "~/data/mailData";
import { TooltipProvider } from "../ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export default function MailMain({
  accounts,
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed] = React.useState(defaultCollapsed);
  const [mail] = React.useState({ selected: mails[0].id });

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full max-h-[800px] items-stretch border-neutral-800 bg-neutral-950 text-white overflow-hidden"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center bg-neutral-950 text-white border border-neutral-800",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <MailSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator className="bg-neutral-950 text-white" />
          <MailNav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
          <Separator className="bg-neutral-800 text-white" />
          <MailNav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-neutral-800" />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={30}
          className="border-neutral-800 bg-neutral-950 "
        >
          <Tabs defaultValue="all " className="bg-neutral-950 text-white">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <TabsList className="ml-auto bg-neutral-800">
                <TabsTrigger value="all" className="bg-neutral-800 text-white">
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="bg-neutral-800 text-white"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator className="bg-neutral-800" />
            <div className="p-4 backdrop-blur bg-neutral-950 ">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground " />
                  <Input
                    placeholder="Search"
                    className="pl-8 bg-neutral-950 text-white border-neutral-800 placeholder:text-neutral-600"
                  />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0 bg-neutral-950">
              <MailList items={mails} />
            </TabsContent>
            <TabsContent value="unread" className="m-0 bg-neutral-950">
              <MailList items={mails.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle className="bg-neutral-800" />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <MailDisplay
            mail={mails.find((item) => item.id === mail.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
