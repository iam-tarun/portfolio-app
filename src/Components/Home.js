import React from 'react'
import profile from '../assets/profile.jpg'
import ProjectPreview from './ProjectPreview'
import ft from '../assets/jobquest.png'

function Home() {

  const latestProject = {
    title: "Job Quest",
    description: "A web app for tracking job applications, interviews, and company details, featuring SQL database integration and JWT-based authentication.",
    image: ft, // Replace with your latest project image
    link: "https://github.com/your-profile/JobQuest"
  };


  return (
    <div className='home-section'>
      <div className='profile' >
          <div>
            <img className='profile-pic' src={profile} alt="tarun teja obbina profile pic" />
          </div>
          <div className='Profile Info' >
            <h1>Hi, I'm Tarun Teja Obbina</h1>
            <h2>Software Engineer | Full Stack Developer </h2>
            {/* short intro of me */}
            <h3>Passionate software engineer specializing in scalable, efficient application development.</h3>
          </div>
      </div>
      <div className='CTA' >
        <div>
          <div className="latest-project-container">
            <ProjectPreview
              title={latestProject.title}
              description={latestProject.description}
              image={latestProject.image}
              link={latestProject.link}
            />
          </div>
        </div>
        <button >
          <a style={{textDecoration: 'none', color: '#e4e4e5'}} href="./projects">View Projects</a>
        </button>
      </div>
      
    </div>
  )
}

export default Home