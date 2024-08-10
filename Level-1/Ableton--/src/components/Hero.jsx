import React from 'react';
import banner1 from '../assets/header.avif';

const Hero = () => {
  return (
    <div className="bg-white relative w-full h-screen flex justify-center items-center max-w-[100rem] mx-auto">
      <img src={banner1} alt="Banner" className="absolute w-full h-full object-cover p-4 md:p-16" />
      <h1 className="z-10 text-6xl lg:text-8xl text-textOrange font-semibold text-center">Ableton</h1>
    </div>
  );
};

export default Hero;