import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../redux/projects/projectsSelectors";
import * as thunks from "../../redux/projects/projectsThunks";
import "./Projectspage.css";
import Projectslist from "../../components/Projectslist/Projectslist";

const Projectspage = () => {
  const [showProjects, setShowProjects] = useState(false);

  const dispatch = useDispatch();
  const projects = useSelector(selectors.selectGetProjects);
  const isLoading = useSelector(selectors.selectGetStatusLoading);
  
  const clickBtnShowHideProjects = () => {
    setShowProjects(!showProjects);
  };

   useEffect(() => {
     dispatch(thunks.getProjectsThunk(showProjects));
   }, [dispatch, showProjects]);
  
  return (
    <div className="projects-container">
      <div className="fixed-container-text">
        <div className="box-for-text-project">
          <div className="title-myProjects">
            <p className="myprojects-text-white">My</p>
            <p className="myprojects-text-blue">Projects</p>
          </div>

          <p className="myprojects-text-aboutprojects">
            List of my projects created with tools like HTML, CSS, React, Redux.
            There are individual projects, such as this portfolio site, and team
            projects with very charming project colleagues, reviews of which are
            also available on this site.
          </p>

          <div className="filter-box">
            <div className="filter-item">#React</div>
            <div className="filter-item">#React-native</div>
            <div className="filter-item">#Javascript</div>
          </div>
        </div>
      </div>

      <Projectslist projects={projects} isLoading={isLoading} />
      {!isLoading && (
        <div className="box-btnShowAll">
          <button className="button-ShowAll" onClick={clickBtnShowHideProjects}>
            {showProjects ? "Hide" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projectspage;
