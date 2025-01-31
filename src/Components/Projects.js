import React from 'react'
import helka from '../assets/helka.png'
import dumbo from '../assets/dumbo.png'
import shell from '../assets/shell.jpeg'
import chatbot from '../assets/chatbot.jpeg'
import ft from '../assets/finance_tracker.jpeg'
import jq from '../assets/jobquest.png'

function Projects() {
  return (
    <div id='projects' className='grid'>
        <h2 className='title' >
          Projects
        </h2>
        <div className='projects grid projects-grid'>
        <div className='project-card'>
              <img className='project-img' src={jq} alt='job quest' />
              <h3>Job Quest</h3>
              <p className='leading' >A web app for tracking job applications, interviews, and company details, featuring SQL database integration and JWT-based authentication.</p>
              <p className='leading' >Technologies: Spring Boot, Angular, SQL</p><br />
              <a 
                style={{textDecoration: 'none', color: '#e4e4e5'}} 
                href='https://github.com/iam-tarun/JobQuest' target='_blank' rel='noreferrer'><button className='button' >
                View Project
              </button></a>
        </div>
          <div className='project-card'>
              <img className='project-img' src={ft} alt='finance tracker' />
              <h3>Finance Tracker</h3>
              <p className='leading' >Track your expenses, manage budgets, and visualize your financial goals with ease. It offers intuitive insights, category-wise breakdowns to help you stay on top of your finances!</p>
              <p className='leading' >Technologies: Flutter, Firebase, Dart</p><br />
                <a 
                style={{textDecoration: 'none', color: '#e4e4e5'}} 
                href='https://github.com/iam-tarun/finance-tracker' target='_blank' rel='noreferrer'>
              <button className='button' >
              View Project
              </button>
                </a>
            </div>
          <div className='project-card'>
            <img className='project-img' src={helka} alt='helka' />
            <h3>Helka</h3>
            <p className='leading' >Helka provides secure personalised news. It can get relevant news based on keyword searches. News articles from all over the internet can be stored for future reference.</p>
            <p className='leading' >Technologies: React.js, Node.js, Express.js, CSS, JavaScript, MongoDB</p>
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/helka' target='_blank' rel='noreferrer'>

            <button className='button' >
            View Project
            </button>
              </a>
          </div>
          <div className="project-card">
            <img className='project-img' src={dumbo} alt='dumbo' />
            <h3>Dumbo</h3>
            <p className='leading' >Document organizer and searches documents with tags specified to them. Automatic tags can be generated using Google OCR. Used PostgreSQL and Google Cloud storage.</p>
            <p className='leading' >Technologies: Django, Python, Google cloud Platform, PostgreSQL, HTML, CSS</p>
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/dumbo' target='_blank' rel='noreferrer'>
            <button className='button' >
              View Project
            </button>
              </a>
          </div>
          <div className="project-card">
            <img className='project-img' src={chatbot} alt='shell' />
            <h3>Planet Bot</h3>
            <p className='leading' >Developed a chatbot using TF-IDF and cosine similarity, achieving an initial accuracy of 83% in fetching relevant answers to user questions.</p>
            <p className='leading' >Technologies: Python, Pytorch, Transformer Architecture</p><br />
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/PlanetBot' target='_blank' rel='noreferrer'>
            <button className='button' >
              View Project
            </button>
              </a>
          </div>
          <div className="project-card">
            <img className='project-img' src={shell} alt='shell' />
            <h3>Shell</h3>
            <p className='leading' >A fully functional C-based Linux shell, replicating standard shell commands and behavior. Supports built-in commands, external commands, and process management.</p>
            <p className='leading' >Technologies: C</p><br />
              <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/Linux-shell' target='_blank' rel='noreferrer'>
            <button className='button' >
              View Project
            </button>
              </a>
          </div>
        </div>
    </div>
  )
}

export default Projects