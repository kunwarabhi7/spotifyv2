import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil';
import { currentsSongIdState, isPlayingState } from '../atoms/songAtom';
import usePlayer from '../hooks/usePlayer';
import { useState } from 'react';

const Player = () => {
  const [currentSongId, setCurrentSongId] = useRecoilState(currentsSongIdState)
  const [isplaying,setIsPlaying] = useRecoilState(isPlayingState)
  const [volume,setVolume] = useState(50)

  const {data : session,status} = useSession();
  const spotifyApi = useSpotify();
 const songInfo =   usePlayer();
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
 