import React from 'react'

const Footer = () => {
  return (
    <div>
      <div id='fofooter' className='footer flex items-center justify-between p-6 px-20 bg-zinc-700 '>
        <p id='footep' className='text-white text-[1vw]'> Copyright© 2024 Tushar Mohta. All rights reserved.</p>
        <div id='fosocial' className='social-icons flex items-center justify-center gap-5'>
          <a className='w-7 hover:scale-125 transition-transform duration-300' href='https://www.instagram.com/tushar_mohta_23/' target='_blank'><img src="https://www.svgrepo.com/show/450186/instagram.svg" alt="Instagram" /></a>
          <a className='w-7 hover:scale-125 transition-transform duration-300' href='https://x.com/TusharMohta001' target='_blank'><img src="https://www.svgrepo.com/show/450363/twitter.svg" alt="Twitter" /></a>
          <a className='w-7 hover:scale-125 transition-transform duration-300' href='https://wa.me/8290942305' target='_blank'><img src="https://www.svgrepo.com/show/450391/whatsapp.svg" alt="WhatsApp" /></a>
          <a className='w-7 hover:scale-125 transition-transform duration-300' href='https://github.com/TusharMohta001' target='_blank'><img src="https://www.svgrepo.com/show/450156/github.svg" alt="GitHub" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer