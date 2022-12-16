import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'





const MainBar = () => {
  return (
    <div className='w-full h-screen'>
{/* Header */}
<div className='bg-black h-[418px] text-white'>
  <div className='flex p-6'>

<AiOutlineLeft size={30} className='mr-4 rounded-full '/>
<AiOutlineRight size={30} className='mr-4 rounded-full '/>
  </div>
</div>
        </div>
  )
}

export default MainBar