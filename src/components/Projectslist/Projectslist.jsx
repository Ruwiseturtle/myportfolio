import React from "react";

import './Projectslist.css';
import Card from '../Card/Card';
// import projects from '../../data/Myprojects.json';

const Projectslist = ({ projects }) => {

  // console.log(filterCriteria);

  return (
    // <div className="container-projects-list">
      <ul className="projects-list">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project, index) => (
            <Card key={index} project={project} />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </ul>
    // </div>
  );
};

export default Projectslist
