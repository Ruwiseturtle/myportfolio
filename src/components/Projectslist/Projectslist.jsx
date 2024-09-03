import React from "react";
import Loader from "../Loader/Loader";
import "./Projectslist.css";
import Card from "../Card/Card";
// import projects from '../../data/Myprojects.json';

const Projectslist = ({ projects, isLoading }) => {
  return (
    <ul className="projects-list">
      {isLoading ? (
        <Loader className="loader" />
      ) : Array.isArray(projects) && projects.length > 0 ? (
        projects.map((project, index) => <Card key={index} project={project} />)
      ) : (
        <p>No projects available</p>
      )}
    </ul>
  );
};

export default Projectslist;