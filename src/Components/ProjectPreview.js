import React from 'react';
import './ProjectPreview.css';

const ProjectPreview = ({ title, description, image, link }) => {
  return (
    <div className="project-preview">
      <p>Latest Project</p>
      {/* Project Image */}
      <img src={image} alt={title} className="project-image" />

      {/* Project Info */}
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectPreview;
