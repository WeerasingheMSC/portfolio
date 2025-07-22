import React from 'react'

const Contact = () => {
  return (
    <footer className='w-full pt-20 pb-20 py-20 ' id="contact">
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
         <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
      </div>
      <div>
        <h1 className='heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10'>
          Let&apos;s Connect and <span className='text-purple-400'>Collaborate</span>
        </h1>
        <p className='text-center max-w-md text-sm md:text-lg justify-center align-center mx-auto mb-10'>
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className='lg:w-lg max-w-xs md:max-w-sm pl-4 pr-4 lg:max-w-md bg-transparent mx-auto h-auto pb-4 border-2 rounded-xl border-gray-800 flex flex-col items-center mt-20'>
        <form action="submit" method='post' className=' w-full mt-5 z-20 '>
            <div className='flex flex-col items-center mt-5 '>
                <label htmlFor="Name" className='mr-[80%] text-xs md:text-md lg:text-lg mb-2'>Name:</label>
                <input type="text" name='Name' id="Name" required placeholder='Your Name' className='ml-10 mr-10 w-full max-w-xs md:max-w-sm lg:max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' />
                
                <label htmlFor="Email" className='mr-[80%] mt-4 text-xs md:text-md lg:text-lg mb-2'>Email:</label>
                <input type="email" name="Email" id="Email"required placeholder='Your Email' className=' w-full max-w-xs md:max-w-sm lg:max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' />
                
                <label htmlFor="massage" className='mr-[80%] mt-4 text-xs md:text-md lg:text-lg mb-2'>Massage:</label>
                <textarea placeholder='Your Message' id="massage" name='massage' required className='w-full max-w-xs md:max-w-sm lg:max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32'></textarea>

                <button type="submit" className='bg-purple-600 animate-none text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200 border-x-purple-600' style={{animation:'slideTop 1s east forward'}}>Send Message</button>
            </div>
        </form>
        </div>
      </div>
    </footer>
  )
}

export default Contact
