import { useRecoilValue } from "recoil"
import {  playlistState } from "../atoms/playlistAtom"


const Songs = () => {
    const playlist = useRecoilValue(playlistState)
  return (
    <div>
        <h1>Songs</h1>
        <h1 className="text-white bg-black">

{playlist?.tracks?.items.map((playlistt)=>{
    return(
<div>
    {playlistt.track.name}

</div>
        )
})}
</h1>
    </div>
  )
}

export default Songs
