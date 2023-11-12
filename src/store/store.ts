import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from "./slices/product-slice.ts";
import {categoryApi} from "./apis/categoryApi.ts";

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        product: productSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(categoryApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;