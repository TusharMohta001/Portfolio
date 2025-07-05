import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import gsap from 'gsap';
import Navbar from './Navbar';
import { ScrollTrigger } from 'gsap/all';
import React from "react";
import Cas from './Cas';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';
import { Link } from 'react-router-dom';



const Home = () => {

  AOS.init({

    offset: 200,
    duration: 1000,
    easing: 'ease',
    anchorPlacement: 'top-bottom',
    once: true
  });

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    gsap.fromTo('.textt h2 , .textt h1 , .textt p , .textt button', {
      opacity: 0,
      x: -300,
      delay: 0.5,
      duration: 2,
      ease: 'power4.out',
      stagger: 0.1
    }, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: 'power4.out',
      stagger: 0.1
    });
    gsap.fromTo('.img ', {
      opacity: 0,
      x: 300,
      delay: 0.5,
      duration: 2,
      ease: 'power4.out',
    }, {
      opacity: 1,
      x: 0,
      duration: 2,
      ease: 'power4.out',
    });
  })



  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const handleClick = () => {
    window.location.href = ("/contact");
  };
  const projects = [
    {
      id: "project1",
      title: "E-commerce Website",
      description: "I created a modern and responsive e-commerce website using HTML, CSS, and JavaScript, featuring user authentication, product management, and a shopping cart system. The site offers a clean UI, smooth user experience, and is fully functional for basic online shopping needs.",
      video: "./src/videos/ecommerce.mp4",
      image: "./src/images/p5.png",
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
  
  ];



  return (

    <div className='full page bg-black text-white overflow-hidden relative' >




      {/* <svg className="BgAnimation__svg  absolute z-[9] " viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.15"><path fill-rule="evenodd" clip-rule="evenodd" d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z" stroke="url(#paint0_radial)" id="path_0"></path><path d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z" stroke="url(#paint1_radial)" id="path_1"></path><path d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z" stroke="url(#paint2_radial)" id="path_2"></path></g><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint3_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></path><ellipse cx="295.027" cy="193.118" transform="translate(-295.027 -193.118)" rx="1.07306" ry="1.07433" fill="#46737"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></ellipse><path d="M294.685 193.474L268.932 219.258" transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)" stroke="url(#paint7_linear)"><animateMotion dur="5s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_2"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#945DD6"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint4_linear)"><animateMotion dur="10s" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="382.164" cy="155.029" rx="1.07433" ry="1.07306" transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)" fill="#F46737"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M381.81 154.669L356.057 128.885" transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)" stroke="url(#paint5_linear)"><animateMotion dur="10s" begin="1" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="333.324" cy="382.691" rx="1.07306" ry="1.07433" transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)" fill="#F46737"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_1"></mpath></animateMotion></ellipse><path d="M333.667 382.335L359.42 356.551" transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)" stroke="url(#paint6_linear)"><animateMotion dur="5s" begin="0" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_1"></mpath></animateMotion></path><ellipse cx="165.524" cy="93.9596" rx="1.07306" ry="1.07433" transform="translate(-165.524 -93.9596)" fill="#F46737"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M165.182 94.3159L139.429 120.1" transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)" stroke="url(#paint7_linear)"><animateMotion dur="10s" begin="3" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><ellipse cx="476.525" cy="363.313" rx="1.07433" ry="1.07306" transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)" fill="#13ADC7"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></ellipse><path d="M476.171 362.952L450.417 337.168" transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)" stroke="url(#paint11_linear)"><animateMotion dur="12s" begin="4" repeatCount="indefinite" rotate="auto"><mpath xlink:href="#path_0"></mpath></animateMotion></path><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301 301) rotate(90) scale(300)"><stop offset="0.333333" stop-color="#FBFBFB"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><linearGradient id="paint3_linear" x1="295.043" y1="193.116" x2="269.975" y2="218.154" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint5_linear" x1="382.168" y1="155.027" x2="357.1" y2="129.989" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint6_linear" x1="333.309" y1="382.693" x2="358.376" y2="357.655" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint7_linear" x1="165.54" y1="93.9578" x2="140.472" y2="118.996" gradientUnits="userSpaceOnUse"><stop stop-color="#F46737"></stop><stop offset="1" stop-color="#F46737" stop-opacity="0"></stop></linearGradient><linearGradient id="paint8_linear" x1="414.367" y1="301.156" x2="439.435" y2="276.118" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint9_linear" x1="515.943" y1="288.238" x2="541.339" y2="291.454" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient><linearGradient id="paint10_linear" x1="117.001" y1="230.619" x2="117.36" y2="258.193" gradientUnits="userSpaceOnUse"><stop stop-color="#945DD6"></stop><stop offset="1" stop-color="#945DD6" stop-opacity="0"></stop></linearGradient><linearGradient id="paint11_linear" x1="476.529" y1="363.31" x2="451.461" y2="338.272" gradientUnits="userSpaceOnUse"><stop stop-color="#13ADC7"></stop><stop offset="1" stop-color="#13ADC7" stop-opacity="0"></stop></linearGradient></defs></svg> */}
      <Navbar />
      <div className='main'>

        <div id='Home' className='w-full min-h-[50vw] bg-black pt-[9vh] px-[10vh]'>
          <div id='home' className='home flex items-center'>

            <div className='textt text-white w-[50%]'>
              <h2 className=' text-4xl mb-2 '>Hello, I am</h2>
              <h1 className='text-white text-[5vw] mb-10'> Tushar Mohta</h1>
              <p id='homep' className=' text-[1.3vw] text-gray-300 font-thin '>I am a dedicated
                <span className=' text-[1.8vw] text-blue-300'> Web Developer  </span>  &<span className=' text-[1.8vw] text-blue-300'> UI/UX Designer </span> specializing in front-end development and interactive animation websites. I craft scalable, visually compelling designs that deliver seamless user experiences and innovative digital solutions.</p>
                <div id='homebtn' className='flex flex-wrap mt-20 gap-6'>
  {/* Contact Me Button - Gradient, using Link */}
  <Link to="/contact">
    <button
      className="px-14 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[1.3vw] font-semibold rounded-full shadow-md"
    >
      Contact me &#x2192;
    </button>
  </Link>

  {/* Download CV Button - Outline */}
  <a href="./src/assets/Resume.pdf" download>
    <button
      onClick={() => toast.success('Downloading...')}
      className="px-14 py-5 border-2 border-indigo-600 text-indigo-600 text-[1.3vw] font-semibold rounded-full"
    >
      Download CV
    </button>
  </a>
</div>


            </div>
            <div className='img w-[50%]  relative ml-40 flex justify-center items-center '>
              <div className="slider-thumb"></div>
              <img id='round' className=' w-[85%] rounded-3xl backgroun ' loading="lazy" src="./src/images/Tushar.png" alt="" />
            </div>

          </div>
        </div>
        <div id="Expertise" className=' px-40 w-full  ' data-aos="fade-down">
          <h1 className=' text-white text-5xl pt-20'> My Expertise</h1>
          <div className='boox flex flex-wrap justify-center gap-10 mt-20 pb-20 '>
            <div id='box' className='w-[30%] p-10 border-2 cursor-pointer relative border-blue-700 rounded-lg shadow-lg '>
              <svg fill="#4882C3" className=' w-20 mb-6 bg-white p-3 rounded-lg' height="70px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 426.822 426.822" xmlSpace="preserve" stroke="#4882C3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M379.883,416.822c0,5.523-4.477,10-10,10H184.726c-5.523,0-10-4.477-10-10s4.477-10,10-10h185.157 C375.406,406.822,379.883,411.299,379.883,416.822z M139.664,202.004c31.42-6.966,64.115,3.242,79.509,24.828 c3.208,4.497,9.452,5.542,13.948,2.335c4.496-3.207,5.542-9.452,2.335-13.948c-10.29-14.427-25.831-25.084-44.945-30.818 c-17.497-5.25-37.093-5.932-55.176-1.922c-34.718,7.698-58.89,30.899-64.66,62.061L47.106,371.773 c-0.542,2.921,0.245,6.046,2.145,8.33s4.717,3.719,7.688,3.719h83.973c5.523,0,10-4.477,10-10s-4.477-10-10-10H68.961L90.34,248.295 C96.481,215.127,126.88,204.839,139.664,202.004z M366.411,377.822c0,5.523-4.477,10-10,10h-159c-5.523,0-10-4.477-10-10v-106 c0-5.523,4.477-10,10-10h159c5.523,0,10,4.477,10,10V377.822z M207.411,367.822h139v-86h-139V367.822z M109.581,137.951 c-11.371-11.804-24.635-33.626-23.253-70.552c1.489-39.848,30.813-61.436,60.931-66.606c1.7-0.292,13.838-0.992,16.41-0.738 c1.957,0.193,10.707,1.424,10.962,1.502c28.717,6.297,55.65,27.699,57.077,65.844c1.381,36.926-11.883,58.748-23.254,70.552 c-13.183,13.685-30.74,21.222-49.437,21.222S122.763,151.636,109.581,137.951z M210.625,88.283c-4.007,0.729-8.04,1.11-12.056,1.11 c-16.147,0-32.005-5.814-44.69-16.736c-1.313,1.134-2.654,2.236-4.051,3.271c-11.895,8.815-26.138,13.447-40.602,13.447 c-0.55,0-1.102-0.033-1.652-0.046c2.384,14.126,7.92,25.933,16.411,34.747c9.378,9.736,21.819,15.098,35.032,15.098 s25.654-5.362,35.033-15.098C202.749,115.045,208.342,102.871,210.625,88.283z M180.146,23.974 c-2.307,12.66-6.746,24.035-13.099,33.641c12.452,10.626,29.124,14.353,44.636,9.916C210.6,44.833,197.037,30.601,180.146,23.974z M106.292,69.283c11.209,0.688,22.41-2.592,31.629-9.424c11.787-8.735,19.655-22.795,22.677-40.152 c-0.527-0.034-4.809,0.096-6.42,0.277c-22.526,2.529-44.287,16.451-47.501,43.465C106.497,64.973,106.303,68.902,106.292,69.283z M266.687,302.284c-3.448-4.315-9.74-5.018-14.055-1.57l-20.528,16.402c-2.375,1.897-3.758,4.772-3.758,7.813 s1.383,5.915,3.758,7.813l20.528,16.403c1.843,1.473,4.047,2.188,6.236,2.188c2.936,0,5.844-1.287,7.819-3.758 c3.447-4.314,2.745-10.607-1.57-14.055l-10.75-8.59l10.75-8.589C269.431,312.892,270.134,306.599,266.687,302.284z M322.51,317.116 l-20.528-16.402c-4.314-3.447-10.607-2.745-14.055,1.57c-3.447,4.315-2.745,10.607,1.57,14.055l10.75,8.589l-10.75,8.59 c-4.315,3.448-5.018,9.74-1.57,14.055c1.975,2.472,4.883,3.758,7.819,3.758c2.189,0,4.393-0.716,6.236-2.188l20.528-16.403 c2.375-1.898,3.758-4.772,3.758-7.813S324.885,319.013,322.51,317.116z"></path> </g></svg>
              <h2 className='text-white text-4xl mb-4'>Web Development</h2>
              <p className='text-gray-400 text-2xl '>I am a skilled web developer specializing in both front-end and back-end development, with my primary expertise in front-end technologies. I build dynamic, responsive, and user-friendly websites that align with modern web standards.</p>
            </div>
            <div id='box' className='w-[30%] p-10 border-2 cursor-pointer border-blue-700 rounded-lg shadow-lg '>
              <svg viewBox="0 0 512 512" className='w-20 mb-6 bg-white p-3 rounded-lg' xmlns="http://www.w3.org/2000/svg" fill="#4882C3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4882C3" d="M177.438 17.625c-36.363 63.13-6.562 132.455 51.593 167.906 73.338 44.71 85.25 182.336 197.44 180.032 18.768 37.002 32.436 74.428 42 113.844L486.624 475c-7.386-30.444-17.18-59.834-29.75-88.72 19.49-32.138 28.49-64.438 35.938-96.75L477.5 306.657c1.212-13.487.876-26.89-.688-41l-13.625 26.938c2.42-20.608 3.05-39.98 3.875-59.5l-19.53 33.97c-2.876-17.033-6.577-33.074-10.188-49.252l-8.25 30.97C371.358 118 210.67 101.476 177.438 17.624zM33.78 106c-83.367 187.217 151.31 342.733 292.44 323.47 29.146 16.715 54.977 35.964 78.905 58.436l12.78-13.625c-18.923-17.77-39.093-33.676-61-47.936-1.57-28.975-9.564-53.884-18.56-78.156l-6.22 42.843c-10.212-27.47-23.103-48.372-35.813-69.717l3.22 51.968c-9.037-24.734-22.188-45.01-36.032-64.53l5.094 42.97c-16.975-23.893-34.854-40.735-52.656-58.064l12.625 37.594C144.105 263.974 78.553 196.544 33.78 106z"></path></g></svg>
              <h2 className='text-white text-4xl mb-4'>UI/UX Design</h2>
              <p className='text-gray-400 text-2xl'>I am proficient in designing user interfaces and experiences using Figma. My designs focus on aesthetics, usability, and creating an intuitive flow that elevates the user's interaction with the website.</p>
            </div>
            <div id='box' className='w-[30%] p-10 border-2 cursor-pointer border-blue-700 rounded-lg shadow-lg '>
              <svg fill="#4882C3" className=' w-20 mb-6 bg-white p-3 rounded-lg' height="70px" width="70px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 38.167 38.167" xmlSpace="preserve" stroke="#4882C3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M38.167,30.066v-0.194h-0.865h-0.795h-6.518c2.426-2.929,3.883-6.688,3.883-10.787c0-9.354-7.582-16.936-16.936-16.936 S0,9.731,0,19.085c0,9.351,7.582,16.934,16.936,16.934c2.615,0,5.082-0.611,7.293-1.669h0.041h12.236h0.795h0.865v-0.238h-1.102 v-0.481l1.102-0.001v-0.296h-0.541v-2.44h0.541v-0.345h-1.125v-0.482L38.167,30.066L38.167,30.066z M34.752,30.058h1.293v0.481 h-1.293V30.058z M32.241,30.058h1.293v0.481h-1.293V30.058z M30.911,30.058v0.481H29.62v-0.261 c0.066-0.073,0.137-0.146,0.203-0.221L30.911,30.058L30.911,30.058z M10.438,18.936c-1.926,0.625-3.996-0.43-4.621-2.357 c-0.625-1.929,0.429-3.997,2.357-4.623c1.926-0.625,3.996,0.431,4.621,2.357C13.42,16.241,12.365,18.309,10.438,18.936z M10.531,28.249c-1.926,0.625-3.996-0.431-4.622-2.357s0.43-3.997,2.357-4.623c1.927-0.624,3.997,0.43,4.622,2.357 C13.514,25.555,12.459,27.623,10.531,28.249z M15.942,16.914c1.928-0.625,3.997,0.429,4.622,2.357 c0.626,1.926-0.43,3.997-2.355,4.623c-1.928,0.624-3.998-0.431-4.623-2.358C12.96,19.608,14.015,17.54,15.942,16.914z M16.25,8.111 c1.928-0.625,3.998,0.43,4.623,2.356c0.625,1.928-0.43,3.998-2.357,4.624c-1.928,0.625-3.996-0.43-4.622-2.356 C13.268,10.805,14.324,8.736,16.25,8.111z M15.803,25.905c1.928-0.624,3.997,0.433,4.623,2.36c0.625,1.927-0.43,3.996-2.357,4.621 s-3.998-0.43-4.623-2.357S13.875,26.531,15.803,25.905z M23.756,22.093c1.926-0.626,3.996,0.429,4.621,2.357 c0.627,1.927-0.43,3.996-2.355,4.622c-1.928,0.626-3.999-0.431-4.624-2.356C20.773,24.787,21.828,22.719,23.756,22.093z M24.063,13.289c1.928-0.625,3.998,0.43,4.623,2.357s-0.43,3.996-2.357,4.623c-1.928,0.625-3.997-0.43-4.622-2.357 C21.08,15.985,22.137,13.914,24.063,13.289z M16.936,4.312c7.463,0,13.616,5.54,14.614,12.729 c-0.088-0.368-0.178-0.736-0.297-1.104C28.686,8.03,20.196,3.701,12.289,6.269c-5.156,1.673-8.773,5.87-9.967,10.776 C3.316,9.854,9.471,4.312,16.936,4.312z M24.754,34.097c0.275-0.143,0.541-0.299,0.807-0.456v0.456H24.754z M28.182,34.097h-1.291 v-0.482h1.291V34.097z M29.469,33.326h-3.391c1.109-0.714,2.131-1.552,3.041-2.498h0.35V33.326z M30.911,34.097H29.62v-0.482h1.291 C30.911,33.615,30.911,34.097,30.911,34.097z M33.534,34.097h-1.293v-0.482h1.293V34.097z M36.045,34.097h-1.293v-0.482h1.293 V34.097z M36.149,33.326h-5.305v-2.499h5.305V33.326z"></path> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
              <h2 className='text-white text-4xl mb-4'>Animation Integration</h2>
              <p className='text-gray-400 text-2xl'>With extensive experience in animation platforms like Three.js, GSAP, and Framer Motion, I create interactive and visually appealing animations that bring websites to life, enhancing user engagement.</p>
            </div>
          </div>
        </div>
        <div id="About" className='w-full  pt-[5vh] px-[5vh] mb-20 ' data-aos="zoom-in" >
          <div id='about' className='flex items-center justify-center '>
            <div id='abouttext' className='text-black w-[50%]'>

              <h1 className='text-8xl mb-5 text-white '>About Me</h1>
              <p className='text-3xl font-thin text-white'>I am a passionate and dedicated web developer and UI/UX designer with a strong focus on creating user-friendly and visually appealing experiences. With a solid foundation in front-end technologies and a keen eye for design, I strive to craft innovative digital solutions that meet the evolving needs of the modern web.</p>
              <button onClick={() => window.location.href = '/about'} className="px-12 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xl mt-10 font-semibold rounded-full shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 ease-in-out"> About me  &#x2192; </button>

            </div>
            <div id='aboutimg' className='w-[70vh] relative'>
              {/* <img className=' z-[-1] rounded-full absolute w-[190vh]' src="https://media1.tenor.com/images/c6b7bab8f19aa4da200077327ec3b52d/tenor.gif?itemid=16948532" alt="" /> */}

              <img loading='lazy' className=' rounded-full hover:scale-110 transition-transform duration-500' src="./src\images\DALL·E-2023-12-28-22.59.58-A-modern-friendly-and-professional-looking-profile-picture-for-a-blog-administrator.-The-image-should-feature-a-person-of-indeterminate-gender-with-a-transformed.png" alt="" />
            </div>

          </div>
        </div>
        <Cas />
        <div id="Projects" className='w-full  pt-40 px-40 flex flex-wrap justify-center gap-10' data-aos="fade-up">
          <h1 className='text-white  text-5xl mt-20 mb-20 '>My Projects</h1>
          <div className='flex flex-wrap justify-center px-2'>
            {projects.map((project, index) => (
              <div key={index} id='poro' className={` h-auto mb-10 flex ${project.Flex}  justify-between px-[10px] text-white`} onMouseEnter={() => document.getElementById(`video-${index}`).play()} onMouseLeave={() => document.getElementById(`video-${index}`).pause()}>
                <div id='pro' className='w-[30%] py-10 px-5 border-2 cursor-pointer border-blue-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-white'>
                  <h2 className='text-white text-2xl font-bold mb-4'>{project.title}</h2>
                  <img  src={project.image} alt="Project 1" className='w-full mb-8 rounded-lg' />
                  <p className='text-gray-400 text-justify break-words hyphens-auto'> 👉🏻 {project.description}</p>
                </div>
              </div>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 ease-in-out">
  Explore more Project
</button>

          </div>
        </div>
       






        <div id="Contact" className='w-full min-h-screen pt-40 px-40 flex items-center justify-center ' data-aos="zoom-out">
          <div id='contact' className='flex items-center justify-center'>
            <div id='contacttext' className='text-white w-[50%]'>
              <h1 className='text-5xl mb-5'>Get in Touch</h1>
              <p className='text-xl font-thin'>Feel free to reach out to me for any inquiries or collaborations.</p>
              <div className='mt-10'>
                <h2 className='text-2xl mb-2'>Tushar Mohta</h2>
                <p className='text-lg font-thin'>Email: <a href="mailto:tushar.mohta@example.com" className='text-blue-500 hover:text-blue-800'>tusharmohta001@gmail.com</a></p>
                <p className='text-lg font-thin'>Phone: <a href="tel:+1234567890" className='text-blue-500 hover:text-blue-800'>+91 8290942305</a></p>
                <button onClick={() => window.location.href = '/contact'} className='mt-10 bg-[#4882C3] text-xl px-14 py-5 rounded-full text-black hover:bg-[#4882C3] hover:scale-110 transition-transform duration-500' >Contact Me</button>
              </div>
            </div>
            <div className='w-[70%] rounded-2xl overflow-hidden'>
              <img src="./src/images/main.gif" alt="" />
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          pauseOnHover={true}
          draggable={true}
          theme="light"
          toastClassName="bg-[#5285B9] text-white"
        />

      </div>
    </div>

  )
}

export default Home