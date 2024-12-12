import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk } from "./authThunks";
import AuthStatus from "../../constants/userRolesEnum";

const INITIAL_STATE = {
  token: null,
  user: {
    login: null,
    email: null,
  },
  registered: false,
  authSwitchToShow: AuthStatus.LogIn,
  isLoading: false,
  error: null,
  switch: true,
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
      state.registered = false;
      state.authSwitchToShow = AuthStatus.LogIn;
      state.error = null;
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
        console.log("===================user=================");
        console.log(action.payload.user);
        console.log("====================================");
        state.isLoading = false;
        state.registered = true;
        state.authSwitchToShow = AuthStatus.Registered; //на сторінці авторизації показуємо логінізацію
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
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        console.log("user data ssssssssssssssssss");        
        console.log(action.payload.user);
        
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
export const { logOut, setAuthSwitchToShow } = authSlice.actions;
