import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'





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
    <div className='mr-4'>Upgrade</div>
    <div>Name</div>
  </div>
</div>
        </div>
  )
}

export default MainBar