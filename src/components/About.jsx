import { motion } from 'framer-motion';
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all';

import { useGSAP } from '@gsap/react'
import Navbar from './Navbar'
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';



const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  


  AOS.init({

    offset: 200,
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    anchorPlacement: 'top-bottom', 
    once: true
        });


  const handleContact = () => {
    setTimeout(() => {
      
      window.location.href = 'mailto:tusharmohta001@gmail.com?subject=Hello&body=Hello';
    }, 6000);
  };


  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  useGSAP(() => {
    gsap.fromTo('#abbout h3,p', { 
      x: -300,
      delay: 0.5,
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      ease: 'power4.out'
    }, {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 2,
      ease: 'power4.out'
    });
  })

  return (

    <div className=' page'>
      <Navbar />
      <div id='abbout' className=' bg-black w-full py-28 px-10 h-screen'>
        <h3 className='text-white text-[3.8vw] leading-[1.2] pt-10  '>About me</h3>
        <hr className=' w-80' />
        <p className='text-white text-[2.2vw] mt-2 leading-[1.2] text-justify '> I am Tushar Mohta, a web developer passionate about crafting innovative digital experiences. Dedicated to building intuitive, high-performing websites that empower ideas to come to life online.</p>
        <div id='ab' className=' text-[#bfbfbf9e] mt-20 w-[74%] px-40 float-end   text-justify'>
          <p className=' text-[1.4vw] ' > From an early fascination with technology to a focused career in web development, I’ve always been driven by a passion for turning ideas into seamless digital experiences. With a dedication to pushing creative boundaries, I specialize in crafting bespoke websites that combine functionality and innovation, delivering impactful results for every project. 
            <br /><br/>
             Over the past two years, I have honed my skills across multiple programming languages, including C++, Python, Java, and JavaScript. With each project, I strive to deliver exceptional results, pushing creative and technical boundaries to exceed expectations and leave a lasting impact.</p>
        </div>

      </div>
      <div className=' w-full min-h-screen  ' data-aos="fade-down">
        <div id="boxx" className=' h-[40vh] px-5 flex items-center justify-around' >
          <div id="box1" className=' w-[23vw] h-[25vh] bg-[#2d2d2d] relative hover:opacity-100  ' onMouseEnter={() => gsap.to(['#box2', '#box3', '#box4'], { opacity: 0.2, duration: 0.5 })} onMouseLeave={() => gsap.to(['#box2', '#box3', '#box4'], { opacity: 1, duration: 0.5 })}>
            <h1 className=' text-6xl p-5 text-white' > 50+ </h1>
            <h3 className=' text-[3.5vh] absolute right-2 bottom-2 text-blue-800'>Project</h3>
          </div>
          <div id="box2" className=' w-[23vw] h-[25vh]  bg-[#2d2d2d] relative hover:opacity-100  ' onMouseEnter={() => gsap.to(['#box1', '#box3', '#box4'], { opacity: 0.2, duration: 0.5 })} onMouseLeave={() => gsap.to(['#box1', '#box3', '#box4'], { opacity: 1, duration: 0.5 })}>
            <h1 className=' text-6xl p-5 text-white' > 2-3 </h1>
            <h3 className=' text-[3.5vh] absolute right-2 bottom-2 text-blue-800'>Year of Experience</h3>
          </div>
          <div id="box3" className=' w-[23vw] h-[25vh] bg-[#2d2d2d] relative hover:opacity-100  ' onMouseEnter={() => gsap.to(['#box1', '#box2', '#box4'], { opacity: 0.2, duration: 0.5 })} onMouseLeave={() => gsap.to(['#box1', '#box2', '#box4'], { opacity: 1, duration: 0.5 })}>
            <h1 className=' text-6xl p-5 text-white' > 99.99% </h1>
            <h3 className=' text-[3.5vh] absolute right-2 bottom-2 text-blue-800'>On the funny scale</h3>
          </div>
          <div id="box4" className=' w-[23vw] h-[25vh] bg-[#2d2d2d] relative hover:opacity-100  ' onMouseEnter={() => gsap.to(['#box1', '#box2', '#box3'], { opacity: 0.2, duration: 0.5 })} onMouseLeave={() => gsap.to(['#box1', '#box2', '#box3'], { opacity: 1, duration: 0.5 })}>
            <h1 className=' text-6xl p-5 text-white' > 24/7 </h1>
            <h3 className=' text-[3.5vh] absolute right-2 bottom-2 text-blue-800'> Available for work</h3>
          </div>
        </div>
        <div id="imgg" data-aos="fade-down" className=' w-full flex items-center justify-around flex-col '  >
          <h1 className=' text-white text-[3.8vw] leading-[1.2] pt-10  mb-10 '>Hobbies</h1>
          <div id='hobbies' className=' flex items-center justify-around w-full '>

            <div id="img" className=' p-3 '>
              <h4 className=' inline-block bg-[#4882C3] rounded-sm text-black p-2'>#carlover🚗</h4>
            </div>
            <div id="img1" className='p-3'>
              <h4 className=' inline-block bg-white rounded-sm text-black p-2'>#musiclover🎧</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="skill" data-aos="fade-up" className=' w-full min-h-screen px-10 py-10'>
        <h3 className=' text-white text-[3.8vw] leading-[1.2] pt-10   '>Skills</h3>
        <hr className=' w-52' />
        <div className="Skills_skillHead__T6_DJ flex justify-center items-center flex-col  relative " >
          <button className="Skills_mySkills__Na9XU   " > MY SKILLS</button>
          <div className="Skills_svgEffect__8NJfh">
            <svg id='svg' xmlns="http://www.w3.org/2000/svg" width="744" height="423" viewBox="0 0 744 423" fill="none"><path d="M2 126.5V86H258V0M366.5 422.5V0M741.5 133V86H481.5V0" stroke="url(#paint0_linear_2101_768)" strokeWidth="4"></path><defs><linearGradient id="paint0_linear_2101_768" x1="371.963" y1="12" x2="359.62" y2="389.388" gradientUnits="userSpaceOnUse"><stop stopColor="#292929"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
          </div>
          <div className="Skills_full_stack__KiQFa absolute top-52">
            <div className="Skills_frontend__xWEWg">
              <button className="skill_skill__oFitQ">  HTML  </button>
              <button className="skill_skill__oFitQ">  CSS  </button>
              <button className="skill_skill__oFitQ">  javaScript  </button>
              <button className="skill_skill__oFitQ">  React  </button>
              <button className="skill_skill__oFitQ">  Tailwind CSS  </button>
              <button className="skill_skill__oFitQ">  Framer motion  </button>
              <button className="skill_skill__oFitQ">  Three JS  </button>
              <button className="skill_skill__oFitQ">  GSAP  </button>
              <button className="skill_skill__oFitQ">  Lenis  </button>
              <button className="skill_skill__oFitQ">  DOM  </button>
              <button className="skill_skill__oFitQ">  JavaScript  </button>
              <button className="skill_skill__oFitQ">  TypeScript  </button>
            </div>
            <div className="Skills_backend__IuTAc">
              <button className="skill_skill__oFitQ">  Node  </button>
              <button className="skill_skill__oFitQ">  Express  </button>
              <button className="skill_skill__oFitQ">  Rest Api  </button>
              <button className="skill_skill__oFitQ">  Validation  </button>
              <button className="skill_skill__oFitQ">  JWT/OAuth  </button>
              <button className="skill_skill__oFitQ">  SQL  </button>
              <button className="skill_skill__oFitQ">  MongoDB  </button>
              <button className="skill_skill__oFitQ">  Firebase Firestore  </button>
              <button className="skill_skill__oFitQ">  Netlify  </button>
            </div>
          </div>
          <div className="Skills_others__ovqrN items-center ">
            <div className="Skills_lang__M0RLw">
            <button className="skill_skill__oFitQ"> C++ </button>
            <button className="skill_skill__oFitQ">  React Native  </button>
            <button className="skill_skill__oFitQ">  Python  </button>
              <button className="skill_skill__oFitQ">  Git  </button>
              <button className="skill_skill__oFitQ">  Github  </button
              ><button className="skill_skill__oFitQ">  Linux  </button>
              <button className="skill_skill__oFitQ">  WordPress  </button>
              <button className="skill_skill__oFitQ">  UX/UI Design  </button>
              <button className="skill_skill__oFitQ">  Product design  </button>
              <button className="skill_skill__oFitQ">  Figma  </button>
              {/* <button className="skill_skill__oFitQ">  Adobe XD  </button> */}
              {/* <button className="skill_skill__oFitQ">  Wireframe  </button> */}
            </div>
          </div>
        </div>
      </div>
      <div id="last" data-aos="zoom-in" className=' w-full min-h-screen bg-black px-10 py-10 flex items-center justify-center flex-col text-center'>
        <h1 id='heading' className=' text-white text-[2vw] leading-[1.2] pt-10    '>Get in Touch </h1>
        <p id='par' className=' text-white text-[1.3vw] w-[55%] mt-10 leading-[1.2] text-center '>I'm eager to join a collaborative team where I can contribute my skills and learn from others. If you have an exciting project, let's discuss how I can be a valuable asset. I'm actively seeking a new opportunity to apply my skills and continue growing!</p>
        <button onClick={() => { 
          const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
          toast.promise(
            resolveAfter3Sec,
            {
              pending: 'Message is pending',
              success: 'Message sent successfully! 👌',
              error: 'Failed to send message 🤯'
            }
          );
          handleContact(); 
        }} className=' bg-transparent border border-white text-white px-10 py-2 rounded-sm mt-10 hover:bg-[#1a73e8] hover:border-[#1a73e8] transition-colors duration-200'> Say Hello</button>

        <div className='w-52 h-16 mt-20 bg-[#4444447f] rounded-lg flex items-center justify-center gap-5 '>
          <a href='https://www.instagram.com/tushar_mohta_23/' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450186/instagram.svg" alt="" /></a>
          <a href='https://x.com/TusharMohta001' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450363/twitter.svg" alt="" /></a>
          <a href='https://wa.me/8290942305' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450391/whatsapp.svg" alt="" /></a>
          <a href='https://github.com/TusharMohta001' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450156/github.svg" alt="" /></a>
        </div>

        <h1 id='h1' className=' text-white text-xl mt-40'>Designed and Coded by <span className='name '> <a href="https://www.linkedin.com/in/tushar-mohta-b5409733a/" target='_blank'> Tushar Mohta </a> </span>. Built with React and  Nextjs, Module CSS and Framer Motion, Deployed with Vercel.</h1>
      </div>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />

      <Footer />
    </div>
  )
}

export default About