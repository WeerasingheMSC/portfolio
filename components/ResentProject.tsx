import { projects } from '@/Data/index'
import { div } from 'motion/react-client'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const ResentProject = () => {
  return (
    <div className='py-20' id={'projects'}>
        <h1 className='heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10'>
            A small selection of {' '}
            <span className='text-purple-300'>recent projects</span>
        </h1>
        <div className='flex flex-wrap item-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title ,des , img , iconLists, link,}) => (
                <div key={id} className='lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                         <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg.png" />
                            </div>
                            <img src={img} alt={title} className='z-20 absolute bottom-0' />
                         </div>
                         <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex item-center'>
                                    {iconLists.map((icon,index)=>(
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center item-center'
                                             style={{
                                                transform:`translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt={icon}  className='p-2'/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </PinContainer>
                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default ResentProject
