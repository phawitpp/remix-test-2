import React from "react";
import { Button } from "../ui/button";
import {
  CirclePlay,
  Library,
  ListMusic,
  MicVocal,
  Music2,
  Radio,
  Shapes,
  User,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
const MusicSide: React.FC = () => {
  // Add your component logic here

  return (
    <div className="col-span-3 md:col-span-2 border border-neutral-800 w-full">
      <div className="p-4 flex flex-col gap-8">
        <div>
          <h1 className="text-xl font-medium px-4">Discover</h1>
          <div className="flex flex-col gap-1 mt-3 justify-start">
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <CirclePlay className="mr-2 h-4 w-4" />
                <span className="text-base">Listen Now</span>
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <Shapes className="mr-2 h-4 w-4" />
                <span className="text-base">Browse</span>
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <Radio className="mr-2 h-4 w-4" />
                <span className="text-base">Radio</span>
              </div>
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium px-4">Library</h1>
          <div className="flex flex-col gap-1 mt-3 justify-start">
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <ListMusic className="mr-2 h-4 w-4" />
                <span className="text-base">Playlists</span>
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <Music2 className="mr-2 h-4 w-4" />
                <span className="text-base">Songs</span>
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <User className="mr-2 h-4 w-4" />
                <span className="text-base">Made for You</span>
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <MicVocal className="mr-2 h-4 w-4" />
                <span className="text-base">Artists</span>
              </div>
            </Button>
            <Button
              variant={"ghost"}
              className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
            >
              <div className="flex flex-row justify-center items-center">
                <Library className="mr-2 h-4 w-4" />
                <span className="text-base">Albums</span>
              </div>
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium px-4">Playlists</h1>
          <ScrollArea className=" w-full h-72 mt-3">
            <div className="flex flex-col gap-1 mt-3 justify-start">
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Recently Added</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Recently Played</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Top songs</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Top Albums</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Top Artists</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Logic Discography</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Bedtime Beats</span>
                </div>
              </Button>
              <Button
                variant={"ghost"}
                className=" bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white flex flex-row justify-start"
              >
                <div className="flex flex-row justify-center items-center">
                  <ListMusic className="mr-2 h-4 w-4" />
                  <span className="text-base">Feeling Happy</span>
                </div>
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default MusicSide;
