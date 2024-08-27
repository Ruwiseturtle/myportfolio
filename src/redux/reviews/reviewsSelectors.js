export const selectGetReviews = (state) => state.reviewsStore.reviews;
export const selectGetStatusLoading = (state) => state.reviewsStore.isLoading;
export const selectGetStatusError = (state) => state.reviewsStore.error;
