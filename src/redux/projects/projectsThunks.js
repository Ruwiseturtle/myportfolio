import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetProjects } from "../../API/Projects/getProjects";

//санка для отримання даних проектів
export const getProjectsThunk = createAsyncThunk(
  "projects/get",
  async (showAllProjects, thunkAPI) => {
    try {
      const projectsData = await requestGetProjects(showAllProjects);
      // console.log(projectsData);
      return projectsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
