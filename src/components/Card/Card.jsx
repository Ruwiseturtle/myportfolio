import React from 'react';
import './Card.css';

const Card = ({ project }) => {
  return (
    <li>
      <div className="card">
        <img className="image-project"  src={project.image} alt={project.title} />
        <p className="title-project">{project.title}</p>
      </div>
    </li>
  );
};

export default Card
