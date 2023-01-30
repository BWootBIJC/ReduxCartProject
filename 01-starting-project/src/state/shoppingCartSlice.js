import {createSlice} from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "Shopping Cart",
    initialState: {
        isCartVisible: false,
        totalItems: [],
        totalQuantity: 0
    },
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.totalItems.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.totalItems.push(
                    {
                        id: newItem.id,
                        name: newItem.title,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price
                    }
                );
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.totalItems.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.totalItems = state.totalItems.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice-= existingItem.price
            }
        },
    }
})