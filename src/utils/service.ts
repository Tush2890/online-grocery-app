import { Restaurant } from "./models";

let listOfRestaurants: Restaurant[] = [];

export const setRestaurantList = (restaurants: Restaurant[]) => listOfRestaurants = restaurants;
export const getRestaurantList = () => listOfRestaurants;