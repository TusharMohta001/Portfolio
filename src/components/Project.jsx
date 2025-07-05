import React, { useEffect } from 'react'
import Navbar from './Navbar'
import gsap, { Expo } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Project = () => {

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll();
  // }, []);



  AOS.init({

    offset: 200,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    anchorPlacement: 'top-bottom',
    once:true
  });


  useGSAP(() => {
    gsap.fromTo('#project h1, #project p, #project button', {
      x: -300,
      delay: 0.5,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: 'power3.in'
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power3.in'
    });
  })



  gsap.registerPlugin(ScrollTrigger);
  const projects = [
    {
      id: "project1",
      title: "E-commerce Website",
      description: "I created a modern and responsive e-commerce website using HTML, CSS, and JavaScript, featuring user authentication, product management, and a shopping cart system. The site offers a clean UI, smooth user experience, and is fully functional for basic online shopping needs.",
      video: "./src/videos/ecommerce.mp4",
      image: "./src/images/p1.png",
      website: "hidden",
      code: "hidden"
    },
    {
      id: "project2",
      title: "Thirty Six Studio Clone",
      description: "Thirty Six Studio Clone is a unique and modern web project built using React.js, GSAP, Lenis, and ScrollTrigger. It features smooth scroll animations, interactive click effects, and sleek transitions for a high-end user experience. Inspired by the original Thirty Six Studio site, this clone focuses on clean design, fluid motion, and creative UI/UX. The combination of advanced animations and responsive design makes it a standout frontend project.",
      video: "./src/videos/thirty.mp4",
      image: "./src/images/p1.png",
      Flex: " flex-row-reverse",

      website: "hidden",
      code: "hidden"
    },
    {
      id: "project3",
      title: "Watch Brand Website",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      video: "./src/videos/watch.mp4",
      image: "./src/images/p2.png",
      website: "https://brandwatch1.netlify.app",
      code: "hidden"
    },
    {
      id: "project4",
      title: "Cyber Punk Game Clone",
      description: "This project utilizes Three.js, GSAP, and Lenis to craft a unique, responsive web experience. It features interactive 3D visuals, smooth animations, and enhanced scrolling for seamless navigation. Designed for all devices, it blends creativity with cutting-edge technologies to deliver a stunning and engaging interface.",
      video: "./src/videos/three.mp4",
      image: "./src/images/p3.png",
      Flex: " flex-row-reverse",
      website: "https://theejsproject.netlify.app",
      code: "https://github.com/TusharMohta001/Three.js-Project"
    },
    {
      id: "project5",
      title: "Thomas Vance Website",
      description: "About Thomas Vance is a modern and visually captivating website project designed to showcase creativity and innovation in web design. Built using HTML, CSS, and JavaScript, this project incorporates advanced web animations and styling frameworks to create a seamless and dynamic user experience.",
      video: "./src/videos/vance.mp4",
      image: "./src/images/p4.png",
      website: "https://vancethomas.netlify.app",
      code: "https://github.com/TusharMohta001/ThomasVance?tab=readme-ov-file"
    },
    {
      id: "project6",
      title: "Password Manager ",
      description: "A secure and user-friendly password manager built with React.js and styled using Tailwind CSS. It stores and organizes passwords locally using browser-based LocalStorage, ensuring data privacy. Features include easy password generation, quick search, and an intuitive interface for managing credentials effortlessly and securely, all without external dependencies.",
      video: "./src/videos/password manager.mp4",
      image: "./src/images/p4.png",
      website: "hidden",
      Flex: " flex-row-reverse",

      code: "hidden"
    },

  ];



  return (
    <>
      {/* <svg className="BgAnimation__svg  absolute z-[9] " viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.15"><path fill-rule="evenodd" clip-rule="evenodd" d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z" stroke="url(#paint0_radial)" id="path_0"></path><path d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z" stroke="url(#paint1_radial)" id="path_1"></path><path d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z" stroke="url(#paint2_radial)" id="path_2"></path></g><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint3_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></path><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#46737"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint7_linear)"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint4_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="382.164" cy="155.029" rx="1.07433" ry="1.07306" transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)" fill="#F46737"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M381.81 154.669L356.057 128.885" transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)" stroke="url(#paint5_linear)"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="333.324" cy="382.691" rx="1.07306" ry="1.07433" transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)" fill="#F46737"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_1"></mpath></animateMotion></ellipse><path d="M333.667 382.335L359.42 356.551" transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)" stroke="url(#paint6_linear)"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_1"></mpath></animateMotion></path><ellipse cx="165.524" cy="93.9596" rx="1.07306" ry="1.07433" transform="translate(-165.524 -93.9596)" fill="#F46737"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M165.182 94.3159L139.429 120.1" transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)" stroke="url(#paint7_linear)"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#13ADC7"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint11_linear)"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear" x1="382.168" y1="155.027" x2="357.1" y2="129.989" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint6_linear" x1="333.309" y1="382.693" x2="358.376" y2="357.655" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint7_linear" x1="165.54" y1="93.9578" x2="140.472" y2="118.996" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint8_linear" x1="414.367" y1="301.156" x2="439.435" y2="276.118" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint9_linear" x1="515.943" y1="288.238" x2="541.339" y2="291.454" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint10_linear" x1="117.001" y1="230.619" x2="117.36" y2="258.193" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient></defs></svg> */}
      <div className='page  w-full '>
        <Navbar />

        <div id='project' className='relative bg-black w-full py-40 px-10 min-h-[90vh]'>
          <h1 className='text-white text-[3.8vw]  leading-[1.2] inline '>My Project:- </h1>
          <p id='projecp' className='text-white text-[2.2vw] mt-2 leading-[1.2]  text-justify inline '> Explore a curated showcase of my most impactful projects. Each creation reflects my dedication to quality, innovative thinking, and the passion that fuels my work. From concept to execution, these projects highlight my ability to transform ideas into reality through skill, creativity, and commitment.</p>
          <div id='project-text' className=' text-[#bfbfbf9e] mt-20 w-[74%] px-40 float-end text-justify'>
            <p className=' text-[1.4vw] ' >  My projects showcases the exceptional work that I have delivered. Have a look into my portfolio, highlighting the diverse range of projects for various industries. Most of my projects are under no disclosure agreements which means I can only share here a few. </p>
            <button onClick={() => window.location.href = '/contact'} className=' p-2 border-4 text-xl mt-20 px-16 hover:bg-white hover:text-black hover:border-blue-500 transition-all duration-100 ease-in-out '>Contact &#x2192;</button>
          </div>
        </div>

        {projects.map((project, index) => (
          <div key={index} id='poro' className={` h-[90vh] flex ${project.Flex}  justify-between px-[5vw] text-white`} onMouseEnter={() => document.getElementById(`video-${index}`).play()} onMouseLeave={() => document.getElementById(`video-${index}`).pause()}>
            <div id='pote' className='w-[45%]'>
              <div className='w-full h-full flex justify-center flex-col'>
                <h4 className='text-[3vw] mb-[20px] font-bold'>👉🏻 {project.title}</h4>
                <p className='text-lg mb-10'>{project.description}</p>
                <div className='w-full flex items-center gap-3 py-2'>
                  <button onClick={() => window.location.href = project.website} className={`py-2 px-5 border-4 text-xl font-semibold hover:bg-white hover:text-black hover:border-blue-500 transition-all duration-300 ease-in-out ${project.website}`}>Visit Website</button>
                  <button onClick={() => window.location.href = project.code} className={`py-2 px-5 border-4 text-xl font-semibold hover:bg-white hover:text-black hover:border-blue-500 transition-all duration-300 ease-in-out ${project.code} `}>View Code</button>
                </div>
              </div>
            </div>
             
            <div id='povi' className='w-[45%]  h-full flex justify-end items-center'>
              <div className='w-[100%] h-[50%] hover:scale-105 transition-transform duration-500 ease-in-out'>
                <div className=' relative border-2'>
                <video id={`video-${index}`} src={project.video} loop muted className='w-full h-full object-cover '></video>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Footer/>

      </div>
    </>

  )
}

export default Project