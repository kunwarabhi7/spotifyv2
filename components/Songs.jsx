import { useRecoilValue } from "recoil"
import {  playlistState } from "../atoms/playlistAtom"
import {CiClock2 } from 'react-icons/ci'
import Song from "./Song"


const Songs = () => {
    const playlist = useRecoilValue(playlistState)
  return (
    <div>
        <div  className="flex text-white my-4 ">
        <h1 className="ml-16"># Title</h1>
        <h1 className="ml-16">ALBUM</h1>
        <h1 className="ml-16">DATE ADDED</h1>
        <CiClock2 className="ml-16" size={25} />
        
    </div>
        <h1 className="text-white bg-black">

{playlist?.tracks?.items.map((playlistt)=>{
    return(
<div>
<Song key={playlistt.track.id} track={playlistt}  />
</div>
        )
})}
</h1>
    </div>
  )
}

export default Songs
