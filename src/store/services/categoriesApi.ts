import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category} from '../types';
import {BASE_URL} from '../base';

export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery(
    {baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query() {
        return '/api/categories';
      }
    })
  })
});

export const {useGetCategoriesQuery} = categoryApi;
