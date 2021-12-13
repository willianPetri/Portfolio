import React from 'react'
import port from '../../images/port.jpg'

const Hero = () => {
  return (
    <div className='mx-auto flex px-5 py-24 items-center justify-between' id='hero'>
      <div className= 'md:w-1/2 mb-10'>
        <h1 className='font-bold text-6xl mb-10'>Full Stack Developer</h1>        
        <p className='text-xl'>Interessado em todos os tipos de oportunidades.</p>
      </div>
      <div className='md:w-1/2 hidden sm:inline-block sm: ml-8'>
        <img src={port} alt="port" className='w-full rounded shadow-2xl' />
      </div>
    </div>
  )
}

export default Hero
