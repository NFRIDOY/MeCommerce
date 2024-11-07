import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
            process.env.NODE_ENV === "production"
            ? `https://mecommerce-server.vercel.app/api`
            : `http://localhost:5000/api`,

        credentials: "include", // Include cookies with requests
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/product",
                method: "GET",
            }),
        }),

        getProductsById: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET",
            }),
        }),

        getCategories: builder.query({
            query: () => ({
                url: "/category",
                method: "GET",
            }),
        }),

        getCategoryById: builder.query({
            query: (id) => ({
                url: `/category/${id}`,
                method: "GET",
            }),
        }),

        postCategory: builder.mutation({
            query: (category) => ({
                url: `/category`,
                method: "POST",
                body: category,
            }),
        }),

        postProduct: builder.mutation({
            query: (product) => ({
                url: `/product`,
                method: "POST",
                body: product,
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
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
    usePostCategoryMutation,
    usePostProductMutation,
    usePostUserLoginMutation,
    usePostUserRegisterMutation
} = baseApi;
