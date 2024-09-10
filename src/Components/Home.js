import React from 'react'
import profile_pic from '../assets/profile_pic.png'
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='home-section'>
      <div className='profile' >
          <img src={profile_pic} alt="profile pic" />
        <h1>Hi, I'm Tarunteja Obbina</h1>
        <p>A passionate data analyst based in Richardson, Texas. With a keen eye for detail and a knack for problem-solving, I specialize in Big Data Analytics, Data Visualizations and Machine Learning. My goal is to leverage data-driven insights to help organizations make informed decisions and achieve their objectives.
        </p>
      </div>
      <div className='action' >
          <h2><Typewriter options={{
                  strings: ['Data-Driven Storyteller', 'Numbers Ninja', 'Data Detective', 'Insight Engineer', 'Analytics Advocate'],
                  autoStart: true,
                  loop: 75
          }}/></h2>
          <div className='grid' >
            <a href="/projects"><button className='action-button' >View Projects</button></a>
          </div>
      </div>
    </div>
  )
}

export default Home