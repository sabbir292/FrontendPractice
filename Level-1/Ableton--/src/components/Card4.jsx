import React from 'react'
import img8 from '../assets/photo-8.jpg';
const Card4 = () => {
  return (
    <section className='grid sm:grid-rows-5 lg:grid-cols-2 lg:grid-rows-1 max-w-[100rem] mx-auto px-4 md:px-16 bg-white'>
        <div className='sm:row-span-3 object-cover '>
            <img src={img8} alt="" className='w-full'/>
        </div>
        <div className='sm:row-span-2 h-full flex flex-col gap-6 justify-center bg-bgBlue p-8 md:p-16'>
            <h1 className='font-bold lg:text-lg'>
              We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
              </h1>
           
            <div className='flex items-center text-center lg:text-lg font-semibold'>
                <a href="#" className='text-textBlue pb-1'>See letest jobs</a>
                <box-icon name='chevron-right'></box-icon>
            </div>
        </div>
    </section>
  )
}

export default Card4