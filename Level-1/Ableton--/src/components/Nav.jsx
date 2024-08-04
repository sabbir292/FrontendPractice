import React, { useCallback, useEffect, useState } from 'react';
import '../index.css';
import 'boxicons';
import logo from '../assets/logo.png';

const Nav = () => {
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);
  // const [isSmallScreen, setIsSmallScreen] = useState(false)

  // const checkScreenSize = useCallback(()=>{
  //   setIsSmallScreen(window.innerWidth < 1024)
  // }, [])

  // useEffect(()=> {
  //   checkScreenSize()
  //   window.addEventListener('resize', checkScreenSize)
  //   return window.addEventListener('resize', checkScreenSize)
  // },[checkScreenSize])

  // const toggleMenu = () => {
  //   console.log(window.innerWidth)
  //   if(isSmallScreen){
  //     setIsMenubarOpen(!isMenubarOpen);
  //   }
  // };
  const toggleMenu = () => {
    setIsMenubarOpen(!isMenubarOpen); 
  };

  return (
    <nav className={`relative p-4 max-w-[100rem] mx-auto xl:px-10 lg:font-semibold xl:font-bold lg:flex lg:justify-between lg:items-center ${!isMenubarOpen ? 'border-b-2 bg-slate-100' : ''}`}>

      <div className='flex items-center gap-4 lg:gap-12'>
        <div className='h-12 w-12'>
          <img src={logo} alt="Ableton" />
        </div>
        <div className='flex gap-4'>
          <div className='flex gap-2 relative lg:hidden' onClick={toggleMenu}>
            <h3 className={`${isMenubarOpen ? 'text-white' : 'text-black'}`}>Menu</h3>
            {
              !isMenubarOpen ? (
                <box-icon size="8px" type='solid' name='down-arrow'></box-icon>
              ) : (
                <box-icon size="8px" type='solid' color='white' name='up-arrow'></box-icon>
              )
            }
          </div>
          {/* menu links for sm & md */}
          <div className={`absolute grid lg:hidden gap-2 left-0 top-0 p-4 z-[-1] bg-textBlue text-white font-semibold w-full transition-all  duration-700 ease-in-out ${isMenubarOpen ? 'max-h-screen pt-20 opacity-100' : 'max-h-0 pt-0 opacity-0'}`}>
            <ul className='grid gap-2'>
              <li><a href="#">Live</a></li>
              <li><a href="#">Push</a></li>
              <li><a href="#">Note</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Packs</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">More</a></li>
            </ul>
            <ul>
              <li><a href="#">Try Live 12 for free</a></li>
              <li><a href="#">Log in or register</a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>

          {/* menu links lg */}
          <ul className='hidden lg:flex gap-6 xl:gap-8'>
            <li><a href="#">Live</a></li>
            <li><a href="#">Push</a></li>
            <li><a href="#">Note</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Packs</a></li>
            <li><a href="#">Help</a></li>
            <li className='text-textOrange'><a href="#">More +</a></li>
          </ul>
        </div>
      </div>
      
      {/* right menu links lg */}
      <div className='hidden lg:flex'>
        <ul className='lg:flex gap-6 xl-gap-8 items-center'>
          <li className='text-textBlue'><a href="#">Try Live 12 for free</a></li>
          <li className='text-sm font-semibold'><a href="#">Log in or register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
