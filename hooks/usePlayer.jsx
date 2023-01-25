import {useEffect, useState} from 'react'
import { useRecoilState } from 'recoil'
import { currentsSongIdState } from '../atoms/songAtom'
import useSpotify from './useSpotify'


const usePlayer = () => {
    const spotifyApi = useSpotify();
    const[currentSongId,setCurrentSongId]= useRecoilState(currentsSongIdState)
    const [songInfo ,setSongInfo]  = useState(null)

    useEffect(()=>{
const fetchSongInfo = async () =>{
    if(currentSongId){
        const trackInfo = await fetch(
            `https://api.spotify.com/v1/tracks/${currentSongId}`,
            {
                headers:{
                    Authorization : `Bearer ${spotifyApi.getAccessToken()}`,
                }
            }
        ).then((res)=>res.json());
        setSongInfo(trackInfo)
    }
};fetchSongInfo();
    },[currentSongId,spotifyApi])

  return     songInfo;
  
}

export default usePlayer
