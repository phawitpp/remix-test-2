import React from "react";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PodcastIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PodcastProps {
  // Define your component props here
}

const Podcast: React.FC<PodcastProps> = () => {
  // Add your component logic here

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold">New Episodes</h1>
      <p className="text-base text-neutral-400">
        Your favorite podcasts. Updated daily.
      </p>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-neutral-800"></div>
        <div className="flex-grow border-t border-neutral-800"></div>
      </div>
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[500px] w-full items-center justify-center rounded-md border border-dashed text-sm">
          <div className="flex flex-col items-center gap-2">
            <PodcastIcon className="h-10 w-10" />
            <span className="text-white font-bold text-xl">
              No episodes added
            </span>
            <span className="text-neutral-400">
              You have not added any podcasts. Add one below.
            </span>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className=" bg-white text-black hover:bg-slate-300"
                  size={"sm"}
                >
                  Add podcast
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-neutral-950 border border-neutral-800">
                <DialogHeader>
                  <DialogTitle className=" text-white">
                    Add Podcast{" "}
                  </DialogTitle>
                  <DialogDescription className="text-neutral-400">
                    Copy and paste the podcast feed URL to import.
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <Label htmlFor="url" className="text-white">
                    Podcast URL
                    <Input
                      id="url"
                      placeholder="https://example.com/feed.xml"
                      className="bg-neutral-950 bordee border-neutral-800 mt-1 placeholder:text-neutral-500"
                    />
                  </Label>
                </div>

                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-white text-black hover:bg-slate-300"
                  >
                    Import Podcast
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
    </div>
  );
};

export default Podcast;
