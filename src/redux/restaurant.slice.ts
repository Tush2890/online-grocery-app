import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../utils/data";

const initialState: Restaurant = {
    address: { city: '', country: '', postcode: '', state: '', streetAddress: '' },
    category: [],
    id: '',
    items: [],
    name: '',
    rating: 0,
    isOpen: false
}

export const RestaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (restaurantState, action: PayloadAction<{ restaurant: Restaurant }>) => {
            restaurantState.address = action.payload.restaurant.address;
            restaurantState.category = action.payload.restaurant.category;
            restaurantState.id = action.payload.restaurant.id;
            restaurantState.items = action.payload.restaurant.items;
            restaurantState.name = action.payload.restaurant.name;
            restaurantState.rating = action.payload.restaurant.rating;
            restaurantState.isOpen = action.payload.restaurant.isOpen;
        }
    }
});

export default RestaurantsSlice.reducer;
export const { setRestaurant } = RestaurantsSlice.actions