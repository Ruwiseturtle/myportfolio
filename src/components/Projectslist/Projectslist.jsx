import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as selectors from '../../redux/projects/projectsSelectors';
import * as thunks from '../../redux/projects/projectsThunks';
// import { setCurrentPage } from '../../redux/projects/projectReducer';
import './Projectslist.css';
import Card from '../Card/Card';
import projects from '../../data/Myprojects.json';

const Projectslist = () => {
    const dispatch = useDispatch();
  const currentPage = useSelector(selectors.selectCurrentPage);
  const projects1 = useSelector(selectors.selectGetProjects);
  console.log(currentPage);
  console.log(projects1);
  
  useEffect(() => {
    dispatch(thunks.getProjectsThunk(currentPage));
  }, [dispatch, currentPage]);

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
