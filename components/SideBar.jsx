import React from "react";
import { AiOutlineHome } from "react-icons/ai";

function SideBar() {
  return (
    <div className="w-44 bg-black text-white h-screen">
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Home</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Search</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Your Library</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Created Playlist</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Liked Songs</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Your Episodes</h1>
      </div>
    </div>
  );
}

export default SideBar;
