import React, { useEffect, useState } from 'react'
import { useAnimate, stagger, motion, animate } from "framer-motion";
import {useGSAP} from '@gsap/react'
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import gsap from 'gsap';


const Navbar = () => {


    
  const [open, setOpen] = useState(false);
  const staggerList = stagger(0.1, { startDelay: 0.25 });



  
  useGSAP(() => {
    gsap.to("#text", {
      width: open ? "100vw" : 0,
      height: open ? "100vh" : 0,
      opacity: open ? 1 : 0,
      duration: 0.5,
      ease: "power2.out"
    });
    gsap.to("#nav, #icon", {
      opacity: open ? 1 : 0,
      scale: open ? 1 : 0,
      duration: 0.5,
      delay: open ? staggerList : 0,
      ease: "power2.out"
    });
  }, [open]);

useGSAP(() => {
  gsap.fromTo('#Nav', { 
    y: -300,
    delay: 0.5,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    ease: 'power4.out'
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.5,
    duration: 2,
    ease: 'power4.out'
    
  });
  
})


  return (
<nav  id='Nav' className=' z-[99] fixed  w-full flex justify-between items-center p-[3vh] px-[10vh]   text-white bg-[#000000c0] ' >
    <h1 className=' text-xl  hover:text-gray-300  hover:cursor-pointer'>TUSHAR M.</h1>

    
    <div id='navicon' className=''>
      <div id='navicon' className=' cursor-pointer flex flex-col gap-2 z-[99]' onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} >
        <hr id='hr1' className="bg-white w-12 h-1" />
        <hr id='hr2' className="bg-white w-12 h-1" />
      </div>
      <div id='text' className='  w-full h-screen opacity-0  flex items-center justify-center flex-col absolute top-0 left-0  '>
      <div id='naviconn' className=' cursor-pointer flex flex-col gap-2 z-[99] absolute top-12 right-24' onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} >
      <img id='close' className='w-12 h-12  bg-white rounded-full' src="https://www.svgrepo.com/show/495162/close-circle.svg" alt="" />
      </div>
        <div className='flex items-center gap-5 flex-col text-7xl'>
          <div id='nav' className=' overflow-hidden flex h-20 flex-col  items-center '>
            <Link to='/ ' id='navp' >HOME</Link>
            <Link to='/' id='navp' >HOME</Link>
          </div>
          <div id='nav' className=' overflow-hidden flex h-20 flex-col  items-center '>
            <Link to='/about' id='navp' >ABOUT</Link>
            <Link to='/about' id='navp' >ABOUT</Link>
          </div>
          <div id='nav' className=' overflow-hidden flex h-20 flex-col  items-center '>
            <Link to='/project' id='navp' >PROJECT</Link>
            <Link to='/project' id='navp' >PROJECT</Link>
          </div>
          <div id='nav' className=' overflow-hidden flex h-20 flex-col  items-center '>
            <Link to='/contact' id='navp' >CONTACT</Link>
            <Link to='/contact' id='navp' >CONTACT</Link>
          </div>

        </div>
        <div id='icon' className='flex items-center gap-5 mt-20'>
          <a href='https://www.instagram.com/tushar_mohta_23/' target='_blank' className='w-20 hover:border rounded-full border-gray-300 '><img src="https://www.svgrepo.com/show/416007/instagram-internet-media.svg" alt="" /></a>
          <a href='https://x.com/TusharMohta001' target='_blank' className='w-20 hover:border rounded-full border-gray-300 '><img src="https://www.svgrepo.com/show/415994/internet-media-network-15.svg" alt="" /></a>
          <a href='https://www.linkedin.com/in/tushar-mohta-b5409733a/' target='_blank' className='w-20 hover:border rounded-full border-gray-300 '><img src="https://www.svgrepo.com/show/415997/internet-linkedin-media.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar