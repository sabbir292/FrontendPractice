import React from 'react'
import poster from '../assets/poster.avif'

const Poster = () => {
  return (
    <div className='w-full max-w-[100rem] bg-white mx-auto'>
    <div className='relative p-4 mx-auto w-full md:max-w-[40rem] lg:max-w-[50rem]'>
        <img src={poster} alt="" className='w-full'/>
    </div>
</div>
  )
}

export default Poster