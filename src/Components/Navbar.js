import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='site-nav grid' >
      <ul className='grid' >
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} >Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} >Projects</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} >About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} >Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar