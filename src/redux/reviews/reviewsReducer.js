import { createSlice } from "@reduxjs/toolkit";
import { getReviewsThunk } from "./reviewsThunks";

const INITIAL_STATE = {
  reviews: [],
  isLoading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: INITIAL_STATE,
  // reducers: {
  //   setCurrentPage: (state, action) => {
  //     state.currentPage = action.payload;
  //   },
  // },
  extraReducers: (builder) =>
    builder
      //кейси для отримання каталогу reviews
      .addCase(getReviewsThunk.pending, (state) => {
        console.log("status pending reviews");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReviewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(getReviewsThunk.rejected, (state, action) => {
        console.log("status error reviews");
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const reviewsReducer = reviewsSlice.reducer;
