import React from "react";
import Loader from "../Loader/Loader";
import "./Projectslist.css";
import Card from "../Card/Card";
// import projects from '../../data/Myprojects.json';

const Projectslist = ({ projects, isLoading }) => {
  if (isLoading) {
    // Якщо йде завантаження, показуємо Loader
    return (
      <div className="loaderInProjectsPage">        
        <Loader />
      </div>
    );
  }

  if (Array.isArray(projects) && projects.length > 0) {
    // Якщо список проектів є і він не порожній, відображаємо проекти
    return (
      <div className="projects-list">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    );
  }

  // Якщо список проектів порожній або undefined/null, показуємо повідомлення
  return <p>No projects available</p>;
};

export default Projectslist;
