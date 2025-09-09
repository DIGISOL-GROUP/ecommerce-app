import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  userId: string;
  items: Array<{ productId: string; quantity: number }>;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders(state, action: PayloadAction<Order[]>) {
      state.orders = action.payload;
    },
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
  },
});

export const { setOrders, addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
