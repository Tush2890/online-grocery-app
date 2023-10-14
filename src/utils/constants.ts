export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const CURRENCY: { [key: string]: string } = {
    'USA': '$',
    'India': '₹',
    'UK': '£',
    'Default': '$'
}
export const TIMEOUT_IN_MILLISECS = 500;
export const LOCATION_API_URL = `${process.env.REACT_APP_API_URL}/locations`;
export const RESTAURANT_API_URL = `${process.env.REACT_APP_API_URL}/restaurants`;