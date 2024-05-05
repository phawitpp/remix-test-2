import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
const MusicNav: React.FC = () => {
  return (
    <nav className="w-screen px-6 py-1  flex flex-row justify-between">
      <Menubar
        className="
        h-8 bg-neutral-950 border-0 w-max 
      "
      >
        <MenubarMenu>
          <MenubarTrigger>Music</MenubarTrigger>
          <MenubarContent
            className="
            w-max bg-neutral-950 border border-neutral-800 text-white
          "
          >
            <MenubarItem>About Music</MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem>
              Preference...
              <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem>
              Hide Music... <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Hide Others... <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Quit Music... <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent
            className="
            w-max bg-neutral-950 border border-neutral-800 text-white
          "
          >
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent className="bg-neutral-950 border border-neutral-800 text-white">
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent
            className="
            w-max bg-neutral-950 border border-neutral-800 text-white
          "
          >
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent className="bg-neutral-950 border border-neutral-800 text-white">
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator className=" bg-neutral-800" />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent
            className="
            w-max bg-neutral-950 border border-neutral-800 text-white
          "
          >
            <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
            <MenubarSeparator className=" bg-neutral-800" />

            <MenubarItem inset disabled>
              Show Status Bar
            </MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent
            className="
            w-max bg-neutral-950 border border-neutral-800 text-white
          "
          >
            <MenubarRadioItem value="andy">Switch Account</MenubarRadioItem>
            <MenubarSeparator className=" bg-neutral-800" />

            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem inset>Manage Family...</MenubarItem>
            <MenubarSeparator className=" bg-neutral-800" />
            <MenubarItem inset>Add Account...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default MusicNav;
