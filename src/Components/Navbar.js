import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='site-nav grid' >
      <ul className='grid' >
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} >HOME</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} >PROJECTS</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} >ABOUT</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} >CONTACT</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar