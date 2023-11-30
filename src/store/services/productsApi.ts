import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {FullProduct, Product} from '../types';
import {BASE_URL} from '../base';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery(
    {baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getProducts: build.query<Product[], string>({
      query(subcategoryId) {
        return `/api/subcategories/${subcategoryId}/products`;
      }
    }),
    getProduct: build.query<FullProduct, string>({
      query(productId) {
        return `/api/products/${productId}`;
      }
    })
  })
});

export const {useGetProductQuery, useGetProductsQuery} = productsApi;
