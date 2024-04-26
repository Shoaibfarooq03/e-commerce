import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cart");
  return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(), 
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      state.push(product);
      saveCartToLocalStorage(state); 
    },
    removeFromCart(state, action) {
        const productId = action.payload;
        const updatedCart = state.filter((item) => item.id !== productId);
        saveCartToLocalStorage(updatedCart);
        return updatedCart;
      },
      
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
        saveCartToLocalStorage(state); 
      }
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1; 
        saveCartToLocalStorage(state); 
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToLocalStorage(state); 
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
