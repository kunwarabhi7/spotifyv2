import React from "react";
import { AiOutlineHome,AiOutlineSearch ,AiTwotoneHeart} from "react-icons/ai";
import {VscLibrary} from 'react-icons/vsc' ;
import {GrSpotify} from 'react-icons/gr' ;
import {BsPlusSquareFill} from 'react-icons/bs' ;
import {BiHeartSquare} from 'react-icons/bi' ;
import { signOut } from "next-auth/react";

function SideBar() {
  return (
    <div className="w-80 bg-black text-white h-screen scrollbar-hide overflow-y-scroll">
         <div className="flex item-center p-2 mb-8 mt-4 cursor-pointer" >
        <GrSpotify size={40} />
        <h1 className="pl-2 font-bold text-2xl text-white">Spotify</h1>
      </div>
      <div className="flex item-center p-2 text-gray-400  hover:text-white hover:cursor-pointer ">
    
        <h1 onClick={()=>signOut()}  className="pl-2 font-semibold  ">LogOut</h1>
      </div>
      <div className="flex item-center p-2 text-gray-400  hover:text-white hover:cursor-pointer ">
        <AiOutlineHome size={20}  />
        <h1 className="pl-2 font-semibold  ">Home</h1>
      </div>
      <div className="flex item-center p-2 text-gray-400 hover:text-white hover:cursor-pointer">
        <AiOutlineSearch size={25} />
        <h1 className="pl-1 font-semibold ">Search</h1>
      </div>
      <div className="flex item-center p-2 text-gray-400 hover:text-white hover:cursor-pointer">
        <VscLibrary size={20} />
        <h1 className="pl-2 font-semibold">Your Library</h1>
      </div>
      <div className="flex item-center p-2 mt-4 text-gray-400 hover:text-white hover:cursor-pointer">
        <BsPlusSquareFill size={20} />
        <h1 className="pl-2 font-semibold ">Created Playlist</h1>
      </div>
      <div className="flex item-center p-2 text-gray-400 hover:text-white hover:cursor-pointer">
        <BiHeartSquare size={25}  className='text-purple-300 hover:text-white'/>
        <h1 className="pl-2 font-semibold  ">Liked Songs</h1>
      </div>
      <div className="flex item-center p-2 text-gray-400 hover:text-white hover:cursor-pointer">
        <GrSpotify size={20} className='text-green-600' />
        <h1 className="pl-2 font-semibold ">Your Episodes</h1>
      </div>
      <hr className="mx-4 mt-4" />
    </div>
  );
}

export default SideBar;
