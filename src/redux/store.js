import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { projectsReducer } from "./projects/projectReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const authConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };


export const rootReducer = combineReducers({
  projectsStore: projectsReducer,
  //   auth: persistReducer(authConfig, authReducer),
});

const persistedReduser = persistReducer(rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
