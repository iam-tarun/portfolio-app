import React from "react";

function About() {
  return (
    <section id="about" className="grid">
      <h3 className="title about-me">About Me</h3>
      <p className="leading about-text">
        Hi! I'm Tarunteja Obbina, a dedicated software engineer with experience
        in building scalable and efficient solutions. I thrive in creating
        intuitive applications and solving challenging problems in the tech
        world.
      </p>

      <div className="highlights grid">
        <div id="highlight" className="highlight-card">
          <h3 className="exp">2.5 Years</h3>
          <p className="highlight-text">Experience</p>
        </div>
        <div id="highlight2" className="highlight-card">
          <h3 className="exp">5+ Projects</h3>
          <p className="highlight-text">Completed</p>
        </div>
        <div id="highlight3" className="highlight-card">
          <h3 className="exp">MEAN/SPA/LAMP stack</h3>
          <p className="highlight-text">Specialized</p>
        </div>
      </div>

      <div className="skill-title">Languages</div>
      <div className="skills-wrapper">
        <div className="skills-slide-left">
          <div className="icon">
            <i class="devicon-python-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-javascript-plain"></i>
          </div>
          <div className="icon">
            <i class="devicon-java-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-dart-plain-wordmark"></i>
          </div>
        </div>
        <div className="skills-slide-left">
          <div className="icon">
            <i class="devicon-python-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-javascript-plain"></i>
          </div>
          <div className="icon">
            <i class="devicon-java-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-dart-plain-wordmark"></i>
          </div>
        </div>
      </div>

      <div className="skill-title">Libraries & Frameworks</div>
      <div className="skills-wrapper">
        <div className="skills-slide-right">
        <div className="icon">
        <i class="devicon-wordpress-plain-wordmark"></i>
          
        </div>
        <div className="icon">
            <i class="devicon-php-plain"></i>
          </div>
          <div className="icon">
            <i class="devicon-react-original-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-angular-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-spring-original-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-vuejs-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-flutter-plain"></i>
          </div>
        </div>
        <div className="skills-slide-right">
        <div className="icon">
        <i class="devicon-wordpress-plain-wordmark"></i>
          
        </div>
        <div className="icon">
            <i class="devicon-php-plain"></i>
          </div>
          <div className="icon">
            <i class="devicon-react-original-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-angular-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-spring-original-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-vuejs-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-flutter-plain"></i>
          </div>
        </div>
      </div>
      <div className="skill-title">Technologies</div>
      <div className="skills-wrapper">
        <div className="skills-slide-left">
          <div className="icon">
            <i class="devicon-mysql-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-mongodb-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-postgresql-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-firebase-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-docker-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-jenkins-plain"></i>
          </div>
        </div>
        <div className="skills-slide-left">
          <div className="icon">
            <i class="devicon-mysql-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-mongodb-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-postgresql-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-firebase-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-docker-plain-wordmark"></i>
          </div>
          <div className="icon">
            <i class="devicon-jenkins-plain"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
