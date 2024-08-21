import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as selectors from '../../redux/projects/projectsSelectors';
import * as thunks from '../../redux/projects/projectsThunks';
import { setCurrentPage } from '../../redux/projects/projectReducer';
import './Projectslist.css';
import Card from '../Card/Card';
import projects from '../../data/Myprojects.json';

const Projectslist = () => {

  return (
    <div className="container-projects-list">
      <ul className="projects-list">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </ul>
      <div className="box-btnShowAll">
        <button className="button-ShowAll">Show All</button>
      </div>
    </div>
  );
}

export default Projectslist
