import React from 'react';
import './Card.css';
import imageHref from '../../assets/images/href.png';

const Card = ({ project }) => {
  return (
    <li>
      <div className="card">
        <img
          className="image-project"
          src={project.image}
          alt={project.title}
        />
        <p className="title-project">{project.title}</p>
        <a
          href="https://www.instagram.com/vychovanetcruslana/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className='box-href-to-project'>
            <img className='image-href'
              src={imageHref}
              alt="Instagram logo"
            />
            <span>Follow me on Instagram</span>
          </div>
        </a>
      </div>
    </li>
  );
};

export default Card
