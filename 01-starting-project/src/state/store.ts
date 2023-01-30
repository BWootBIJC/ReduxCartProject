import {configureStore} from "@reduxjs/toolkit";
import {shoppingCartSlice} from "./shoppingCartSlice";

//TODO: Implement state management store

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartSlice.reducer
    }
})