import React from 'react'
import { cn } from '@/lib/utils'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Button from './ui/Button'
import { FaLocationArrow } from 'react-icons/fa'
import Navbar from './ui/Navbar'
import { FaGithub,FaFacebook,FaLinkedin,FaTwitter,FaDownload } from 'react-icons/fa'


const Hero = () => {
  return (
    <div id="Hero" className={`pb-20 pt-36`}>
      <Navbar />
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 
        md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh]
        w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh]
        w-[50vw]' fill='blue'/>
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
     <div
       className={cn(
         "absolute inset-0",
         "[background-size:40px_40px]",
         "[background-image:linear-gradient(to_right,#0f0f1b_1px,transparent_1px),linear-gradient(to_bottom,#0f0f1b_1px,transparent_1px)]",
         "dark:[background-image:linear-gradient(to_right,#0f0f1b_1px,transparent_1px),linear-gradient(to_bottom,#0f0f1b_1px,transparent_1px)]",
       )}
     />
     {/* Radial gradient for the container to give a faded look */}
     <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
   </div>
   <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-5 lg:right-96">
   <div className="relative mb-4 mt-4 rounded-full p-1 bg-gradient-to-tr from-pink-400 via-yellow-400 to-purple-600 shadow-3xl
                before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(at_center,_#ffb6ff_4deg,_#b5caff_120deg,_#ffb6ff_240deg,_#ffb6ff_360deg)]
                before:blur-xl before:opacity-70 before:animate-spin-slow lg:left-full z-0
                w-52 h-52 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-74 xl:h-74 flex items-center justify-center">
  <img
    src="/upload/my_image.jpeg"
    alt="Sahan's Portrait"
    className="relative rounded-full w-50 h-50 object-cover shadow-lg
               sm:w-50 sm:h-50 md:w-62 md:h-62 lg:w-70 lg:h-70 xl:w-72 xl:h-72
               transition-transform duration-300 transform hover:scale-105"
  />
</div>
    
    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-1'>
      <h2 className='uppercase tracking-widest text-xs text-center
      text-blue-100 max-w-80'>
        Dynamic Web Magic with Next.js
      </h2>
      <TextGenerateEffect 
      className='text-center text-[24px] md:text-3xl lg:text-4xl' 
      words='Transforming Concepts into countless User
      Experiences'
      />
      <p className='text-center md:tracking-wider mb-2 md:text-sm lg:text-lg'>
        Hi, I&apos;m Sahan Weerasinghe, a passionate full stack developer with a knack for building stunning, user-friendly, and high-performance web applications.</p>
        <div className='flex space-x-8 mt-4 mb-0' >
          <a href="https://github.com/WeerasingheMSC" 
          className='inline-block transform transition-transform duration-300 hover:-translate-y-2'>
          <FaGithub className='text-4xl text-fuchsia-700 transition-colors duration-300 mb-4' />
          </a>
          <a href="https://www.linkedin.com/in/mscweerasinghe/" 
          className='inline-block transform transition-transform duration-300 hover:-translate-y-2'>
            <FaLinkedin className='text-4xl text-fuchsia-700 duration-300 mb-4' />
          </a>
          <a href="https://www.facebook.com/sahan.c.weerasinghe.2025?mibextid=ZbWKwL" 
          className='inline-block transform transition-transform duration-300 hover:-translate-y-2'> 
          <FaFacebook className='text-4xl text-fuchsia-700  duration-300 mb-4' />
          </a>
          <a href=""
          className='inline-block transform transition-transform duration-300 hover:-translate-y-2'>
            <FaTwitter className='text-4xl text-fuchsia-700  duration-300 mb-4 ' />
          </a>
          </div>


          <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-6'>
              <a href="#about">
              <Button  title="Hire me"
              icon={<FaLocationArrow className='max-w-4 mt-1'/>}
              position="right"
              />
              </a>
              <a href="#about">
              <Button  title="Download CV"
              icon={<FaDownload className='max-w-4 mt-1'/>}
              position="right"
              otherClasses='bg-black'
              />
              </a>
          </div>
    </div>
   


   </div>
     
    </div>
   
    

  )
}

export default Hero
