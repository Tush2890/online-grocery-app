import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cart.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppSlice } from "./app.slice";
import { RestaurantsSlice } from "./restaurant.slice";

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        appLevel: AppSlice.reducer,
        restaurant: RestaurantsSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;