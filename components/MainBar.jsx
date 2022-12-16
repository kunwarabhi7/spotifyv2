import React from 'react'
import {signOut} from 'next-auth/react'  






const MainBar = () => {
  return (
    <div>
      <button onClick={()=>signOut()} className='bg-black text-white p-2 m-4'>LogOut</button>
    </div>
  )
}

export default MainBar