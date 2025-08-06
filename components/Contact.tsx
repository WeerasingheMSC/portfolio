"use client"

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        'service_7q8xe2k', 
        'template_b30x4gg', 
        templateParams, 
        'b_fv-KnF6fd8qPT7S'
      );
      
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log('FAILED...', error);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
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
        <form onSubmit={handleSubmit} className=' w-full mt-5 z-20 '>
            <div className='flex flex-col items-center mt-5 '>
                <label htmlFor="name" className='mr-[80%] text-xs md:text-md lg:text-lg mb-2'>Name:</label>
                <input 
                  type="text" 
                  name='name' 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  placeholder='Your Name' 
                  className='ml-10 mr-10 w-full max-w-xs md:max-w-sm lg:max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' 
                />
                
                <label htmlFor="email" className='mr-[80%] mt-4 text-xs md:text-md lg:text-lg mb-2'>Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  placeholder='Your Email' 
                  className=' w-full max-w-xs md:max-w-sm lg:max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' 
                />
                
                <label htmlFor="message" className='mr-[80%] mt-4 text-xs md:text-md lg:text-lg mb-2'>Message:</label>
                <textarea 
                  placeholder='Your Message' 
                  id="message" 
                  name='message' 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  className='w-full max-w-xs md:max-w-sm lg:max-w-md p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32'
                ></textarea>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`px-6 py-3 rounded-lg text-white transition duration-200 ${
                    isLoading 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`} 
                  style={{animation:'slideTop 1s ease forward'}}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>

                {status && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${
                    status.includes('successfully') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {status}
                  </div>
                )}
            </div>
        </form>
        </div>
      </div>
      <div>
        <p className='justify-center text-center mt-10 font-bold text-md'>© 2025 Sahan Champathi Weerasinghe. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Contact
