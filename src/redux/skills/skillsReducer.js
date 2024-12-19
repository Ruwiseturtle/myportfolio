import { createSlice } from "@reduxjs/toolkit";
import { getSkillsThunk } from "./skillsThunks";

const INITIAL_STATE = {
  skills: [],
  isLoading: false,
  error: null,
};

const skillsSlice = createSlice({
  name: "skills",
  initialState: INITIAL_STATE,
  // reducers: {
  //   setCurrentPage: (state, action) => {
  //     state.currentPage = action.payload;
  //   },
  // },
  extraReducers: (builder) =>
    builder
      //кейси для отримання каталогу скілів заданої сторінки
      .addCase(getSkillsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSkillsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skills = action.payload;
      })
      .addCase(getSkillsThunk.rejected, (state, action) => {
        state.isLoading = false;      
        state.error = action.payload;
      }),
});

// export const { setCurrentPage } = projectsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
