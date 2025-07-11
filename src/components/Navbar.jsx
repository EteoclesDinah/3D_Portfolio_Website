import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="relative flex items-center justify-between bg-white p-4 shadow">

    <NavLink
      to="/"
      className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
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
