import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, currentUserThunk } from "./authThunks";
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
    setToken(state, action) {
      state.token = action.payload;
    },
    setAuthSwitchToShow(state, action) {
      state.authSwitchToShow = action.payload;
    },
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
        state.error = null;
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
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ---------- CURRENT USER ----------------
      .addCase(currentUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isAuthenticated = true;
        state.authSwitchToShow = AuthStatus.LogOut;
        state.error = null;
        
      })
      .addCase(currentUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = null;
        state.error = payload;
      }),

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
  setToken,
} = authSlice.actions;
