import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'

function SideBar() {
  return (
    <div className='w-44 bg-black text-white h-screen'>
        <div className='flex item-center p-2'>

        <AiOutlineHome size={20}/>
        <h1 className='pl-2 font-semibold'>Home</h1>
        </div>
    </div>
  )
}

export default SideBar