import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-div' >
      <ul className='nav' >
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  )
}

export default Navbar