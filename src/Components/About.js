import React from 'react'
import profile from '../assets/profile.jpg'

function About() {
  return (
      <section id="about" className="grid">
    
        
          <img src={profile} alt="Profile" className="about-image" />
          <h2 className="tagline">Passionate Software Engineer</h2>
        

        
        
          <h3>About Me</h3>
          <p className="leading" >
            Hi! I'm Tarunteja Obbina, a dedicated software engineer with experience in building
            scalable and efficient solutions. I thrive in creating intuitive applications and
            solving challenging problems in the tech world.
          </p>

            <div id='highlight' className="highlight-card">
              <h3 className="exp" >1.5 Years</h3>
              <p>Experience</p>
            </div>
            <div id='highlight2' className="highlight-card">
              <h3 className="exp" >5+ Projects</h3>
              <p>Completed</p>
            </div>
            <div id='highlight3' className="highlight-card">
              <h3 className="exp" >MEAN/MERN Stack, Spring Boot</h3>
              <p>Specialized Skills</p>
            </div>
          
            <h4>Skills</h4>
            
            <div className='skills-wrapper' >
            <h4>Programming Languages</h4>
              <div id='skills' className="skills-grid-1">
                <div>Python</div>
                <div>JavaScript</div>
                <div>Java</div>
                <div>Dart</div>
              </div>
            </div>
            <div className='skills-wrapper' >
            <h4>Libraries & Frameworks</h4>
              <div id='skills' className="skills-grid-2">
                <div>React</div>
                <div>Angular</div>
                <div>Node.js</div>
                <div>SpringBoot</div>
                <div>Vue.js</div>
                <div>Flutter</div>
              </div>
            </div>
            <div className='skills-wrapper' >
            <h4>Technologies</h4>
              <div id='skills' className="skills-grid-3">
                <div>MySQL</div>
                <div>MongoDB</div>
                <div>PostgreSQL</div>
                <div>Firebase</div>
                <div>Docker</div>
                <div>Jenkins</div>
              </div>
            </div>
    </section>
  )
}

export default About