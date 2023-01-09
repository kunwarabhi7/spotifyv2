import {useSession} from 'next-auth/react'
import { useEffect } from 'react';
import {AiOutlineLeft,AiOutlineRight,AiFillCaretDown} from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import spotifyApi from '../utils/spotify';
import Songs from './Songs';





const MainBar = () => {
  const spotifyApi = useSpotify()
  const {data:session} = useSession();
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist,setPlaylist] = useRecoilState(playlistState)

  useEffect(()=>{
    spotifyApi.getPlaylist(playlistId).then((data)=>{
      setPlaylist(data.body)
    }).catch((err)=>{
      console.log('you have an error',err)
    })

  },[spotifyApi,playlistId])
  console.log('your playlist is' ,playlist)

  return (
    <div className='w-full h-screen overflow-y-scroll scrollbar-hide '>
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
<div className='flex'>

<img src={playlist?.images[0]?.url} className='w-64 h-48 mt-12 ml-12' />
<div>
{/* Playlist */}

<h1 className='text-white text-2xl mt-12 ml-8 '>Playlist</h1>
<h1 className='text-white text-5xl mt-4 ml-4 '>{playlist?.name}</h1>
{/* Author */}
<div>

<h1 className='text-white mt-6 ml-4 text-xl font-bold'>{playlist?.owner.display_name}.{playlist?.tracks?.items.length}songs</h1>

</div>
</div>
</div>
<Songs />
        </div>
  )
}

export default MainBar