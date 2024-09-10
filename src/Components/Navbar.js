import React from 'react'

function Navbar() {
  return (
    <div className='nav-div' >
      <ul className='nav' >
        <li><a href="/">HOME</a></li>
        <li><a href="/projects">PROJECTS</a></li>
        <li><a href="/about">ABOUT</a></li>
      </ul>
    </div>
  )
}

export default Navbar