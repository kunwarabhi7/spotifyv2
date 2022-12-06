import {getProviders,signIn} from 'next-auth/react'
import {BsSpotify} from 'react-icons/bs'

const login = ({providers}) => {
  return (
    <div className=' bg-black text-green-500 h-screen'>
      <div className='pt-20 flex justify-center '>
      <BsSpotify size={40}  />
      <h1 className='text-3xl font-bold text-white'>Spotify</h1>
      
    </div>
      <hr className='text-black my-16 bg-black  text-4xl'/>
{Object.values(providers).map((provider)=>(
  <div key={provider.name} className='text-center text-4xl mt-48'>
   <button className='text-green-400'> Login With {provider.name}</button>
    </div>
))}
    </div>
  )
}

export default login

export async function getServerSideProps(){
  const providers = await getProviders();
  return {
    props:{
      providers,
    }
  }
}