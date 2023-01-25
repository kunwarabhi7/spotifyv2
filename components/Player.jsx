import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil';
import { currentsSongIdState, isPlayingState } from '../atoms/songAtom';
import usePlayer from '../hooks/usePlayer';
import { useEffect, useState } from 'react';

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
    <div className='sticky bottom-0'>
 {/* left   */}
 <div>
  <img className='hidden md:inline h-10 w-10' src={songInfo?.album?.images?.[0]?.url} alt='song image' />

 </div>
    </div>
  )
}

export default Player
 