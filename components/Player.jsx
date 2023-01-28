import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil';
import { currentsSongIdState, isPlayingState } from '../atoms/songAtom';
import usePlayer from '../hooks/usePlayer';
import { useEffect, useState } from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import {CgInpicture} from 'react-icons/cg'

const Player = () => {
  const [currentSongId, setCurrentSongId] = useRecoilState(currentsSongIdState)
  const [isplaying,setIsPlaying] = useRecoilState(isPlayingState)
  const [volume,setVolume] = useState(50)

  const {data : session,status} = useSession();
  const spotifyApi = useSpotify();
 const songInfo =   usePlayer();

 const fetchCurrentSong = () => {
  if(!songInfo){
    spotifyApi.getMyCurrentPlayingTrack().then((data)=>{
      console.log("Now playing:", data.body?.item);
      setCurrentSongId(data.body?.item?.id);
      spotifyApi.getMyCurrentPlaybackState().then((data)=>{
        setIsPlaying(data.body?.is_playing)
      })
    })
  }
 }

 useEffect(()=>{
 if(spotifyApi.getAccessToken() && !currentSongId ){
  fetchCurrentSong();
  setVolume(50)
 }  
 },[currentSongId,session,spotifyApi])

  return (
    <div className='sticky bottom-0 h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8' >
 {/* left   */}
 <div className='flex m-3'>
  <img className='hidden md:inline h-12 w-12' src={songInfo?.album?.images?.[0]?.url} alt='song image' />
  <div className='ml-4'>

  <h1>{songInfo?.name}</h1>
  <p>{songInfo?.artists?.[0]?.name}</p>
  </div>
  <div className='flex p-4 pl-12  '>

<AiOutlineHeart className='mr-2' size={20} />
<CgInpicture size={20} />
  </div>
 </div>
  {/* center */}

    </div>
  )
}

export default Player
 