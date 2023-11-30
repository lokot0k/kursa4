import {configureStore} from '@reduxjs/toolkit';
import {categoryApi} from './services/categoriesApi';
import {subcategoryApi} from './services/subcategoriesApi';
import {productsApi} from './services/productsApi';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [subcategoryApi.reducerPath]: subcategoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
// @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([categoryApi.middleware, subcategoryApi.middleware, productsApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>
