import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import authSlice from "./auth/authSlice";
import { usersApi } from "./users/usersApi";
import { carsApi } from "./cars/carsApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [carsApi.reducerPath]: usersApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
        authApi.middleware, 
        usersApi.middleware,
        carsApi.middleware
    )
})