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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            voluptatum id pariatur vitae laboriosam nostrum ratione sapiente
            suscipit ullam fuga, recusandae, voluptate dignissimos optio fugiat
            commodi hic laudantium. Iure, reprehenderit!
          </p>

          <div className="filter-box">
            <div className="filter-item">#React</div>
            <div className="filter-item">#React-native</div>
            <div className="filter-item">#Javascript</div>
          </div>
        </div>
      </div>
      <Projectslist projects={projects} />
      <div className="box-btnShowAll">
        <button className="button-ShowAll" onClick={clickBtnShowHideProjects}>
          {showProjects ? "Hide" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Projectspage;
