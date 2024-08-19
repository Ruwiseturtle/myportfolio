import React from 'react';
import './Projectslist.css';
import Card from '../Card/Card';
import projects from '../../data/Myprojects.json';

const Projectslist = () => {

  return (
    <div className="container-projects-list">
          {projects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
}

export default Projectslist
