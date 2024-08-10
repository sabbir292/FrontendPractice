import React from 'react'

const HeroText = ({heading, description}) => {
  return (
    <div className='bg-white w-full max-w-[100rem] mx-auto'>

    <div className='grid items-center justify-center gap-6 p-4 py-12 md:py-24 lg:py-32 mx-auto w-full md:max-w-[40rem] lg:max-w-[50rem'>
       
        <h1 className='text-lg lg:text-2xl font-semibold'>
        <span>
            We make
            <a href="#" className='text-textBlue'> Live, </a>
            <a href="#" className='text-textBlue'>Push, </a>
            <a href="#" className='text-textBlue'>Note </a>
            and
            <a href="#" className='text-textBlue'> Link</a>
        </span>
            {heading}
        </h1>
        <p className='text-sm lg:text-base'>{description}</p>
    </div>
    </div>
  )
}

export default HeroText