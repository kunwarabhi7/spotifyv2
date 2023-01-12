import React from 'react'
import time from './time'

const Song = ({order,track}) => {
const date = new Date(track.added_at)
const ReadableDate = date.toLocaleDateString({
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

  return (
    <div className='flex'>
      <p className='m-2 '>{order+1}</p>
      <img className='w-14 h-12 m-4' src={track?.track?.album?.images[0].url} />
      <div>
      <h1 className='text-white text-xl mt-3 ml-1 mr-2 w-36 lg:w-64 truncate'>{track?.track?.name}</h1>
      <h1 className='text-xs  ml-2 text-gray-400 '>{track?.track?.artists[0]?.name}</h1>
      </div>
      <h1 className=' text-gray-400 mt-4 w-36 lg:w-64 ml-4'>{track?.track?.album?.name}</h1>
      <h1 className='w-32 lg:w-64 ml-32'>{ReadableDate}</h1>
      <h1 className='ml-64 w-36 lg:w-64 '>{time(track?.track?.duration_ms)}</h1>
    </div>
  )
}

export default Song
