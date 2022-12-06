import {getProviders,signIn} from 'next-auth/react'
import {BsSpotify} from 'react-icons/bs'

const login = ({providers}) => {
  return (
    <div className='mt-20'>
      <div className='flex justify-center '>
      <BsSpotify size={40} />
      <h1 className='text-3xl font-bold'>Spotify</h1>
      
    </div>
      <hr className='text-black my-16 bg-black  text-4xl'/>
{Object.values(providers).map((provider)=>(
  <div className='text-center text-4xl'>Login With {provider.name}</div>
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