import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from '../../redux/projects/projectsSelectors';
import * as thunks from '../../redux/projects/projectsThunks';
import './Projectslist.css';
import Card from '../Card/Card';
// import projects from '../../data/Myprojects.json';

const Projectslist = () => {
  const [showProjects, setShowProjects] = useState(false);

  const dispatch = useDispatch();
  const projects = useSelector(selectors.selectGetProjects);

  const clickBtnShowHideProjects = () => {
    setShowProjects(!showProjects);
  };

  useEffect(() => {
    dispatch(thunks.getProjectsThunk(showProjects));
  }, [dispatch, showProjects]);

  // console.log(filterCriteria);
  
  return (
    <div className="container-projects-list">
      <ul className="projects-list">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project, index) => (
            <Card key={index} project={project} />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </ul>
      <div className="box-btnShowAll">
        <button className="button-ShowAll" onClick={clickBtnShowHideProjects}>
          {showProjects ? "Hide" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Projectslist
