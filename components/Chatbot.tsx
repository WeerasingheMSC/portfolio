"use client"
import React,{useState} from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { SiProbot } from "react-icons/si";
import { IoClose,IoSend } from "react-icons/io5";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! I\'m MSC Assistant. I can tell you about Sahan\'s skills, projects, and experience. What would you like to know?' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const botResponses = {
        skills: "Sahan is skilled in:\n• Programming: Java, JavaScript, TypeScript, Python, C, SQL\n• Frontend: React, Next.js, HTML, CSS, Tailwind CSS\n• Backend: Node.js, Express.js, Spring Boot\n• Databases: MongoDB, Firebase, PostgreSQL, MySQL\n• Cloud: AWS\n• Tools: Git, Docker",
        
        projects: "Here are some of Sahan's key projects:\n• Travel Booking Sri Lanka - A modern travel booking website\n• Simsyn Partner Portal - Partner management system\n• E-commerce Platform - Full-stack online store\n• Apple iPhone 3D Website - GSAP & Three.js animations",
        
        experience: "Sahan is a Full Stack Developer with experience in:\n• Web application development\n• E-commerce solutions\n• API development and integration\n• Database design and management\n• Responsive web design\n• Modern JavaScript frameworks",
        
        contact: "You can reach Sahan through:\n• Email: sahanchampathi2001@gmail.com\n• LinkedIn: Connect via the portfolio\n• Portfolio: This website\n• Available for freelance projects and full-time opportunities",
        
        education: "Sahan is pursuing his studies in Computer Science with focus on:\n• Software Engineering\n• Web Development\n• Database Systems\n• Object-Oriented Programming\n• Data Structures and Algorithms",
        
        services: "Sahan offers:\n• Full Stack Web Development ($2,000+)\n• E-commerce Solutions ($3,500+)\n• Website Redesign & Optimization ($1,200+)\n• API Development & Integration ($800+)\nAll with quick turnaround and ongoing support!"
    };

    const getResponse = (input: string) => {
        const lowercaseInput = input.toLowerCase();
        
        if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology') || lowercaseInput.includes('tech stack')) {
            return botResponses.skills;
        } else if (lowercaseInput.includes('project') || lowercaseInput.includes('work') || lowercaseInput.includes('portfolio')) {
            return botResponses.projects;
        } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('background')) {
            return botResponses.experience;
        } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('email') || lowercaseInput.includes('hire')) {
            return botResponses.contact;
        } else if (lowercaseInput.includes('education') || lowercaseInput.includes('study') || lowercaseInput.includes('university')) {
            return botResponses.education;
        } else if (lowercaseInput.includes('service') || lowercaseInput.includes('price') || lowercaseInput.includes('cost')) {
            return botResponses.services;
        } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
            return "Hello! Nice to meet you! I can help you learn about Sahan's skills, projects, experience, or how to contact him. What interests you most?";
        } else if (lowercaseInput.includes('who') || lowercaseInput.includes('about')) {
            return "Sahan Champathi Weerasinghe is a passionate Full Stack Developer specializing in modern web technologies. He creates responsive, scalable applications using React, Next.js, Node.js, and cloud technologies. Ask me about his skills, projects, or services!";
        } else {
            return "I can help you learn about Sahan's:\n• Skills & Technologies\n• Projects & Portfolio\n• Experience & Background\n• Contact Information\n• Services & Pricing\n• Education\n\nJust ask me anything about these topics!";
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        // Add user message
        const newMessages = [...messages, { type: 'user', text: inputValue }];
        
        // Get bot response
        const botResponse = getResponse(inputValue);
        const finalMessages = [...newMessages, { type: 'bot', text: botResponse }];
        
        setMessages(finalMessages);
        setInputValue('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };
  return (
    <div className='bottom-20 right-4 lg:right-5 fixed z-50 p-4 w-13 h-13 lg:w-16 lg:h-16 border-1 border-violet-800 rounded-full bg-violet-600 flex items-center justify-center'>
      <IoChatbubbleEllipsesOutline className='text-white text-3xl cursor-pointer transition-transform duration-300 hover:animate-bounce' onClick={toggleChat} />
      {isOpen ? (
        <div className='absolute bottom-15 lg:bottom-20 right-0 bg-white rounded-lg shadow-lg w-80 h-96 lg:w-96 lg:h-112 flex flex-col'>
          {/* Header */}
          <div className='w-full bg-violet-600 h-12 rounded-t-lg flex items-center justify-between px-4'>
            <div className='flex items-center'>
              <SiProbot className='text-white text-2xl mr-2 hover:scale-125 transition-transform duration-300 hover:text-orange-400' />
              <h2 className='text-white text-lg font-semibold hover:text-orange-400'>MSC Assistant</h2>
            </div>
            <IoClose className='text-white text-2xl cursor-pointer hover:text-orange-500' onClick={toggleChat} />
          </div>
          
          {/* Messages Area */}
          <div className='flex-1 p-4 overflow-y-auto space-y-3 max-h-80'>
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className='text-sm whitespace-pre-line'>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className='p-4 border-t border-gray-200'>
            <div className='flex items-center space-x-2'>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Ask me about Sahan...'
                className='flex-1 h-10 rounded-full border-2 border-gray-300 text-black px-4 focus:outline-none focus:border-violet-600'
              />
              <button
                onClick={handleSendMessage}
                className='w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center hover:bg-violet-700 transition-colors'
              >
                <IoSend className='text-white text-lg' />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Chatbot

