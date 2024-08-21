import { PER_PAGE } from "../../Services/GlobalVariables";
import projects from '../../data/Myprojects.json';

export const requestGetProjects = async (page) => {
  // const start = (page - 1) * PER_PAGE;
  // return projects.slice(start, start + PER_PAGE);

   const start = (page - 1) * PER_PAGE;
   const end = start + PER_PAGE;

   await new Promise((resolve) => setTimeout(resolve, 1000)); // 1000 мс = 1 секунда

   return projects.slice(start, end);
};

