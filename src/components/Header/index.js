import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav 
    className="flex justify-between items-center h-16 bg-primary text-secondary 
    relative font-mono"
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
      <div className="pr-8 md-block ">
        <Link to='/' className="p-4">
          Quem Sou
        </Link>
        <Link to='/' className="p-4">
          Projetos
        </Link>
        <a href="https://github.com/willianPetri" className='p-4'>
          Github
        </a>
        <a href="https://www.linkedin.com/in/willian-petri-84a935135" className='p-4'>
          LinkedIn
        </a>        
      </div>
    </nav>
  )
}

export default Header
