export interface Product {
    id: string;
    restaurantId: string;
    name: string;
    price: number;
    currency: string;
    rating: number;
    description: string;
    isVeg: boolean
}

interface Address {
    country: string;
    state: string;
    city: string;
    postcode: string;
    streetAddress: string;
}

export interface Restaurant {
    id: string;
    name: string;
    items: Product[];
    category: string[];
    rating: number;
    address: Address;
    isOpen: boolean
}