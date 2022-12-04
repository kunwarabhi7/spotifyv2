import React from "react";
import { AiOutlineHome,AiOutlineSearch ,AiTwotoneHeart} from "react-icons/ai";
import {VscLibrary} from 'react-icons/vsc' ;
import {GrSpotify} from 'react-icons/gr' ;
import {BsPlusSquareFill} from 'react-icons/bs' ;
import {BiHeartSquare} from 'react-icons/bi' ;

function SideBar() {
  return (
    <div className="w-80 bg-black text-white h-screen">
         <div className="flex item-center p-2 mb-8 mt-4" >
        <GrSpotify size={40} />
        <h1 className="pl-2 font-bold text-2xl text-gray-400">Spotify</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineHome size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Home</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineSearch size={25} />
        <h1 className="pl-1 font-semibold text-gray-400">Search</h1>
      </div>
      <div className="flex item-center p-2">
        <VscLibrary size={20} />
        <h1 className="pl-2 font-semibold text-gray-400">Your Library</h1>
      </div>
      <div className="flex item-center p-2 mt-4">
        <BsPlusSquareFill size={20} className='text-gray-400'/>
        <h1 className="pl-2 font-semibold text-gray-400">Created Playlist</h1>
      </div>
      <div className="flex item-center p-2">
        <BiHeartSquare size={20}  className='text-white bg-violet-500 '/>
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
