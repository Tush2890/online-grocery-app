import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../utils/models";

interface RestaurantState {
    restaurant: Restaurant;
    restaurants: Restaurant[];
    pages: Array<number>,
    searchParam: string;
}

const initialState: RestaurantState = {
    restaurant: {
        Category: '',
        ProductId: 0,
        Name: '',
        Rating: 0,
        Open: false,
        Area: '',
        City: '',
        Country: '',
        ImageFile: { type: 'Buffer', data: [] },
        PostCode: '',
        State: '',
        StreetAddress: '',
        items: []
    },
    restaurants: [],
    pages: [],
    searchParam: ''
}

export const RestaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (restState, action: PayloadAction<{ restaurant: Restaurant }>) => {
            restState.restaurant.Category = action.payload.restaurant.Category;
            restState.restaurant.Open = action.payload.restaurant.Open;
            restState.restaurant.ProductId = action.payload.restaurant.ProductId;
            restState.restaurant.Name = action.payload.restaurant.Name;
            restState.restaurant.Rating = action.payload.restaurant.Rating;
            restState.restaurant.Area = action.payload.restaurant.Area;
            restState.restaurant.Category = action.payload.restaurant.Category;
            restState.restaurant.City = action.payload.restaurant.City;
            restState.restaurant.Country = action.payload.restaurant.Country;
            restState.restaurant.ImageFile = action.payload.restaurant.ImageFile;
            restState.restaurant.PostCode = action.payload.restaurant.PostCode;
            restState.restaurant.State = action.payload.restaurant.State;
            restState.restaurant.items = action.payload.restaurant.items;
        },
        populateRestaurants: (restState, action: PayloadAction<{ restaurants: Restaurant[], page: number }>) => {
            const newListOfRestaurants = action.payload.restaurants;
            if (restState.pages.includes(action.payload.page)) return;
            restState.restaurants = [...restState.restaurants, ...newListOfRestaurants];
            restState.pages = [...restState.pages, action.payload.page];
        },
        clearRestaurants: (restState) => {
            restState.restaurants = [];
            restState.pages = [];
        },
        setSearchParam: (restState, action: PayloadAction<{ searchParam: string }>) => {
            restState.searchParam = action.payload.searchParam;
        }
    }
});

export default RestaurantsSlice.reducer;
export const { setRestaurant, populateRestaurants, setSearchParam, clearRestaurants } = RestaurantsSlice.actions