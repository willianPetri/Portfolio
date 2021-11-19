import React from 'react'
import { Link } from 'react-router-dom'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'

const Header = () => {
  return (
    <nav 
    className="flex justify-between items-center h-16 bg-primary text-secondary 
    font-mono relative"
    role="navigation"
    >
      <Link to="/" className='pl-8'>
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
      {/* colocar o hidden no className da div */}
      <div className="flex items-center">
        <Link to='/' className="p-4 mr-3">
          Quem Sou
        </Link>
        <Link to='/' className="p-4 mr-5">
          Projetos
        </Link>
        <a href='https://github.com/willianPetri' className="font-semibold inline-block py-3 mr-5 text-secondary">
          <i className='fab fa-github text-lg leading-lg animate-bounce'/>
          {/* <img src={github} alt="github" className='w-10 h-10 bg-secondary animate-bounce' /> */}
        </a>
        <a href='https://www.linkedin.com/in/willian-petri-84a935135/' className="font-semibold inline-block py-3 mr-5 text-secondary">
        <i className='fab fa-linkedin text-lg leading-lg animate-bounce' />
          {/* <img src={linkedin} alt="linkedin" className='w-10 h-10  animate-bounce' /> */}
        </a>        
      </div>
    </nav>
  )
}

export default Header
