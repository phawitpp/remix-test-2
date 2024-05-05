import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { AudioLines } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ui selector" },
    { name: "Shadcn example", content: "Welcome to Remix!" },
  ];
};

const menuLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Music", href: "/music" },
  { name: "Mail", href: "/mail" },
  { name: "Tasks", href: "/tasks" },
  { name: "Forms", href: "/forms" },
];

export default function Index() {
  return (
    <div
      className="bg-neutral-950
     h-screen w-screen flex flex-col items-center justify-between py-24 text-white gap-10"
    >
      <h1 className="text-4xl font-bold">Shadcn/UI Example clone</h1>
      <div className="flex flex-col gap-6">
        {menuLinks.map((link, key) => (
          <Link to={link.href} key={key}>
            <Button
              variant={"secondary"}
              size={"lg"}
              className="
              border border-neutral-800
              h-14
              w-60
              bg-neutral-950
              text-white
              hover:bg-white
              hover:text-black
              hover:scale-105

            "
            >
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
      <Alert className="w-1/2">
        <AudioLines className="h-5 w-5" />
        <AlertTitle>Welcome to the Shadcn/UI Example clone!</AlertTitle>
        <AlertDescription>
          <p>
            This is a simple clone of the Shadcn UI example. You can navigate
            through the links above to see the different pages.
          </p>
          <p className="font-semibold">Created by Phawit Monchaising (Peem)</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
