import { products, restaurants } from "../../utils/data";

export const DELIVERY_FEE = 50;
export const SERVICE_CHARGE = 15;

const getProduct = (productId: string) => {
    return products.find(prod => prod.id === productId);
}

export const getRestaurant = (productId: string) => {
    const item = getProduct(productId);
    const restaurantId = item?.restaurantId;
    return restaurants?.find(rest => rest.id === restaurantId);
}

export const getProductName = (productId: string) => {
    const item = getProduct(productId);
    return item?.name;
}

export const getProductPrice = (productId: string, count: number) => {
    const item = getProduct(productId);
    if (item) {
        return item.price * count;
    }
    return 0;
}

export const getTotalPrice = (cartProducts: Array<{ id: string, count: number }>) => {
    let totalPrice = 0;
    cartProducts.forEach(prod => {
        const prodPrice = getProductPrice(prod.id, prod.count);
        totalPrice += prodPrice
    });
    return totalPrice;
}

export const getAmountToPay = (cartProducts: Array<{ id: string, count: number }>) => {
    return getTotalPrice(cartProducts) + DELIVERY_FEE + SERVICE_CHARGE;
}