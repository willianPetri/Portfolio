import React from 'react'

const Portfolio = ({ title, language, image }) => {
  return (
    <div className=' h-56 w-96'>
      <div>
        <img src={image} alt='projeto' />

        <p>{title}</p>
        <p>{language}</p>
      </div>
      <div className='flex-auto flex space-x-3'>
        <button className='w-1/2 flex items-center justify-center rounded-md bg-primary text-secondary'>Visit site</button>
        <button className='w-1/2 flex items-center justify-center rounded-md border border-gray-300'>Código</button>
      </div>
    </div>
  )
}

export default Portfolio
