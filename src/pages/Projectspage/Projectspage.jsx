import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../../redux/projects/projectsSelectors";
import * as thunks from "../../redux/projects/projectsThunks";
import "./Projectspage.css";
import Projectslist from "../../components/Projectslist/Projectslist";
import { useTranslation } from "react-i18next";

const Projectspage = () => {
  const [showProjects, setShowProjects] = useState(false);
  const { t } = useTranslation();
  
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
            {/* текст "Мої" */}
            <p className="myprojects-text-white">{t("Projects.My")}</p>
            {/* текст "Проекти" */}
            <p className="myprojects-text-blue">{t("Projects.Projects")}</p>
          </div>

          <p className="myprojects-text-aboutprojects">
            {/* текст "про сторінку Проекти" */}
            {t("Projects.Description projects")}           
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
            {showProjects ? t("Projects.Hide") : t("Projects.Show All")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projectspage;
