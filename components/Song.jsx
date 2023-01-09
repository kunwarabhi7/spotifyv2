import React from 'react'

const Song = ({order,track}) => {
const date = new Date(track.added_at)
const ReadableDate = date.toLocaleDateString({
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

  return (
    <div className='flex'>
      <p className='m-2'>{order+1}</p>
      <img className='w-14 h-12 m-4' src={track.track.album.images[0].url} />
      <div>
      <h1 className='text-white text-xl mt-3 ml-1 mr-2'>{track?.track?.name}</h1>
      <h1 className='text-xs font-thin ml-2 text-gray-400 '>{track.track.artists[0].name}</h1>
      </div>
      <h1 className='text-xs text-gray-400 mt-4 ml-4'>{track.track.album.name}</h1>
      <h1>{ReadableDate}</h1>
      <h1 className='ml-4'>{track.track.duration_ms}</h1>
    </div>
  )
}

export default Song
