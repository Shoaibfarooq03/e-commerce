import { createSlice } from "@reduxjs/toolkit";

// Function to load cart items from localStorage
const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cart");
  return cartItems ? JSON.parse(cartItems) : [];
};

// Function to save cart items to localStorage
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(), // Load initial state from localStorage
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      state.push(product);
      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },
    removeFromCart(state, action) {
        const productId = action.payload;
        const updatedCart = state.filter((item) => item.id !== productId);
        saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
        return updatedCart;
      },
      
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
        saveCartToLocalStorage(state); // Save updated cart to localStorage
      }
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity += 1; // Always add 1 to the quantity
        saveCartToLocalStorage(state); // Save updated cart to localStorage
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToLocalStorage(state); // Save updated cart to localStorage
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
