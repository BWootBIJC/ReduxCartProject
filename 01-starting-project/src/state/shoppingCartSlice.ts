import {createSlice} from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "Shopping Cart",
    initialState: {
        isCartVisible: false,
        totalItems: [],
        totalQuantity: 0,
        notification: {}
    },
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        },
        addItemToCart(state: any, action: any) {
            const newItem = action.payload;
            const existingItem = state.totalItems.find((item: any) => item.id === newItem.id);
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
        removeItemFromCart(state: any, action: any) {
            const id = action.payload;
            const existingItem = state.totalItems.find((item: any) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.totalItems = state.totalItems.filter((item: any) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        },
    }
})

export const sendCartData = (cartData: any) => {
    return async (dispatch: any) => {
        dispatch(shoppingCartSlice.actions.showNotification({
            status: 'pending',
            title: "Sending...",
            message: "Sending cart data!"
        }));

        const sendRequest = async () => {
            const response = await fetch('api/products/list', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(cartData)
            });
            if (!response.ok) {
                throw new Error("Sending cart data failed")
            }
        }

        try {
            await sendRequest();
            dispatch(shoppingCartSlice.actions.showNotification({
                status: 'success',
                title: "Success!",
                message: "Sent cart data successfully!"
            }));
        } catch (e: any) {
            dispatch(shoppingCartSlice.actions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!",
            }));        }
    }
}