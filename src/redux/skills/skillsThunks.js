import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetSkills } from "../../API/Projects/getSkills";

//санка для отримання даних проектів
export const getSkillsThunk = createAsyncThunk(
  "skills/get",
  async (_, thunkAPI) => {
    try {
      const skillsData = await requestGetSkills(requestGetSkills);
      // console.log(skillsData);
      return skillsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
