import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { projectsReducer } from "./projects/projectReducer";
import storage from "redux-persist/lib/storage"; 

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

// Налаштування для persistReducer
const persistConfig = {
  key: "root", // Ключ для збереження стану
  storage,     // Тип сховища
};

export const rootReducer = combineReducers({
  projectsStore: projectsReducer,
  //   auth: persistReducer(authConfig, authReducer),
});

const persistedReduser = persistReducer(persistConfig, rootReducer);

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
