import { createSelector } from "@reduxjs/toolkit";

const selectAuth = state => state.auth;

export const selectToken = createSelector(selectAuth, (auth) => auth.token);
export const selectUser = createSelector(selectAuth, (auth) => auth.user);
export const selectIsAuthenticated = createSelector(selectAuth, (auth) => auth.isAuthenticated);
export const selectIsLoading = createSelector(selectAuth,(auth) => auth.isLoading);
export const selectError = createSelector(selectAuth, (auth) => auth.error);
export const selectAuthSwitchToShow = createSelector(selectAuth, (auth) => auth.authSwitchToShow);

