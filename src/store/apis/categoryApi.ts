import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category} from "../../pages/Categories.tsx";

export const categoryApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: builder => ({
        getCategories: builder.query<Category[], void>({
            providesTags: ['categories'],
            query: () => "/categories"
        }),
        addCategory: builder.mutation<void, Category>({
            invalidatesTags: ['categories'],
            query: (category) => ({
                url: "/categories",
                method: 'POST',
                body: category
            })
        }),
        deleteCategory: builder.mutation<void, string>({
            invalidatesTags: ['categories'],
            query: (categoryId) => ({
                url: "/categories/" + categoryId,
                method: 'DELETE'
            })
        })
    })
});

export const {useGetCategoriesQuery, useAddCategoryMutation, useDeleteCategoryMutation} = categoryApi;