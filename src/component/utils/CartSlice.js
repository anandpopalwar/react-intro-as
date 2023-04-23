import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state, action) => {
            state.items.pop(action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
    }
})

// console.log(cartSlice.getInitialState.items)

export const { addItems, removeItems, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

