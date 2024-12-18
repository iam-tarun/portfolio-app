import React from 'react'
import helka from '../assets/helka.png'
import dumbo from '../assets/dumbo.png'
import shell from '../assets/shell.jpeg'
import chatbot from '../assets/chatbot.jpeg'
import ft from '../assets/finance_tracker.jpeg'

function Projects() {
  return (
    <div className='projects-section'>
        <h2 style={{color: '#e4e4e5'}} >
          Projects
        </h2>
        <div className='projects'>
        <div className='project-card'>
              <img className='project-img' src={ft} alt='job quest' />
              <h3>Job Quest</h3>
              <p>A web app for tracking job applications, interviews, and company details, featuring SQL database integration and JWT-based authentication.</p>
              <p>Technologies: Spring Boot, Angular, SQL</p><br />
              <button >
                <a 
                style={{textDecoration: 'none', color: '#e4e4e5'}} 
                href='https://github.com/iam-tarun/JobQuest' target='_blank' rel='noreferrer'>View Project</a>
              </button>
            </div>
          <div className='project-card'>
              <img className='project-img' src={ft} alt='finance tracker' />
              <h3>Finance Tracker</h3>
              <p>Track your expenses, manage budgets, and visualize your financial goals with ease. It offers intuitive insights, category-wise breakdowns to help you stay on top of your finances!</p>
              <p>Technologies: Flutter, Firebase, Dart</p><br />
              <button >
                <a 
                style={{textDecoration: 'none', color: '#e4e4e5'}} 
                href='https://github.com/iam-tarun/finance-tracker' target='_blank' rel='noreferrer'>View Project</a>
              </button>
            </div>
          <div className='project-card'>
            <img className='project-img' src={helka} alt='helka' />
            <h3>Helka</h3>
            <p>Helka provides secure personalised news. It can get relevant news based on keyword searches. News articles from all over the internet can be stored for future reference.</p>
            <p>Technologies: React.js, Node.js, Express.js, CSS, JavaScript, MongoDB</p>
            <button >
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/helka' target='_blank' rel='noreferrer'>View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img className='project-img' src={dumbo} alt='dumbo' />
            <h3>Dumbo</h3>
            <p>Document organizer and searches documents with tags specified to them. Automatic tags can be generated using Google OCR. Used PostgreSQL and Google Cloud storage.</p>
            <p>Technologies: Django, Python, Google cloud Platform, PostgreSQL, HTML, CSS</p>
            <button >
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/dumbo' target='_blank' rel='noreferrer'>View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img className='project-img' src={chatbot} alt='shell' />
            <h3>Planet Bot</h3>
            <p>Developed a chatbot using TF-IDF and cosine similarity, achieving an initial accuracy of 83% in fetching relevant answers to user questions.</p>
            <p>Technologies: Python, Pytorch, Transformer Architecture</p><br />
            <button >
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/PlanetBot' target='_blank' rel='noreferrer'>View Project</a>
            </button>
          </div>
          <div className="project-card">
            <img className='project-img' src={shell} alt='shell' />
            <h3>Shell</h3>
            <p>A fully functional C-based Linux shell, replicating standard shell commands and behavior. Supports built-in commands, external commands, and process management.</p>
            <p>Technologies: C</p><br />
            <button >
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/Linux-shell' target='_blank' rel='noreferrer'>View Project</a>
            </button>
          </div>
          
        </div>
    </div>
  )
}

export default Projects