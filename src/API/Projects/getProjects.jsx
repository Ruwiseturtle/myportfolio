import { PER_PAGE } from "../../Services/GlobalVariables";
import projects from '../../data/Myprojects.json';

export const requestGetProjects = async (page) => {
  const start = (page - 1) * PER_PAGE;
  return projects.slice(start, start + PER_PAGE);
};

