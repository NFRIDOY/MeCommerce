import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
            process.env.NODE_ENV === "production"
            ? `${process.env.LOCAL_SERVER_URL}`
            : `http://localhost:5000/api`,

        credentials: "include", // Include cookies with requests
    }),
    endpoints: (builder) => ({
        getProductsById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
        }),

        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),

        postUserLogin: builder.mutation({
            // how do I get the response from the server
            query: (user) => ({
                url: "/auth/login",
                method: "POST",
                body: user,
            }),
        }),

        postUserRegister: builder.mutation({
            query: (user) => ({
                url: "/auth/signup",
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const {
    useGetProductsByIdQuery,
    useGetProductsQuery,
    usePostUserLoginMutation,
    usePostUserRegisterMutation
} = baseApi;
