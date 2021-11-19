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
            <div className="h1 w-20 bg-secondary rounded"></div>
          </div>
        </div>      
        <div className="flex flex-wrap -m-4">
          {projetos.map(projeto => (
            <div className="xl:w-1/4 md:w-1/2 p-4" key={projeto.title}>
              <div className="bg-cinza p-6 rounded-lg">
                <img src={projeto.image} alt="projeto" className="h-40 rounded w-full object-cover object-center mb-6" />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {projeto.title}
                  {console.log(projeto.title)}
                </h2>
                <p className="leading-relaxed text-base">
                  {projeto.language}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
