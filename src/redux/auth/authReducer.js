import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk } from "./authThunks";
import AuthStatus from "../../constants/userRolesEnum";

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    login: null,
  },
  isAuthenticated: false, //чи зайшов користувач під своїм паролем
  authSwitchToShow: AuthStatus.LogIn,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    logOut(state) {
      state.token = null;
      state.user = {
        login: null,
        email: null,
      };
      state.isAuthenticated = false; //чи зайшов користувач під своїм паролем
      state.authSwitchToShow = AuthStatus.LogIn; // який компонент показувати на сторінці авторизації (signin чи signup)
      state.error = null;
    },
    setAuthSwitchToShow(state, action) {
      state.authSwitchToShow = action.payload;
    },
    setUserLoginedWithToken(state, action) {
      state.token = action.token;
      state.user = action.user;
      state.isAuthenticated = true;
      state.authSwitchToShow = AuthStatus.LogOut;
    },
    setCurrentUserWithToken(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authSwitchToShow = AuthStatus.LogOut;
      state.error = null;
    }
  },
  extraReducers: (builder) =>
    builder
      // ---------- REGISTER USER ----------------
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authSwitchToShow = AuthStatus.LogIn; //на сторінці авторизації показуємо логінізацію
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ---------- LOGIN USER ----------------
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.authSwitchToShow = AuthStatus.LogOut;
        state.token = action.payload.token;
        state.user = action.payload.user;
        
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;       
        
      })

  
  // // ---------- REFRESH USER ----------------
  // .addCase(refreshThunk.pending, (state) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(refreshThunk.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.authenticated = true;
  //   state.user = action.payload;
  // })
  // .addCase(refreshThunk.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // }),
});

export const authReducer = authSlice.reducer;
export const {
  logOut,
  setAuthSwitchToShow,
  setUserLoginedWithToken,
  setCurrentUserWithToken,
} = authSlice.actions;
