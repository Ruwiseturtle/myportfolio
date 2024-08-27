
import projects from '../../data/Myprojects.json';

export const requestGetProjects = async ( showAllProjects ) => {
  return showAllProjects === true ? projects : projects.slice(0, 3);
};

