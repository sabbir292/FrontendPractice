import React from 'react'
import img1 from '../assets/makingmusic.jpg';
import img2 from '../assets/girlinoffice.jpg';

const Card3 = () => {
    return (
        <section className="flex gap-10 relative h-fit w-full box-border max-w-[100rem] mx-auto z-[-2] overflow-hidden">
            <div className='w-full z-30 flex items-center justify-center object-cover'>
                <img src={img2} alt="" className='w-[70%] aspect-[4/3] z-20' />
                {/* <div className='bg-black w-full h-full'></div> */}
            </div>

            <div className='w-full py-8 lg:py-32 flex items-center object-cover'>
                <img src={img1} alt="" className='bg-black z-20 aspect-square' />
                {/* <div className='bg-black w-full h-full z-20'></div> */}
            </div>

            <div className='bg-bgPink absolute left-[50%] mx-[-35%] top-0 h-full w-[70%] z-[-1]'></div>
        </section>
    );
}

export default Card3