import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil';
import { currentsSongIdState, isPlayingState } from '../atoms/songAtom';
import usePlayer from '../hooks/usePlayer';
import { useEffect, useState } from 'react';
import {AiOutlineHeart, AiOutlinePauseCircle} from 'react-icons/ai'
import {CgInpicture} from 'react-icons/cg'
import {RxShuffle} from 'react-icons/rx'
import {FaRegPlayCircle} from 'react-icons/fa'
import {BiRepeat} from 'react-icons/bi'
import {BsVolumeUpFill,BsVolumeDownFill} from 'react-icons/bs'
import {GiPreviousButton,GiNextButton,} from 'react-icons/gi'

const Player = () => {
  const [currentSongId, setCurrentSongId] = useRecoilState(currentsSongIdState)
  const [isplaying,setIsPlaying] = useRecoilState(isPlayingState)
  const [volume,setVolume] = useState(100)

  const {data : session,status} = useSession();
  const spotifyApi = useSpotify();
 const songInfo =   usePlayer();

 console.log('hey')

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

 const playPause = () =>{
  spotifyApi.getMyCurrentPlaybackState().then((data)=>{
    if(data.body.is_playing){
      spotifyApi.pause();
      setIsPlaying(false);
    }
    else{
      spotifyApi.play();
      setIsPlaying(true);
    }
  })
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
<div className='flex justify-center p-4  '>
  <div className='flex'>

  <RxShuffle size={25} className='mr-8 hover:scale-125 cursor-pointer transition transform duration-100 ease-out'/>
  <GiPreviousButton onClick={()=> spotifyApi.skipToPrevious()} size={25} className='mr-8 hover:scale-125 cursor-pointer transition transform duration-100 ease-out'/>
  {
    isplaying ? 
    (<AiOutlinePauseCircle onClick={playPause} size={35} className=' -mt-2 mr-8 hover:scale-125 cursor-pointer transition transform duration-100 ease-out' />) :
    (<FaRegPlayCircle onClick={playPause} size={35} className=' mr-8 -mt-2 hover:scale-125 cursor-pointer transition transform duration-100 ease-out' />)  
  }
  
  <GiNextButton onClick={()=>spotifyApi.skipToNext()} size={25} className='mr-8  hover:scale-125 cursor-pointer transition transform duration-100 ease-out'/>
  <BiRepeat size={25} className='hover:scale-125 cursor-pointer transition transform duration-100 ease-out' />
  </div>
  <input type="range" className='mt-8 w-96 -ml-80'/>

</div>
 {/* Right */}
 <div className='flex justify-end items-center'>
  <BsVolumeDownFill onClick={()=>volume>0 && setVolume(volume-10)} size={20} />
  <input value={volume} className='bg-green-600' onChange={e=>setVolume(Number(e.target.value))} className='w-14 md:w-28' type="range" min={0} max={100} />
  <BsVolumeUpFill onClick={()=>volume<100 && setVolume(volume+10)} size={20} />
 </div>

    </div>
  )
}

export default Player
 