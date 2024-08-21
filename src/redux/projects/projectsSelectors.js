export const selectGetProjects = (state) => state.projectsStore.projects;
export const selectGetStatusLoading = (state) => state.projectsStore.isLoading;
export const selectGetStatusError = (state) => state.projectsStore.error;