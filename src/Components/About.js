import React from 'react'
import profile from '../assets/profile.jpg'

function About() {
  return (
    <div className='about' >
      <section className="about-section">
      <div className="about-container">
        {/* Left Side: Profile */}
        <div className="about-left">
          <img src={profile} alt="Profile" className="about-image" />
          <h2 className="tagline">Passionate Software Engineer</h2>
        </div>

        {/* Right Side: Bio and Highlights */}
        <div className="about-right">
          <h3>About Me</h3>
          <p>
            Hi! I'm Tarunteja Obbina, a dedicated software engineer with experience in building
            scalable and efficient solutions. I thrive in creating intuitive applications and
            solving challenging problems in the tech world.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h4>1.5 Years</h4>
              <p>Experience</p>
            </div>
            <div className="highlight-card">
              <h4>10+ Projects</h4>
              <p>Completed</p>
            </div>
            <div className="highlight-card">
              <h4>MEAN/MERN Stack</h4>
              <p>Specialized Skills</p>
            </div>
          </div>
          {/* Skills Section */}
          <div className="skills-section">
            <h4>Skills</h4>
            <div className="skills-grid">
              <span>React</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>MongoDB</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
              <span>Node.js</span>
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About