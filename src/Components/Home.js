import React from 'react'
import profile from '../assets/profile.jpg'
import ft from '../assets/jobquest.png'

function Home() {

  const latestProject = {
    title: "Job Quest",
    description: "A web app for tracking job applications, interviews, and company details, featuring SQL database integration and JWT-based authentication.",
    image: ft, // Replace with your latest project image
    link: "https://github.com/your-profile/JobQuest"
  };


  return (
    <div id='home' className='grid'>
      <div className='profile grid' >
            <img className='profile-pic' src={profile} alt="tarun teja obbina profile pic" />
    
            <h1>Hi, I'm Tarun Teja Obbina</h1>
            <h2>Software Engineer | Full Stack Developer </h2>
            {/* short intro of me */}
            <h3>Passionate software engineer specializing in scalable, efficient application development.</h3>
      </div>
      <div className='CTA grid' >
        <h2 >Latest Project</h2>
        <img src={latestProject.image} alt={latestProject.title}  />
        <h3>{latestProject.title}</h3>
        <p className="leading">{latestProject.description}</p>
      </div>
      <a className='a-button' style={{textDecoration: 'none', color: '#e4e4e5'}} href="./projects"><button className='button'  >
        View Projects
      </button></a>
    </div>
  
  )
}

export default Home