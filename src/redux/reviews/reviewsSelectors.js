export const selectGetReviews = (state) => state.reviewsStore.reviews;
export const selectGetStatusLoadingRewiews = (state) => state.reviewsStore.isLoading;
export const selectGetStatusError = (state) => state.reviewsStore.error;
