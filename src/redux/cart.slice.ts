import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
    id: string;
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
        productAdded: (cartState, action: PayloadAction<{ id: string }>) => {
            const exisitingProduct = cartState.products.find(prod => prod.id === action.payload.id);
            if (exisitingProduct) {
                exisitingProduct.count += 1;
            } else {
                cartState.products.push({ id: action.payload.id, count: 1 });
            }
        },
        productRemoved: (cartState, action: PayloadAction<{ id: string }>) => {
            const productInStake = cartState.products.find(prod => prod.id === action.payload.id);
            if (productInStake) {
                productInStake.count -= 1;
            }
        }
    }
});

export default CartSlice.reducer;
export const { productAdded, productRemoved } = CartSlice.actions