import { createSlice } from "@reduxjs/toolkit";
import { getProjectsThunk } from "./projectsThunks";

const INITIAL_STATE = {
  projects: [],
  isLoading: false,
  error: null,
}; 

const projectsSlice = createSlice({
  name: "projects",
  initialState: INITIAL_STATE,
  // reducers: {
  //   setCurrentPage: (state, action) => {
  //     state.currentPage = action.payload;
  //   },
  // },
  extraReducers: (builder) =>
    builder
      //кейси для отримання каталогу проектів заданої сторінки
      .addCase(getProjectsThunk.pending, (state) => {
        console.log("status pending projects");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProjectsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;        
      })
      .addCase(getProjectsThunk.rejected, (state, action) => {
        console.log("status error projects");
        state.isLoading = false;
        state.error = action.payload;
      }),
});

// export const { setCurrentPage } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;