import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import skate from '../../images/skate.jpg';
import finance from '../../images/finance.jpg';
import dashboard from '../../images/dashboard.jpg';
import amazon from '../../images/amazon.jpg';
import barber from '../../images/barber.jpg';
import barberMobile from '../../images/barberMobile.jpg';

const projeto1 = {
  title: 'Skateboard',
  language: 'React e TailwindCss',
  about: 'Praticando o framework tailwindcss',
  site: 'https://modest-turing-28b005.netlify.app/',
  github: 'https://github.com/willianPetri/Skate',
  image: skate
}
const projeto2 = {
  title: 'Expense Tracker',
  language: 'React, Typescript, Styled-components',
  about: 'Sistema Financeiro, controle de despesas',
  site: 'https://jolly-dubinsky-898d51.netlify.app/',
  github: 'https://github.com/willianPetri/SistemaFinanceiro',
  image: finance
}
const projeto3 = {
  title: 'Dashboard',
  language: 'React e TailwindCss',
  about: 'Praticando o framework tailwindcss',
  site: 'https://pedantic-goldwasser-d11ad3.netlify.app/',
  github: 'https://github.com/willianPetri/Dashboard',
  image: dashboard
}
const projeto4 = {
  title: 'Amazon Clone',
  language: 'React, Firebase, Stripe, Axios',
  about: 'Cópia do ecommerce da Amazon ',
  site: 'https://challenge-9415e.web.app/',
  github: 'https://github.com/willianPetri/Amazon-clone',
  image: amazon
}
const projeto5 = {
  title: 'GoBarber backend',
  language: 'Node, Typescript, Express, JWT, MongoDB, Redis, Postgres, AWS e TypeORM',
  about: 'Controle de agendamento da barbearia',
  site: 'F',
  github: 'https://github.com/willianPetri/GoBarber-backend',
  image: barber
}
const projeto6 = {
  title: 'GoBarber Mobile',
  language: 'React Native, Typescript, Axios, Styled-components, Day-Picker',
  about: 'Fazer o agendamento do corte de cabelo na barbearia',
  site: 'F',
  github: 'https://github.com/willianPetri/GoBarber-mobile',
  image: barberMobile
}

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      delay: 1000,
      duration: 1500,
      easing: 'linear',
      once: true
    })
  }, []);

  // eslint-disable-next-line
  const [projetos, setProjetos] = useState([projeto1, projeto2, projeto3, projeto4, projeto5, projeto6]);

  return (
    <div className="text-gray-700 body-font" id='portfolio'>
      <div className='container px-5 py-24 mx-auto'>
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left">
              Projetos
            </h1>
            <div className="h-1 w-20 bg-secondary rounded"></div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          {projetos.map(projeto => (
            <div className='h-96 overflow-hidden relative ml-8 group' data-aos='fade-down' key={projeto.title}>
              <img src={projeto.image} alt="" className='h-full w-full object-cover' />
              <div className='absolute top-0 left-0 h-full w-full bg-light_bg flex flex-col items-center justify-center p-8 transform -translate-y-full transition delay-75 duration-700  group-hover:translate-y-0'>
                <h3 className='text-3xl text-white uppercase font-medium mb-4'>{projeto.title}</h3>
                <p className='px-4 py-0 text-xl text-light_color'>{projeto.language}</p>
                <p className='px-4 py-0 text-lg text-light_color mt-4'>{projeto.about}</p>
                <div className='space-x-7 mt-6'>
                  <a href={projeto.site} target="_blank" rel="noopener noreferrer" className={`${projeto.site === 'F' ? 'hidden' : 'text-2xl text-red-600 hover:text-white'}`}>
                    Site
                  </a>
                  <a href={projeto.github} target="_blank" rel="noopener noreferrer" className='text-2xl text-red-600 hover:text-white'>
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
