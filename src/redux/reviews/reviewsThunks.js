import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetReviews } from "../../API/Projects/getRewievs";

//санка для отримання даних проектів
export const getReviewsThunk = createAsyncThunk(
  "projects/get",
  async (_, thunkAPI) => {
    try {
      const reviewsData = await requestGetReviews();
      // console.log(projectsData);
      return reviewsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
