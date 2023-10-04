import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../utils/models";

interface RestaurantState {
    restaurant: Restaurant;
    restaurants: Restaurant[];
    searchParam: string;
}

const initialState: RestaurantState = {
    restaurant: {
        address: { city: '', country: '', postcode: '', state: '', streetAddress: '' },
        category: [],
        id: '',
        items: [],
        name: '',
        rating: 0,
        isOpen: false
    },
    restaurants: [],
    searchParam: ''
}

export const RestaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (restState, action: PayloadAction<{ restaurant: Restaurant }>) => {
            restState.restaurant.address = action.payload.restaurant.address;
            restState.restaurant.category = action.payload.restaurant.category;
            restState.restaurant.id = action.payload.restaurant.id;
            restState.restaurant.isOpen = action.payload.restaurant.isOpen;
            restState.restaurant.items = action.payload.restaurant.items;
            restState.restaurant.name = action.payload.restaurant.name;
            restState.restaurant.rating = action.payload.restaurant.rating;
        },
        populateRestaurants: (restState, action: PayloadAction<{ restaurants: Restaurant[] }>) => {
            restState.restaurants = action.payload.restaurants;
        },
        setSearchParam: (restState, action: PayloadAction<{ searchParam: string }>) => {
            restState.searchParam = action.payload.searchParam;
        }
    }
});

export default RestaurantsSlice.reducer;
export const { setRestaurant, populateRestaurants, setSearchParam } = RestaurantsSlice.actions