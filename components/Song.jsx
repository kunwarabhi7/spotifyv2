import React from 'react'

const Song = ({order,track}) => {
  return (
    <div className='flex'>
      <p>{order+1}</p>
      <h1 className='text-white'>{track?.track?.name}</h1>
    </div>
  )
}

export default Song
