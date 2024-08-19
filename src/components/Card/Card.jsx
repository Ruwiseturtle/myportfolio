import React from 'react';
import './Card.css';

const Card = ({ project }) => {
  return (
    <div className='box-imageProject'>
          <img className='image-card' src={project.image} alt={project.title} />
          <p className='title-project'>{project.title }</p>
    </div>
  );
};

export default Card
