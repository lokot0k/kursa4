import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Subcategory} from '../types';
import {BASE_URL} from '../base';

export const subcategoryApi = createApi({
  reducerPath: 'subcategory',
  baseQuery: fetchBaseQuery(
    {baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getSubcategories: build.query<Subcategory[], string>({
      query(categoryId) {
        return `/api/categories/${categoryId}/subcategories`;
      }
    })
  })
});

export const {useGetSubcategoriesQuery} = subcategoryApi;
