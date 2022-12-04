import React from "react";
import { AiOutlineHome,AiOutlineSearch,AiOutlinePlayCircle ,AiTwotoneHeart} from "react-icons/ai";
import {HiLibrary} from 'react-icons/hi' ;
import {GrSpotify} from 'react-icons/gr' ;


function SideBar() {
  return (
    <div className="w-44 bg-black text-white h-screen">
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Home</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineSearch size={25} />
        <h1 className="pl-1 font-semibold text-gray-400">Search</h1>
      </div>
      <div className="flex item-center p-2">
        <HiLibrary size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Your Library</h1>
      </div>
      <div className="flex item-center p-2 mt-4">
        <AiOutlinePlayCircle size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Created Playlist</h1>
      </div>
      <div className="flex item-center p-2">
        <AiTwotoneHeart size={20}  className='text-blue-500'/>
        <h1 className="pl-2 font-semibold  text-gray-400">Liked Songs</h1>
      </div>
      <div className="flex item-center p-2">
        <GrSpotify size={20} className='text-green-400' />
        <h1 className="pl-2 font-semibold text-gray-400">Your Episodes</h1>
      </div>
    </div>
  );
}

export default SideBar;
