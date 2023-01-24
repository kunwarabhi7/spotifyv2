import useSpotify from '../hooks/useSpotify'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil';
import { currentsSongIdState, isPlayingState } from '../atoms/songAtom';

const Player = () => {
  const [currentSongId, setCurrentSongId] = useRecoilState(currentsSongIdState)
  const [isplaying,setIsPlaying] = useRecoilState(isPlayingState)
  const [volume,setVolume] = useState(50)

  const {data:session,status} = useSession();
  const spotifyApi = useSpotify();
  return (
    <div className='sticky bottom-0'>
      Playerrrrr
    </div>
  )
}

export default Player
 