import { useRecoilValue } from "recoil"
import {  playlistState } from "../atoms/playlistAtom"
import {CiClock2 } from 'react-icons/ci'
import Song from "./Song"


const Songs = () => {
    const playlist = useRecoilValue(playlistState)
  return (
    <div>
        <div  className="flex text-white my-4 ">
        <h1 className="ml-16 w-96"># Title</h1>
        <h1 className="ml-16 w-96">ALBUM</h1>
        <h1 className=" ml-16 w-96">DATE ADDED</h1>
        <CiClock2 className="ml-16 w-96" size={25} />
        
    </div>
        <h1 className="text-white bg-black">

{playlist?.tracks?.items.map((playlistt,i)=>{
    return(
<div>
<Song key={playlistt.id} track={playlistt} order={i} />
</div>
        )
})}
</h1>
    </div>
  )
}

export default Songs
