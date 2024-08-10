import React from 'react';
import img1 from '../assets/photo-1.jpg';
import img2 from '../assets/photo-2.jpg';

const Card1 = () => {
  return (
    <section className="flex relative h-fit w-full box-border max-w-[100rem] mx-auto z-10 object-cover bg-white">
       <div className='w-full pl-4 md:pl-16 py-4 md:py-16 flex items-center object-cover'>
        <img src={img1} alt="" className='w-full object-cover bg-black z-20 aspect-square'/>
        {/* <div className='bg-black w-full h-full z-20'></div> */}
       </div>
       <div className='bg-bgYello w-full z-30 flex items-center justify-center object-cover px-4 md:px-16'>
        <img src={img2} alt="" className='w-full aspect-[4/3] z-20'/>
        {/* <div className='bg-black w-full h-full'></div> */}
       </div>
       <div className='bg-bgYello absolute right-0 h-full w-3/5 z-[-1]'></div>
    </section>
  );
};

export default Card1;