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

export const products: Array<Product> = [
    {
        id: 'item1',
        restaurantId: 'rest1',
        name: 'Margherita Pizza',
        price: 135,
        currency: 'Rupees',
        rating: 4.1,
        description: 'A classic cheesy Margherita. Cant go wrong. [Fat-14.3 per 100 g, Protein-12.6 per 100 g, Carbohydrate-39.2 per 100 g, Sugar-0 per 100 g, Calories-336 k.cal]Nutritional information per 100g',
        isVeg: true
    },
    {
        id: 'item2',
        restaurantId: 'rest1',
        name: 'Makhani Do Pyaza',
        price: 155,
        currency: 'Rupees',
        rating: 4.2,
        description: 'Makhani gravy, Onion & Cheese',
        isVeg: true
    },
    {
        id: 'item3',
        restaurantId: 'rest1',
        name: 'My Mac',
        price: 155,
        currency: 'Rupees',
        rating: 4,
        description: 'A perfect blend of Cheesey Macroni, Swirl of Jalapenos Dip & Cheese',
        isVeg: false
    },
    {
        id: 'item4',
        restaurantId: 'rest1',
        name: 'Onion Twist',
        price: 155,
        currency: 'Rupees',
        rating: 3.5,
        description: 'Twisted combination of Onion & Cheese',
        isVeg: true
    },
]

export const restaurants: Array<Restaurant> = [{
    id: 'rest1',
    name: 'La Pino\'z Pizza',
    category: ['Pizza', 'Pasta', 'Italian', 'Fast Food'],
    items: products,
    rating: 3.8,
    isOpen: true,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest2',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 4.6,
    isOpen: true,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest3',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 5,
    isOpen: false,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest4',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 4.0,
    isOpen: false,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest5',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 4.0,
    isOpen: false,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest6',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 4.0,
    isOpen: false,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest7',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 4.0,
    isOpen: false,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
},
{
    id: 'rest8',
    name: 'New Pizza King',
    category: ['Pizza', 'Fast Food'],
    items: products,
    rating: 4.0,
    isOpen: false,
    address: {
        city: 'Bengaluru',
        country: 'India',
        postcode: '562114',
        state: 'Karnataka',
        streetAddress: 'Purana Chowk'
    }
}]

export const locations = ['Bangalore', 'Delhi', 'Mumbai', 'Kolkata'];