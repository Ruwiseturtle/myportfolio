import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetProjects } from "../../API/Projects/getProjects";

//санка для отримання даних проектів заданої сторінки
export const getProjectsThunk = createAsyncThunk(
  "projects/get",
  async (page, thunkAPI) => {
    try {
      const projectsData = await requestGetProjects(page);
      // console.log(projectsData);
      return projectsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
