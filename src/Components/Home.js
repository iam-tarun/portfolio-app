import React from 'react'
import profile from '../assets/profile.jpg'
import ProjectPreview from './ProjectPreview'
import ft from '../assets/finance_tracker.jpeg'

function Home() {

  const latestProject = {
    title: "Finance Tracker App",
    description: "A tool to manage expenses, track budgets, and visualize finances.",
    image: ft, // Replace with your latest project image
    link: "https://github.com/your-profile/finance-tracker"
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