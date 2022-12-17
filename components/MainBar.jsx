import {useSession} from 'next-auth/react'
import {AiOutlineLeft,AiOutlineRight,AiFillCaretDown} from 'react-icons/ai'





const MainBar = () => {
  const {data:session} = useSession();
  return (
    <div className='w-full h-screen'>
{/* Header */}
<div className='bg-gradient-to-b from-black to-red-500   h-[418px] text-white flex justify-between p-6'>
  <div className='flex h-8 '>

<AiOutlineLeft size={30} className='mr-4 rounded-full '/>
<AiOutlineRight size={30} className='mr-4 rounded-full '/>
  </div>
  <div className='flex '>
    <div className='mr-4'>
      <p className='border  font-bold rounded-full p-2 py-1'>

      Upgrade
      </p>
      </div>
    <div className='flex justify-center hover:opacity-80 rounded-full  border h-8 '>
      <img className='rounded-full  mr-2 cursor-pointer' src={session?.user?.image} />
      <h1 className='cursor-pointer'>{session?.user?.name}</h1>
      <AiFillCaretDown className='cursor-pointer' size={25}/>
    </div>
  </div>
</div>
<h1 className='text-white -mt-80 ml-12 cursor-pointer hover:underline font-bold text-2xl'>Recently played</h1>
        </div>
  )
}

export default MainBar