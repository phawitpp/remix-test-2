import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

export interface Song {
  artist: string;
  pic: string;
  name: string;
}

export const songs: Song[] = [
  {
    artist: "Ornella Binni",
    pic: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    name: "The Last Dance",
  },
  {
    artist: "Tom Byrom",
    pic: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    name: "The tree of life",
  },
  {
    artist: "Vladimir Malyavko",
    pic: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    name: "The dance of the sun",
  },
  {
    artist: "Vladimir Malyavko",
    pic: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    name: "The dance of the sun",
  },
  {
    artist: "Vladimir Malyavko",
    pic: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    name: "The dance of the sun",
  },
  {
    artist: "Vladimir Malyavko",
    pic: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    name: "The dance of the sun",
  },
];
const MusicMain: React.FC = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold">Listen Now</h1>
      <p className="text-base text-neutral-400">
        Top picks for you. Updated daily
      </p>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-neutral-800"></div>
        <div className="flex-grow border-t border-neutral-800"></div>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 py-4">
          {songs.map((song) => (
            <figure key={song.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={song.pic}
                  alt=""
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="mt-2">
                <span className="font-semibold text-white">{song.name}</span>
              </figcaption>
              <figcaption className=" text-xs text-muted-foreground">
                <span className="font-semibold text-neutral-600">
                  {song.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h1 className="text-3xl font-semibold mt-4">Made for You</h1>
      <p className="text-base text-neutral-400">
        Your personal playlists. Updated daily.
      </p>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-neutral-800"></div>
        <div className="flex-grow border-t border-neutral-800"></div>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 py-4">
          {songs.map((song) => (
            <figure key={song.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={song.pic}
                  alt=""
                  className="aspect-[4/4] "
                  width={200}
                  height={200}
                />
              </div>
              <figcaption className="mt-2">
                <span className="font-semibold text-white">{song.name}</span>
              </figcaption>
              <figcaption className=" text-xs text-muted-foreground">
                <span className="font-semibold text-neutral-600">
                  {song.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default MusicMain;
