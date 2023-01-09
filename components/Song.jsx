import React from 'react'

const Song = ({order,track}) => {

  return (
    <div className='flex'>
      <p>{order+1}</p>
      <img className='w-80 h-60' src={track.track.album.images[0].url} />
      <h1 className='text-white'>{track?.track?.name}</h1>
    </div>
  )
}

export default Song
