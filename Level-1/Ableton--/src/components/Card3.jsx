import React from 'react'
import img6 from '../assets/photo-6.jpg';
import img7 from '../assets/photo-7.jpg';

const Card3 = () => {
    return (
        <section className="flex gap-12 md:gap-28 relative h-fit w-full box-border max-w-[100rem] mx-auto overflow-hidden py-12 md:py-24 z-10 bg-white">
            <div className='w-full z-30 flex items-center justify-center object-cover px-4 md:px-16'>
                <img src={img6} alt="" className='w-full aspect-[4/3] z-20' />
                {/* <div className='bg-black w-full h-full'></div> */}
            </div>

            <div className='w-full flex items-center object-cover'>
                <img src={img7} alt="" className='w-full bg-black z-20 aspect-square' />
                {/* <div className='bg-black w-full h-full z-20'></div> */}
            </div>

            <div className='bg-bgPink absolute left-[50%] mx-[-35%] top-0 h-full w-[70%] z-[-1]'></div>
        </section>
    );
}

export default Card3