import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { baseApi } from "./api/api";
import cartReducer from "./features/cartSlice/cartSlice"
import orderReducer from "./features/orderSlice/orderSlice"

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
        order: orderReducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;