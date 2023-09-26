import { Product } from "../../utils/models";
import { getRestaurantList } from "../../utils/service";

export const DELIVERY_FEE = 50;
export const SERVICE_CHARGE = 15;

const getProduct = (products: Product[], productId: string) => {
    return products.find(prod => prod.id === productId);
}

export const getRestaurant = (products: Product[], productId: string) => {
    const item = getProduct(products, productId);
    const restaurantId = item?.restaurantId;
    return getRestaurantList().find(rest => rest.id === restaurantId);
}

export const getProductName = (products: Product[], productId: string) => {
    const item = getProduct(products, productId);
    return item?.name;
}

export const getProductPrice = (products: Product[], productId: string, count: number) => {
    const item = getProduct(products, productId);
    if (item) {
        return item.price * count;
    }
    return 0;
}

export const getTotalPrice = (products: Product[], cartProducts: Array<{ id: string, count: number }>) => {
    let totalPrice = 0;
    cartProducts.forEach(prod => {
        const prodPrice = getProductPrice(products, prod.id, prod.count);
        totalPrice += prodPrice
    });
    return totalPrice;
}

export const getAmountToPay = (products: Product[], cartProducts: Array<{ id: string, count: number }>) => {
    return getTotalPrice(products, cartProducts) + DELIVERY_FEE + SERVICE_CHARGE;
}