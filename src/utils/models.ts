export interface Product {
    RestaurantId: number;
    Name: string;
    Price: number;
    Currency: string;
    Rating: number;
    Description: string;
    Veg: boolean
}

export interface Restaurant {
    Name: string;
    ProductId: number;
    Category: string;
    Rating: number;
    Open: boolean;
    Country: string;
    State: string;
    City: string;
    PostCode: string;
    StreetAddress: string;
    Area: string;
    ImageFile: {type: 'Buffer', data: []};
    items: Array<Product>;
}