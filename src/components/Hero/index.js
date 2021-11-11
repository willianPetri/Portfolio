import React from 'react'
import port from '../../images/port.jpg'

const Hero = () => {
  return (
    <div className='flex align-center justify-around w-full h-full'>
      <div className= 'm-5 p-5'>
        <h1 className='font-bold text-4xl mb-10'>Portfolio</h1>        
        <p className='text-xl'>Alguns sistema que desenvolvi apenas para treino, como estudo.</p>
      </div>
      <div className='w-96 h-full p-5 m-5'>
        <img src={port} alt="port" />
      </div>
    </div>
  )
}

export default Hero
