import React, { useCallback, useEffect, useState } from 'react';
import '../index.css';
import 'boxicons';
import logo from '../assets/logo.png';
import DynamicNav from './DynamicNav';

const navData = [
    {
      title: "More on Ableton.com",
      type: "links",
      items: [
        { name: "Blog", url: "#blog" },
        { name: "Ableton for the Classroom", url: "#classroom" },
        { name: "Ableton for Colleges and Universities", url: "#universities" },
        { name: "Certified Training", url: "#training" },
        { name: "About Ableton", url: "#about" },
        { name: "Jobs", url: "#jobs" },
        { name: "Apprenticeships", url: "#apprenticeships" }
      ]
    },
    {
      title: "More from Ableton",
      type: "featured",
      items: [
        {
          name: "Loop",
          description: "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
          url: "#loop"
        },
        {
          name: "Learning Music",
          description: "Learn the fundamentals of music making right in your browser.",
          url: "#learning-music"
        },
        {
          name: "Learning Synths",
          description: "Get started with synthesis using a web-based synth and accompanying lessons.",
          url: "#learning-synths"
        },
        {
          name: "Making Music",
          description: "Some tips from 74 Creative Strategies for Electronic Producers.",
          url: "#making-music"
        }
      ]
    }
  ]


const Nav = () => {
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);
  const [isMoreMenubarOpen, setIsMoreMenubarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenubarOpen(!isMenubarOpen); 
  };
  const toggleMoreMenu = () => {
    setIsMoreMenubarOpen(!isMoreMenubarOpen); 
  };

  return (
    <header className={`lg:border-b-2 max-w-[100rem] mx-auto ${!isMenubarOpen ? 'border-b-2 bg-slate-100' : ''}`}>

    <nav className={`relative p-4 xl:px-10 lg:font-semibold xl:font-bold lg:flex lg:justify-between lg:items-center`}>

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
          <div className={`absolute top-0 left-0 pt-20 p-4 w-full h-fit bg-textBlue text-white font-semibold transition-transform duration-500 ease-in-out z-[-1] lg:hidden
          ${isMenubarOpen ? 'translate-y-0' : '-translate-y-full'}`}
          >
            <ul className='grid gap-2'>
              <li><a href="#">Live</a></li>
              <li><a href="#">Push</a></li>
              <li><a href="#">Note</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Packs</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">More +</a></li>
            </ul>
            <ul className='py-6'>
              <li><a href="#">Try Live 12 for free</a></li>
              <li className='font-normal'><a href="#">Log in or register</a></li>
            </ul>
              <DynamicNav navData = {navData} />
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
            <li onClick={toggleMoreMenu} className='text-textOrange'><a href="#">More +</a></li>
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
    <nav className='hidden lg:flex'>
      {
        isMoreMenubarOpen && <DynamicNav navData={navData}/>
      }
    </nav>
  </header>
  );
};

export default Nav;


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