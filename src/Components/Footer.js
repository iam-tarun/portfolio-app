import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="grid footer">
        <p className="leading">An OTT Creation</p>
        <div className="social-links grid">
          <a href="https://github.com/iam-tarun" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/taruntejaobbina" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://twitter.com/Tarun02184743" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="mailto:tarunteja2810@example.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
