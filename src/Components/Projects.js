import React from "react";
import shell from "../assets/shell.jpeg";
import chatbot from "../assets/chatbot.webp";
import dumbo from '../assets/dumbo-front.png'
import helka from '../assets/helka-front.png';
import financeTracker from '../assets/finance_tracker.png';
import jobquest from "../assets/jobquest-mock.png";

function Projects() {
  return (
    <div id="projects" className="grid">
      <h2 className="title">Projects</h2>
      <div className="projects grid projects-grid">
        <div className="project-card">
          <div className="jobquest wrapper">
            <h3 className="project-title">Job Quest</h3>
            <p className="project-description">
              A web app for tracking job applications, interviews, and company
              details, featuring SQL database integration and JWT-based
              authentication.
            </p>
            <div className="image-wrapper">
              <img className="jobquest-mock" src={jobquest} alt="" />
            </div>
            <div className="project-card-actions">
              <a
                style={{ textDecoration: "none", color: "#e4e4e5" }}
                href="https://github.com/iam-tarun/JobQuest"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">View Project</button>
              </a>
              <a style={{ textDecoration: "none" }} href="https://jobquest.tarunteja.dev" target="_blank" rel="noreferrer">
                
                <button className="button" >Live Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
              
              <div className="finance-tracker wrapper">
              <h3 className="project-title">Finance Tracker</h3>
              <p className="project-description">
              Track your expenses, manage budgets, and visualize your financial goals with ease. It offers intuitive insights, category-wise breakdowns to help you stay on top of your finances!
            </p>
            <div className="image-wrapper">
              <img className="jobquest-mock" src={financeTracker} alt="" />
            </div>
            <div className="project-card-actions">
            <a 
                style={{textDecoration: 'none', color: '#e4e4e5'}} 
                href='https://github.com/iam-tarun/finance-tracker' target='_blank' rel='noreferrer'>
              <button className='button' >
              View Project
              </button>
                </a>
              
            </div>
            
              </div>
            </div>
          <div className='project-card'>
  
              <div className="helka wrapper">
              <h3 className="project-title">Helka</h3>
              <p className="project-description">
              Helka provides secure personalised news. It can get relevant news based on keyword searches. News articles from all over the internet can be stored for future reference.
            </p>
            <div className="image-wrapper">
              <img className="helka-mock" src={helka} alt="helka web app" />
            </div>
            <div className="project-card-actions">
            <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/helka' target='_blank' rel='noreferrer'>

            <button className='button' >
            View Project
            </button>
              </a>
            </div>
            
              </div>
          </div>
          <div className="project-card">
              <div className="dumbo wrapper">
              <h3 className="project-title">Dumbo</h3>
              <p className="project-description">
              Document organizer and searches documents with tags specified to them. Automatic tags can be generated using Google OCR. Used PostgreSQL and Google Cloud storage.
            </p>
            <div className="image-wrapper">
              <img className="helka-mock" src={dumbo} alt="dumbo web app" />
            </div>
            <div className="project-card-actions">
            <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/dumbo' target='_blank' rel='noreferrer'>
            <button className='button' >
              View Project
            </button>
              </a>
            </div>
            
              </div>
          </div>
          <div className="project-card">
              <div className="planetbot wrapper">
              <h3 className="project-title">Planet Bot</h3>
              <p className="project-description">
              Developed a chatbot using TF-IDF and cosine similarity, achieving an initial accuracy of 83% in fetching relevant answers to user questions.
            </p>
            <div className="image-wrapper">
              <img className="helka-mock" src={chatbot} alt="dumbo web app" />
            </div>
            <div className="project-card-actions">
            <a 
              style={{textDecoration: 'none', color: '#e4e4e5'}} 
              href='https://github.com/iam-tarun/PlanetBot' target='_blank' rel='noreferrer'>
            <button className='button' >
              View Project
            </button>
              </a>
            </div>
            
              </div>
          </div>
          <div className="project-card">
              <div className="shell wrapper">
              <h3 className="project-title">Shell</h3>
              <p className="project-description">
              A fully functional C-based Linux shell, replicating standard shell commands and behavior. Supports built-in commands, external commands, and process management.
            </p>
            <div className="image-wrapper">
              <img className="helka-mock" src={shell} alt="shell" />
            </div>
            <div className="project-card-actions">
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
      </div>
    </div>
  );
}

export default Projects;
