
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
  // createTransform,
} from "redux-persist";

// Очищення неправильного токена з localStorage
// const authData = localStorage.getItem("persist:auth");
// if (authData) {
//   const parsedData = JSON.parse(authData);
//   if (parsedData.token === "null") {
//     delete parsedData.token;
//     localStorage.setItem("persist:auth", JSON.stringify(parsedData));
//   }
// }

//ця ф-ція видаляє токен, якщо він null щоб він автоматично не записувався в сторедж
// const nullFilterTransform = createTransform(
//   // Перед записом у сховище
//   (inboundState) => {
//     if (inboundState.token === null) {
//       // Видаляємо `token`, якщо він null
//       const { token, ...rest } = inboundState;
//       return rest;
//     }
//     return inboundState;
//   },
//   // Перед відновленням стану
//   (outboundState) => outboundState,
//   { whitelist: ["auth"] } // Застосувати тільки до `auth`
// );

// Конфігурація для persistReducer у auth редукторі
const authPersistConfig = {
  key: "auth", // Ключ для збереження даних
  storage, // Тип сховища (localStorage у цьому випадку)
  whitelist: ["token"], // Тільки token зберігатиметься
  // transforms: [nullFilterTransform],
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
