import React from "react";
import { AiOutlineHome,AiOutlineSearch ,AiTwotoneHeart} from "react-icons/ai";
import {VscLibrary} from 'react-icons/vsc' ;
import {GrSpotify} from 'react-icons/gr' ;
import {BsPlusSquareFill} from 'react-icons/bs' ;
import {BiHeartSquare} from 'react-icons/bi' ;

function SideBar() {
  return (
    <div className="w-80 bg-black text-white h-screen ">
         <div className="flex item-center p-2 mb-8 mt-4 " >
        <GrSpotify size={40} />
        <h1 className="pl-2 font-bold text-2xl text-white">Spotify</h1>
      </div>
      <div className="flex item-center p-2 ">
        <AiOutlineHome size={20} className='hover:text-white hover:cursor-pointer text-gray-400' />
        <h1 className="pl-2 font-semibold text-gray-400 hover:text-white hover:cursor-pointer ">Home</h1>
      </div>
      <div className="flex item-center p-2">
        <AiOutlineSearch size={25} className='hover:text-white hover:cursor-pointer text-gray-400' />
        <h1 className="pl-1 font-semibold text-gray-400 hover:text-white hover:cursor-pointer">Search</h1>
      </div>
      <div className="flex item-center p-2">
        <VscLibrary size={20} className='hover:text-white hover:cursor-pointer text-gray-400' />
        <h1 className="pl-2 font-semibold text-gray-400 hover:text-white hover:cursor-pointer">Your Library</h1>
      </div>
      <div className="flex item-center p-2 mt-4">
        <BsPlusSquareFill size={20} className='text-gray-400 hover:text-white hover:cursor-pointer'/>
        <h1 className="pl-2 font-semibold text-gray-400 hover:text-white hover:cursor-pointer">Created Playlist</h1>
      </div>
      <div className="flex item-center p-2">
        <BiHeartSquare size={20}  className='text-white bg-violet-500  hover:cursor-pointer '/>
        <h1 className="pl-2 font-semibold  text-gray-400 hover:text-white hover:cursor-pointer">Liked Songs</h1>
      </div>
      <div className="flex item-center p-2">
        <GrSpotify size={20} className='text-green-400  hover:cursor-pointer' />
        <h1 className="pl-2 font-semibold text-gray-400 hover:text-white hover:cursor-pointer">Your Episodes</h1>
      </div>
      <hr className="mx-4 mt-4" />
    </div>
  );
}

export default SideBar;
