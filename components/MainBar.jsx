import React from 'react'
import {AiOutlineLeft,AiOutlineRight,AiFillCaretDown} from 'react-icons/ai'





const MainBar = () => {
  return (
    <div className='w-full h-screen'>
{/* Header */}
<div className='bg-black h-[418px] text-white flex justify-between p-6'>
  <div className='flex '>

<AiOutlineLeft size={30} className='mr-4 rounded-full '/>
<AiOutlineRight size={30} className='mr-4 rounded-full '/>
  </div>
  <div className='flex '>
    <div className='mr-16'>
      <p className='border  font-bold rounded-full p-2 py-1'>

      Upgrade
      </p>
      </div>
    <div className='flex'>
      <img className='rounded-full' src='https://pbs.twimg.com/profile_images/1595798078535372801/BycSog3B_400x400.jpg' />
      <h1>Name</h1>
      <AiFillCaretDown />
    </div>
  </div>
</div>
        </div>
  )
}

export default MainBar