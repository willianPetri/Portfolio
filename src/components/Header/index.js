import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  return (
    <nav 
    className="flex justify-between items-center h-16 bg-primary text-secondary 
    font-mono sticky top-0 z-50"
    role="navigation"
    >
      <Link 
        to="hero" 
        smooth={true} 
        spy={true} 
        offset={-70} 
        duration={800} 
        className='pl-8'
      >
        Willian Petri
      </Link>
      {/* <div className="px-4 cursor-pointer md-hidden">
      <svg 
          className="h-6 w-6" 
          fill="none" 
          stroke="currentColor"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg" 
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </div> */}
      <div className="flex items-center">
        <Link 
          to='skills' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={700} 
          onSetActive={() => setSkills(true)}
          onSetInactive={() => setSkills(false)} 
          className="p-4 mr-3"
        >
          Habilidades  
          <div className={`${skills === true ? "h-0.5 w-20 bg-secondary rounded" : 'hidden'}`} />        
        </Link>
        <Link 
          to='experience' 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={1000} 
          onSetActive={() => setExperience(true)} 
          onSetInactive={() => setExperience(false)}
          className="p-4 mr-5"
        >
          Experiências
          <div className={`${experience === true ? "h-0.5 w-20 bg-secondary rounded" : 'hidden'}`} />        
        </Link>
        <Link 
          to='portfolio' 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={1200} 
          onSetActive={() => setPortfolio(true)} 
          onSetInactive={() => setPortfolio(false)}
          className="p-4 mr-5"
        >
          Projetos
          <div className={`${portfolio === true ? "h-0.5 w-20 bg-secondary rounded" : 'hidden'}`} />        
        </Link>
        <a href='https://github.com/willianPetri' target="_blank" rel="noopener noreferrer"  className="font-semibold inline-block py-3 mr-5 text-secondary">
          <i className='fab fa-github text-lg leading-lg animate-bounce'/>
        </a>
        <a href='https://www.linkedin.com/in/willian-petri-84a935135/' target="_blank" rel="noopener noreferrer"  className="font-semibold inline-block py-3 mr-5 text-secondary">
          <i className='fab fa-linkedin text-lg leading-lg animate-bounce' />
        </a>        
      </div>
    </nav>
  )
}

export default Header
