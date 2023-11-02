import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
    name: string;
    count: number;
}

interface CartState {
    products: Product[]
}

const initialState: CartState = {
    products: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        productAdded: (cartState, action: PayloadAction<{ name: string }>) => {
            const exisitingProduct = cartState.products.find(prod => prod.name === action.payload.name);
            if (exisitingProduct) {
                exisitingProduct.count += 1;
            } else {
                cartState.products.push({ name: action.payload.name, count: 1 });
            }
        },
        productRemoved: (cartState, action: PayloadAction<{ name: string }>) => {
            const productInStake = cartState.products.find(prod => prod.name === action.payload.name);
            if (productInStake) {
                productInStake.count -= 1;
            }
        }
    }
});

export default CartSlice.reducer;
export const { productAdded, productRemoved } = CartSlice.actions