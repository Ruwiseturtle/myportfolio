import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { projectsReducer } from "./projects/projectReducer";
import { skillsReducer } from "./skills/skillsReducer";
import { reviewsReducer } from "./reviews/reviewsReducer";
import { authReducer } from "./auth/authReducer";

import storage from "redux-persist/lib/storage"; // Імпорт сховища для persist

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

// Конфігурація для persistReducer у auth редукторі
const authPersistConfig = {
  key: "auth", // Ключ для збереження даних
  storage, // Тип сховища (localStorage у цьому випадку)
  whitelist: ["token"], // Тільки token зберігатиметься
};

// Обгортаємо authReducer в persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Об'єднуємо редуктори
export const rootReducer = combineReducers({
  projectsStore: projectsReducer,
  skillsStore: skillsReducer,
  reviewsStore: reviewsReducer,
  auth: persistedAuthReducer, // Використовуємо збережений auth редуктор
});

// Налаштування middleware для ігнорування persist дій
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ігноруємо persist дії
    },
  });

// Створюємо store з редуктором
export const store = configureStore({
  reducer: rootReducer, // Використовуємо редуктор з збереженим auth
  middleware,
});

// Створюємо persistor для керування збереженням
export const persistor = persistStore(store);
