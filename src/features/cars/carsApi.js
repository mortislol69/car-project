import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const carsApi = createApi({
    reducerPath: "carsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8800/"}),
    endpoints: builder => ({
        getCars: builder.query({
            query: () => "cars"
        })
    })
})

export const {useGetCarsQuery} = carsApi