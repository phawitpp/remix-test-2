import React from "react";
import MusicNav from "@/components/music/musicNav";
import MusicMain from "@/components/music/musicMain";
import MusicSide from "@/components/music/musicSide";
const Music: React.FC = () => {
  return (
    <div className="bg-neutral-950 h-screen w-screen flex flex-col items-center text-white">
      <MusicNav />
      <div
        className="grid
        grid-cols-12
        w-full
        h-full
        overflow-scroll

      "
      >
        <MusicSide />
        <MusicMain />
      </div>
    </div>
  );
};

export default Music;
