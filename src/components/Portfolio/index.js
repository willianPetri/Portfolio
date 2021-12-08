import React, { useState } from 'react'
import foto from '../../images/port.jpg';

const projeto1 = {
  title: 'Projeto 1',
  language: 'React',
  image: foto
}
const projeto2 = {
  title: 'Projeto 2',
  language: 'Typescript',
  image: foto
}
const projeto3 = {
  title: 'Projeto 3',
  language: 'Node',
  image: foto
}
const projeto4 = {
  title: 'Projeto 4',
  language: 'Tailwind',
  image: foto
}

const Portfolio = () => {
  const [projetos, setProjetos] = useState([projeto1, projeto2, projeto3, projeto4]);

  return (
    <div className="text-gray-700 body-font">
      <div className='container px-5 py-24 mx-auto'>
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left">
              Meus Projetos
            </h1>
            <div className="h-1 w-20 bg-secondary rounded"></div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          {projetos.map(projeto => (
            <div className='h-96 overflow-hidden relative ml-8 group'>
              <img src={projeto.image} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 left-0 h-full w-full bg-light_bg flex flex-col items-center justify-center p-8 transform -translate-y-full transition delay-75 duration-700  group-hover:translate-y-0'>
                <h3 className='text-3xl text-white uppercase font-medium mb-4'>{projeto.title}</h3>
                <p className='px-4 py-0 text-xl text-light_color'>{projeto.language}</p>
                <div className='space-x-7 mt-6'>
                  <a href="/" className='text-3xl text-red-600 hover:text-white'>
                    Site
                  </a>
                  <a href="/" className='text-3xl text-red-600 hover:text-white'>
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}          
        </div>
      </div>
      </div>
      )
}

      export default Portfolio
