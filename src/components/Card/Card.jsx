import React from 'react';
import './Card.css';

const Card = ({ project }) => {
  return (
    <div className='box-imageProject'>
      <img className='image-card' src={project.image} alt={project.title} />
    </div>
  );
};

export default Card
