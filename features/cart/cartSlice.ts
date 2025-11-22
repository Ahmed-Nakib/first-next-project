import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// --- Type Definitions ---
export interface ProductType {
  id: number | string;
  title: string;
  price: number;
  image: string;
}

// Consistent use of 'qty' for quantity
export interface CartItem extends ProductType {
  qty: number; 
}

interface CartState {
  items: CartItem[];
}

// --- Local Storage Functions ---
const loadCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
}

const saveCart = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
}

const initialState: CartState = {
  items: loadCart(),
}

// --- Redux Slice ---
export const cartSlice = createSlice({
  name: 'cart', // FIXED: Changed from 'counter' to 'cart'
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        exists.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      saveCart(state.items);
    },

    increaseQuantity: (state, action: PayloadAction<number | string>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.qty += 1;
        saveCart(state.items);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number | string>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
        saveCart(state.items);
      } else if (item && item.qty === 1) {
        // Option: Remove item if quantity drops to 0
        state.items = state.items.filter((i) => i.id !== id);
        saveCart(state.items);
      }
    },

    removeItem: (state, action: PayloadAction<number | string>) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      saveCart(state.items);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;