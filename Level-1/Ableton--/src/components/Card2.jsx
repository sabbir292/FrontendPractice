import React from 'react'
import img3 from '../assets/photo-3.jpg';
import img4 from '../assets/photo-4.jpg';
import img5 from '../assets/photo-5.jpg';

const Card2 = () => {
    return (
        <section className="flex relative h-fit w-full box-border max-w-[100rem] mx-auto z-10 bg-white">
            <div className='p-4 md:p-16 w-full z-30 flex flex-col gap-4 md:gap-16 items-center justify-center object-cover'>
                <img src={img3} alt="" className='w-full aspect-[4/3] z-20' />
                <img src={img4} alt="" className='w-full aspect-[4/3] object-cover z-20' />
                {/* <div className='bg-black w-full h-full'></div> */}
            </div>

            <div className='w-full pr-4 md:pr-16 flex items-center object-cover'>
                <img src={img5} alt="" className='w-full bg-black z-20 aspect-square' />
                {/* <div className='bg-black w-full h-full z-20'></div> */}
            </div>

            <div className='bg-bgGreen absolute left-0 h-full w-3/5 z-[-1]'></div>
        </section>
    );
}

export default Card2