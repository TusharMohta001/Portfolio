import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const handleContact = () => {
    setTimeout(() => {
      window.location.href = 'mailto:tusharmohta001@gmail.com?subject=Hello&body=Hello';
    }, 6000);
  };
  return (
    <div className= 'page'>
      <Navbar/>

      <div className='bg-black'>
        <div id='main-c'  className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-white text-7xl'>Contact</h1>
          <div className='contact-section mt-10'>
            <h2 className='text-white text-4xl'>Name: Tushar Mohta</h2>
            <h2 className='text-white text-4xl'>Email: tusharmohta001@gmail.com</h2>
            <h2 className='text-white text-4xl'>Phone: +91 8290942305</h2>
            <h2 className='text-white text-4xl'>Address: Mohta Chowk, Bikaner, Rajasthan, India</h2>
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

          </div>
        <div className=' mt-10 flex items-center  flex-col'>
          <h2 className='text-zinc-400 text-4xl '>You can contact me at:</h2>
          <div className='w-52 h-16 mt-10 bg-[#4444447f] rounded-lg flex items-center justify-center gap-5 '>
          <a href='https://www.instagram.com/tushar_mohta_23/' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450186/instagram.svg" alt="" /></a>
          <a href='https://x.com/TusharMohta001' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450363/twitter.svg" alt="" /></a>
          <a href='https://wa.me/8290942305' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450391/whatsapp.svg" alt="" /></a>
          <a href='https://github.com/TusharMohta001' target='_blank' className='w-5 hover:scale-150 transition-transform duration-300'><img src="https://www.svgrepo.com/show/450156/github.svg" alt="" /></a>
        </div>
        </div>
        </div>
      </div>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
      <Footer/>
    </div>
  )
}

export default Contact