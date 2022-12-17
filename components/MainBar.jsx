import {useSession} from 'next-auth/react'
import {AiOutlineLeft,AiOutlineRight,AiFillCaretDown} from 'react-icons/ai'





const MainBar = () => {
  const {data:session} = useSession();
  return (
    <div className='w-full h-screen'>
{/* Header */}
<div className='bg-black h-[418px] text-white flex justify-between p-6'>
  <div className='flex h-8 '>

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
      <img className='rounded-full w-12 h-12 mr-2' src={session?.user?.image} />
      <h1>{session?.user?.name}</h1>
      <AiFillCaretDown size={25}/>
    </div>
  </div>
</div>
<h1 className='text-white -mt-80 ml-12 cursor-pointer hover:underline text-4xl'>Recently Played</h1>
        </div>
  )
}

export default MainBar