import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Experience = () => {
  useEffect(() => {
    Aos.init({
      delay: 400,
      duration: 1200,
      once: true
    })
  }, []);

  return (
    <div id='experience'>
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ml-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 text-left">
          Experiências
        </h1>
        <div className="h-1 w-20 bg-secondary rounded"></div>
      </div>

      <div className='flex justify-start flex-col'>
        <div className='flex flex-row'>
          <div className='flex ml-10 pb-12 mt-10 w-2/5 items-start justify-start flex-col' data-aos='fade-right'>
            <span className='text-xl text-black font-medium'>2015 - 2018</span>
            <h3 className='text-xl text-black font-medium ml-6 mt-3'>Tecnologia em Sistemas para Internet (IFMS)</h3>
          </div>
          <div className='flex items-center w-3/5 justify-start mr-10' data-aos='fade-left'>
            <p className='text-xl font-light text-left'>
              O curso tem o objetivo de formar profissionais aptos para atuar no desenvolvimento, segurança e manutenção de programas, aplicativos e projetos de sistemas para a rede mundial de computadores, além de páginas e portais para internet e intranet.
            </p>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex ml-10 pb-12 mt-10 w-2/5 items-start justify-start flex-col' data-aos='fade-right'>
            <span className='text-xl text-black font-medium'>2017 - 2018</span>
            <h3 className='text-xl text-black font-medium ml-6 mt-3'>Estágio no Tribunal Regional Eleitoral (TRE-MS)</h3>
          </div>
          <div className='flex items-center w-3/5 justify-start mr-10' data-aos='fade-left'>
            <p className='text-xl font-light text-left'>
              Suporte e manuntenção de equipamentos.  
            </p>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex ml-10 pb-12 mt-10 w-2/5 items-start justify-start flex-col' data-aos='fade-right'>
            <span className='text-xl text-black font-medium'>2018 - 2018</span>
            <h3 className='text-xl text-black font-medium ml-6 mt-3'>Estágio Advocacia-Geral da União (AGU)</h3>
          </div>
          <div className='flex items-center w-3/5 justify-start mr-10' data-aos='fade-left'>
            <p className='text-xl font-light text-left'>
              Analisar e propor melhorias/ajustes nos sistemas web, Auxiliar Coordenadores
              na otimização de processos digitais, se possível implementando rotinas web.
            </p>
          </div>
        </div>

        <div className='flex flex-row'>
          <div className='flex ml-10 pb-12 mt-10 w-2/5 items-start justify-start flex-col' data-aos='fade-right'>
            <span className='text-xl text-black font-medium'>2020 - 2020</span>
            <h3 className='text-xl text-black font-medium ml-6 mt-3'>Bootcamp Full Stack (Rocketseat) </h3>
          </div>
          <div className='flex items-center w-3/5 justify-start mr-10' data-aos='fade-left'>
            <p className='text-xl font-light text-left'>
              Treinamento intensivo utilizando as tecnologias mais modernas do mercado como ReactJS, React Native e NodeJS, com o uso de Typescript.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
