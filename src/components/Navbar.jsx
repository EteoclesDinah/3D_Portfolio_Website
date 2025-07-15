import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">

    <NavLink
      to="/"
      className="w-18 h-18 object-contain"
    >
      <p className="blue-gradient_text">KRD</p>

    </NavLink>


  
    <nav className="flex gap-7 text-lg font-medium">
      <NavLink
        to="/about"
        className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
      >
        Projects
      </NavLink>
    </nav>
  
</header>


  )
}

export default Navbar
