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
        <p className="text-framework">{project.frameworks}</p>
        <a
          href="https://www.instagram.com/vychovanetcruslana/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="box-href-to-project">
            <img className="image-href" src={imageHref} alt="Instagram logo" />
            <span className='title-text-card'>{project.title}</span>
          </div>
        </a>
      </div>
    </li>
  );
};

export default Card
