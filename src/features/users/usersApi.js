import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8800/"}),
    endpoints: builder => ({
        contact: builder.mutation({
            query: (email) => ({
                url: `contact`,
                method: "POST",
                body: {email}
            })
        })
    })
})

export const {useContactMutation} = usersApi