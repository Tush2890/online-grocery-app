import { Product } from "../../utils/models";

export const DELIVERY_FEE = 50;
export const SERVICE_CHARGE = 15;

const getProduct = (products: Product[], productName: string) => {
    return products.find(prod => prod.Name === productName);
}

export const getProductName = (products: Product[], productName: string) => {
    const item = getProduct(products, productName);
    return item?.Name;
}

export const getProductPrice = (products: Product[], productName: string, count: number) => {
    const item = getProduct(products, productName);
    if (item) {
        return item.Price * count;
    }
    return 0;
}

export const getTotalPrice = (products: Product[], cartProducts: Array<{ name: string, count: number }>) => {
    let totalPrice = 0;
    cartProducts.forEach(prod => {
        const prodPrice = getProductPrice(products, prod.name, prod.count);
        totalPrice += prodPrice
    });
    return totalPrice;
}

export const getAmountToPay = (products: Product[], cartProducts: Array<{ name: string, count: number }>) => {
    return getTotalPrice(products, cartProducts) + DELIVERY_FEE + SERVICE_CHARGE;
}