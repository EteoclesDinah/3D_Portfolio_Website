import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">

      <NavLink
        to="/"
        className="w-12 h-12 rounded-lg bg-white items-center justify-center flex font-bold shadow-md object-contain"
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

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
        >
          Contact
        </NavLink>
      </nav>
  
    </header>

  );
};

export default Navbar;
