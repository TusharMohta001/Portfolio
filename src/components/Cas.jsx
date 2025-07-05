import React, { useRef } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three"
import Scen from './scen'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Cas = () => {

  AOS.init({

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    anchorPlacement: 'top-bottom', 
        });
  
  return (
    <div id='canvas' className=' w-full h-[100vh] relative overflow-hidden flex items-center flex-col ' data-aos="fade-up">
<h1 className=' text-white absolute px-40 pt-36 text-7xl'>Project</h1>

    <Canvas flat camera={ {fov: 36}}>
      <ambientLight/>
     <Scen/>
    <OrbitControls enableZoom={false}   />
    </Canvas>
    <div id="mian" className=' w-full bg-transparent'>
        <div id="textt" className='  bg-transparent'>
            <h1 className=' text-white text-[1vw]'>Create a Mordern Websites HTML CSS JS GSAP Scroll-trigger Three.js React.js Front-end & Back-end | </h1>
            <h1 className=' text-white text-[1vw]'>Create a Mordern Websites HTML CSS JS GSAP Scroll-trigger Three.js React.js Front-end & Back-end | </h1>
        </div>
    </div>
      
    <button onClick={() => window.location.href = '/project'} className=' text-black absolute bottom-[2%] rounded-lg text-lg px-10 bg-[#4882C3]  py-3 '>Explore Projects</button>
    </div>
  )
}

export default Cas

