import React from 'react'
import {AiOutlineLeft,AiOutlineRight,AiFillCaretDown} from 'react-icons/ai'





const MainBar = () => {
  return (
    <div className='w-full h-screen'>
{/* Header */}
<div className='bg-black h-[418px] text-white flex justify-between p-6'>
  <div className='flex h-12 '>

<AiOutlineLeft size={30} className='mr-4 rounded-full '/>
<AiOutlineRight size={30} className='mr-4 rounded-full '/>
  </div>
  <div className='flex '>
    <div className='mr-8'>
      <p className='border  font-bold rounded-full p-2 py-1'>

      Upgrade
      </p>
      </div>
    <div className='flex justify-center '>
      <img className='rounded-full w-12 h-12 mr-2' src='https://pbs.twimg.com/profile_images/1595798078535372801/BycSog3B_400x400.jpg' />
      <h1>Abhishek</h1>
      <AiFillCaretDown size={25}/>
    </div>
  </div>
</div>
        </div>
  )
}

export default MainBar