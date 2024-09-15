import React from 'react'
import chatbot from '../assets/chatbot.jpeg'
import customerSegmentation from '../assets/customer-segmentation.jpeg'
import sceneRecognition from '../assets/scene-recognition.jpeg'
import warp from '../assets/warp.jpeg'
import shell from '../assets/shell.jpeg'
import trendSpotter from '../assets/trend-spotter.jpeg'
import airp from '../assets/airp.jpeg'

function Projects() {
  return (
    <div className='projects-section'>
        
          
          <div className="projects">
          <div className='card'>
            <div className="card-image">
              <img src={chatbot} alt="chatbot" />
            </div>
              <div className="card-content">
              <h2 className='project-title' >Planet bot</h2>
              <p className='project-description' >Developed a chatbot using TF-IDF and cosine similarity, achieving an initial accuracy of 83% in fetching relevant answers to
user questions.</p>
              </div>
              <div className="card-action">
              <a href="https://colab.research.google.com/drive/1b78Wcpdtfn2_7qMpB4WBaXRfXAtm9glY?usp=sharing" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
              </div>
          </div>
          <div className='card' >
            <div className="card-image">
                <img src={customerSegmentation} alt="customer segmentation" />
              </div>
                <div className='card-content' >
                  <h2 className='project-title' >Customer Segmentation</h2>
                  <p className='project-description' >Analyzed over 1 million customer records and purchase history to identify and segment key customer groups.</p>
                  </div>
                <div className='card-action' >
                <a href="https://github.com/iam-tarun/Customer-segmentation-Pyspark" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
                </div>
          </div>
          <div className="card">
            <div className="card-image">
                  <img src={sceneRecognition} alt="scene recognition" />
                </div>
                  <div className="card-content">
                  <h2 className='project-title' >Scene Recognition</h2>
                  <p className='project-description' >Trained a deep learning model using the ResNet architecture on the MIT Indoor 67 dataset in Google Colab, utilizing GPU
acceleration for optimized processing.</p>
                  </div>
                  <div className="card-action">
                  <a href="https://github.com/iam-tarun/Resnet-Implementation" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
                  </div>
          </div>
          <div className="card">
            <div className="card-image">
                    <img src={warp} alt="WARP" />
                  </div>
                   <div className="card-content">
                   <h2 className='project-title' >WARP</h2>
                    <p className='project-description' >WARP is a highly versatile model that can generate realistic talking videos with audio and lip synchronization. It's aim is to personalise indirect communication and make it a touch more interesting.</p>
                   </div>
                    <div className="card-action">
                    <a href="https://github.com/iam-tarun/Woven-Artificial-Profile-WARP-Face-Video-Synthesis-from-Profile-and-Audio" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
                    </div>
            </div>
          
          <div className="card">
            <div className="card-image">
                <img src={shell} alt="shell" />
              </div>
              <div className="card-content">
              <h2 className='project-title' >Shell</h2>
              <p className='project-description' >A fully functional C-based Linux shell, replicating standard shell commands and behavior. Supports built-in commands, external commands, and process management.</p>
              </div>
              <div className="card-action">
              <a href="https://github.com/iam-tarun/Linux-shell" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
              </div>
          </div>
          <div className="card">
          <div className="card-image">
                <img src={trendSpotter} alt="trend spotter" />
              </div>
              <div className="card-content">
              <h2 className='project-title' >Trend Spotter</h2>
              <p className='project-description' >Enabled real-time tracking of trending names using Kibana, providing insights into popular topics and enhancing news
analysis capabilities.</p>
              </div>
              <div className="card-action">
              <a href="https://github.com/iam-tarun/pyspark-kafka-ELK-pipeline" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
              </div>
          </div>
          <div className="card">
          <div className="card-image">
                <img src={airp} alt="air passenger analysis" />
              </div>
              <div className="card-content">
              <h2 className='project-title' >Air Passenger Analysis</h2>
              <p className='project-description' >The project involves data preprocessing, model training, and evaluation, showcasing the power of SARIMA in capturing seasonality and trends within the airline passenger dataset.</p>
              </div>
              <div className="card-action">
              <a href="https://github.com/iam-tarun/air-passenger-forecast-sarima" target='_blank' rel="noreferrer"><button className='card-button' >Learn More</button></a>
              </div>
          </div>

          </div>
    </div>
  )
}

export default Projects