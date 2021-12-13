import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [skills, setSkills] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [experience, setExperience] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  return (
    <>     
      <nav className="fixed w-full z-50 top-0 md:h-16 flex flex-wrap items-center justify-between px-2 py-3 bg-primary text-secondary mb-3">
        <div className="container px-4 mx-auto flex flex-wrap justify-between">
          <div className="w-full relative flex pt-1 justify-between md:justify-start md:w-auto md:static md:block ">
            <Link
              to="hero"
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              className='pl-4 text-xl font-medium cursor-pointer'
            >
              Willian Petri
            </Link>
            <button
              className="text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className={`md:flex flex-grow ${toggle ? 'flex items-center justify-center' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className='inline-block cursor-pointer px-4 py-2'>
                <Link
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={700}
                  onSetActive={() => setSkills(true)}
                  onSetInactive={() => setSkills(false)}
                >
                  Habilidades
                  <div className={`${skills === true ? "h-0.5 w-20 bg-secondary rounded" : 'hidden'}`} />
                </Link>
              </li>
              <li className='inline-block cursor-pointer px-4 py-2'>
                <Link
                  to='experience'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onSetActive={() => setExperience(true)}
                  onSetInactive={() => setExperience(false)}
                >
                  Experiências
                  <div className={`${experience === true ? "h-0.5 w-20 bg-secondary rounded" : 'hidden'}`} />
                </Link>
              </li>
              <li className='inline-block cursor-pointer px-4 py-2'>
                <Link
                  to='portfolio'
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1200}
                  onSetActive={() => setPortfolio(true)}
                  onSetInactive={() => setPortfolio(false)}
                >
                  Projetos
                  <div className={`${portfolio === true ? "h-0.5 w-14 ml-4 md:ml-0 bg-secondary rounded" : 'hidden'}`} />
                </Link>
              </li>
              <li className='inline-block cursor-pointer px-4'>
                <a href='https://github.com/willianPetri' target="_blank" rel="noopener noreferrer" className="font-semibold inline-block py-3 mr-5 text-secondary">
                  <i className='fab fa-github text-lg leading-lg animate-bounce' />
                </a>
              </li>

              <li className='inline-block cursor-pointer px-4'>
                <a href='https://www.linkedin.com/in/willian-petri-84a935135/' target="_blank" rel="noopener noreferrer" className="font-semibold inline-block py-3 mr-5 text-secondary">
                  <i className='fab fa-linkedin text-lg leading-lg animate-bounce' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
    </>
  )
}

export default Header
