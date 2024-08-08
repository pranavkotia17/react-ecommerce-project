import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart:[],
    totalQuantity: 0,
    totalPrice:0
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cart.push({ ...action.payload, quantity: 1 });
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        }
        
    },

        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
              item.quantity += 1;
              state.totalQuantity += 1;
              state.totalPrice += item.price;
            }
          },

          decrementQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
              const item = state.cart[itemIndex];
              if (item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
              } else {
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
                state.cart.splice(itemIndex, 1);
              }
            }
          },

    }
})

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer;

