import React from 'react'
import { Link } from 'react-router-dom'

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
          Habilidades
        </Link>
        <Link to='/' className="p-4 mr-5">
          Experiências
        </Link>
        <Link to='/' className="p-4 mr-5">
          Projetos
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
