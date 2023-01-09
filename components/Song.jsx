import React from 'react'

const Song = ({order,track}) => {

  return (
    <div className='flex'>
      <p className='m-2'>{order+1}</p>
      <img className='w-14 h-12 m-4' src={track.track.album.images[0].url} />
      <div>
      <h1 className='text-white text-xl mt-3 ml-1'>{track?.track?.name}</h1>
      <h1 className='text-xs font-thin ml-2 text-gray-400 '>{track.track.artists[0].name}</h1>
      </div>
    </div>
  )
}

export default Song
