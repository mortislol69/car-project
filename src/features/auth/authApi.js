import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/" }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (username) => ({
                url: `users?username=${username}`,
                method: "GET"
            })
        }),
        login: builder.query({
            query: ({ email, password }) => ({
                url: `users?email=${email}&password=${password}`,
                method: "GET"
            })
        }),
        register: builder.mutation({
            query: (user) => ({
                url: `users`,
                method: "POST",
                body: user
            })
        })
    })
})


export const { useLazyLoginQuery, useRegisterMutation, useGetUserQuery } = authApi