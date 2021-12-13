import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const xp1 = {
  yearStart: 2015,
  yearFinish: 2018,
  title: 'Tecnologia em Sistemas para Internet (IFMS)',
  description: 'O curso tem o objetivo de formar profissionais aptos para atuar no desenvolvimento, segurança e manutenção de programas, aplicativos e projetos de sistemas para a rede mundial de computadores, além de páginas e portais para internet e intranet.'
}
const xp2 = {
  yearStart: 2017,
  yearFinish: 2018,
  title: 'Estágio no Tribunal Regional Eleitoral (TRE-MS)',
  description: 'Suporte e manuntenção de equipamentos.'
}
const xp3 = {
  yearStart: 2018,
  yearFinish: 2018,
  title: 'Estágio Advocacia-Geral da União (AGU)',
  description: 'Analisar e propor melhorias/ajustes nos sistemas web, Auxiliar Coordenadores na otimização de processos digitais, se possível implementando rotinas web.'
}
const xp4 = {
  yearStart: 2020,
  yearFinish: 2020,
  title: 'Bootcamp Full Stack (Rocketseat)',
  description: 'Treinamento intensivo utilizando as tecnologias mais modernas do mercado como ReactJS, React Native e NodeJS, com o uso de Typescript.'
}

const Experience = () => {
  useEffect(() => {
    Aos.init({
      delay: 400,
      duration: 1200,
      once: true
    })
  }, []);

const [experiences, setExperiencies] = useState([xp1, xp2, xp3, xp4]);

  return (
    <div id='experience'>
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ml-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left">
          Experiências
        </h1>
        <div className="h-1 w-20 bg-secondary rounded"></div>
      </div>

      <div className='flex justify-start flex-col'>
        {experiences.map(xp => (
          <div key={xp.title} className='flex flex-row mb-8 md:mb-0'>
            <div className='flex ml-10 pb-12 mt-10 w-2/5 items-start justify-start flex-col' data-aos='fade-right'>
              <span className='text-xl text-black font-medium whitespace-nowrap'>{`${xp.yearStart} - ${xp.yearFinish}`}</span>
              <h3 className='text-xl text-black font-medium md:ml-6 ml-0 mt-3'>{xp.title}</h3>
            </div>
            <div className='flex items-center w-3/5 justify-start mr-10 mt-10' data-aos='fade-left'>
              <p className='text-xl font-light md:text-left text-center ml-4 md:ml-0'>
                {xp.description}
              </p>
            </div>
          </div>        
        ))}

      </div>
    </div>
  )
}

export default Experience
