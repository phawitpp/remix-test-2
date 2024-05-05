import React from "react";
import { Outlet } from "@remix-run/react";
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useNavigate } from "@remix-run/react";
interface MusicMainProps {
  // Define your component props here
}

const MusicMain: React.FC<MusicMainProps> = () => {
  const [currentTab, setCurrentTab] = React.useState("Music");
  const navigate = useNavigate();

  return (
    <div className="col-span-9 md:col-span-10 border border-neutral-800">
      <div className="py-4 px-10 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 bg-neutral-800 px-2 items-center rounded-lg">
            <button
              className={
                "py-1 px-3 rounded-lg text-sm font-semibold " +
                (currentTab === "Music"
                  ? "text-white bg-neutral-950"
                  : "text-neutral-400")
              }
              onClick={() => {
                setCurrentTab("Music");
                navigate("/music");
              }}
            >
              Music
            </button>
            <button
              className={
                "py-1 px-3 rounded-lg text-sm font-semibold " +
                (currentTab === "Podcasts"
                  ? "text-white bg-neutral-950"
                  : "text-neutral-400")
              }
              onClick={() => {
                setCurrentTab("Podcasts");
                navigate("/music/podcast");
              }}
            >
              Podcasts
            </button>

            <button
              className="py-1 px-3 rounded-lg text-sm text-neutral-600 font-semibold"
              disabled
            >
              Live
            </button>
          </div>
          <Button className="bg-white text-black hover:bg-slate-300">
            <div className="flex flex-row gap-2 items-center">
              <PlusCircleIcon className="h-4 w-4" />
              <span> Add music</span>
            </div>
          </Button>
        </div>

        {/* render child path */}
        <Outlet />
      </div>
    </div>
  );
};

export default MusicMain;
