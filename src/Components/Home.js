import React from 'react'
import profile from '../assets/profile.jpg'
import ft from '../assets/jobquest-mock.png'

function Home() {

  const latestProject = {
    title: "Job Quest",
    description: "A web app for tracking job applications, interviews, and company details, featuring SQL database integration and JWT-based authentication.",
    image: ft, // Replace with your latest project image
    link: "https://github.com/your-profile/JobQuest"
  };


  return (
    <div id='home' className='grid'>
      
        <img className='profile-pic' src={profile} alt="tarun teja obbina profile pic" />

        <h1>Hi, I'm Tarun Teja Obbina</h1>
        <h2 className='home-heading' >Full Stack Developer </h2>
        {/* short intro of me */}
        <p className='short-intro leading' >Full Stack Developer who loves turning ideas into reality with Python, JavaScript, and SQL. Whether it's crafting sleek frontends with React & Angular or building powerful backends with Node.js & Spring Boot, I thrive on creating scalable, high-performance applications. I enjoy solving complex problems, optimizing data flows, and exploring new tech—always looking for the next exciting challenge!</p>
      
      <div className='CTA' >
        <h2 >Latest Project</h2>
        <div className='cta-image-wrapper' >
        <img src={latestProject.image} alt={latestProject.title}  />
        </div>
        <h3 className='CTA-title' >{latestProject.title}</h3>
        <p className="leading">{latestProject.description}</p>
      </div>
      <a className='a-button' style={{textDecoration: 'none', color: '#e4e4e5'}} href="./projects"><button className='button'  >
        View Projects
      </button></a>
    </div>
  
  )
}

export default Home