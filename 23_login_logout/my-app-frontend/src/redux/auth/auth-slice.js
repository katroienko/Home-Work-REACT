import { createSlice } from "@reduxjs/toolkit";
import { pending, rejected } from "../../shared/lib/redux";
import { registerUser, loginUser } from "./auth-thunks";

export const selectAuthSuccess = store => store.auth.success;
export const selectIsLogin = store => store.auth.success;

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (store) => {
            store.user = null;
            store.token = null;
            store.success = false;
            store.error = null;
            store.loading = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, pending)
            .addCase(registerUser.rejected, rejected)
            .addCase(registerUser.fulfilled, (store) => {
                store.loading = false;
                store.success = true;
            })
            .addCase(loginUser.pending, pending)
            .addCase(loginUser.rejected, rejected)
            .addCase(loginUser.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.success = true;
                store.token = payload.token;
                store.user = payload.user;
            })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
