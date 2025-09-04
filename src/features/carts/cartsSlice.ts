import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  product_id: number;
  quantity: number;
  unit_price_xaf: number;
  total_price_xaf: number;
  name: string;
}

interface CartState {
  cart_id: string;
  user_id: number;
  items: CartItem[];
  subtotal_xaf: number;
  discount_xaf: number;
  shipping_xaf: number;
  tax_xaf: number;
  total_xaf: number;
  status: string;
}

const initialState: CartState = {
  cart_id: 'CART123',
  user_id: 1,
  items: [],
  subtotal_xaf: 0,
  discount_xaf: 0,
  shipping_xaf: 0,
  tax_xaf: 0,
  total_xaf: 0,
  status: 'active',
};

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.product_id === action.payload.product_id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.total_price_xaf += action.payload.total_price_xaf;
      } else {
        state.items.push(action.payload);
      }
      state.subtotal_xaf += action.payload.total_price_xaf;
      state.total_xaf = state.subtotal_xaf - state.discount_xaf + state.shipping_xaf + state.tax_xaf;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.product_id === action.payload);
      if (itemIndex !== -1) {
        state.subtotal_xaf -= state.items[itemIndex].total_price_xaf;
        state.items.splice(itemIndex, 1);
        state.total_xaf = state.subtotal_xaf - state.discount_xaf + state.shipping_xaf + state.tax_xaf;
      }
    },
    updateQuantity: (state, action: PayloadAction<{ product_id: number; quantity: number }>) => {
      const existingItem = state.items.find(item => item.product_id === action.payload.product_id);
      if (existingItem) {
        const priceDifference = (action.payload.quantity - existingItem.quantity) * existingItem.unit_price_xaf;
        existingItem.quantity = action.payload.quantity;
        existingItem.total_price_xaf = action.payload.quantity * existingItem.unit_price_xaf;
        state.subtotal_xaf += priceDifference;
        state.total_xaf = state.subtotal_xaf - state.discount_xaf + state.shipping_xaf + state.tax_xaf;
      }
    },
    setDiscount: (state, action: PayloadAction<number>) => {
      state.discount_xaf = action.payload;
      state.total_xaf = state.subtotal_xaf - state.discount_xaf + state.shipping_xaf + state.tax_xaf;
    },
    setShipping: (state, action: PayloadAction<number>) => {
      state.shipping_xaf = action.payload;
      state.total_xaf = state.subtotal_xaf - state.discount_xaf + state.shipping_xaf + state.tax_xaf;
    },
    setTax: (state, action: PayloadAction<number>) => {
      state.tax_xaf = action.payload;
      state.total_xaf = state.subtotal_xaf - state.discount_xaf + state.shipping_xaf + state.tax_xaf;
    },
  },
});

export const { addItem, removeItem, updateQuantity, setDiscount, setShipping, setTax } = cartsSlice.actions;

export default cartsSlice.reducer;