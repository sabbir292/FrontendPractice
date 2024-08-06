import React from 'react';
import img1 from '../assets/makingmusic.jpg';
import img2 from '../assets/girlinoffice.jpg';

const Card1 = () => {
  return (
    <section className="flex relative h-fit w-full box-border max-w-[100rem] mx-auto z-[-2]">
       <div className='w-full py-12 lg:py-36 flex items-center object-cover'>
        <img src={img1} alt="" className='bg-black z-20 aspect-square'/>
        {/* <div className='bg-black w-full h-full z-20'></div> */}
       </div>
       <div className='bg-bgYello w-full z-30 flex items-center justify-center object-cover'>
        <img src={img2} alt="" className='w-[70%] aspect-video z-20'/>
        {/* <div className='bg-black w-full h-full'></div> */}
       </div>
       <div className='bg-bgYello absolute right-0 h-full w-3/5 z-[-1]'></div>
    </section>
  );
};

export default Card1;