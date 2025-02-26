import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import {
  fetchRegisterUser,
  requestLogin,
  requestLogout,
  requestGetCurrentUser
} from "../../API/Auth/fetchRegisterUser";

//санка для реєстрації
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const authData = await fetchRegisterUser(formData);
       
      Notify.success("You have registered. To access your account, please log in.");
      return authData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД

    } catch (error) {
      Notify.failure("Enter the correct data in the form!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


//санка для логінізації
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await requestLogin(data);
      console.log("loginThunk");
      console.log(result);
      
           
      return result;
    } catch ({ response }) {
       Notify.info(response.data.msg);
      return rejectWithValue(response.data);
    }
  }
);


//санка для розлогінізації (користувач виходить із системи)
export const logOutThunk = createAsyncThunk(
  "auth/logOut",
  async (formData, thunkAPI) => {
 
    try {
      const response = await requestLogout(); 
     
      return response; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      Notify.failure(error.code);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//санка для отримання потоного користувача
export const currentUserThunk = createAsyncThunk(
  "auth/current",
  async (formData, thunkAPI) => {
    try {      
   
      const result = await requestGetCurrentUser(formData.token);

      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);


// export const refreshThunk = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth.token;

//     try {
//       setToken(token);
//       const authData = await requestGetUser();

//       return authData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: (_, thunkAPI) => {
//       const state = thunkAPI.getState();
//       const token = state.auth.token;

//       if (!token) return false;
//       return true;
//     },
//   }
// );
