import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface Order {
  order_id: string;
  cart_id: string;
  user_id: number;
  status: string;
  payment_id: string;
  shipping_id: string;
  total_xaf: number;
  created_at: string;
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetch('/api/orders');
  return (await response.json()) as Order[];
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    cancelOrder(state, action: PayloadAction<string>) {
      const order = state.orders.find(o => o.order_id === action.payload);
      if (order) {
        order.status = 'cancelled';
      }
    },
    payOrder(state, action: PayloadAction<string>) {
      const order = state.orders.find(o => o.order_id === action.payload);
      if (order) {
        order.status = 'paid';
      }
    },
    deleteOrder(state, action: PayloadAction<string>) {
      state.orders = state.orders.filter(o => o.order_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch orders';
      });
  },
});

export const { createOrder, cancelOrder, payOrder, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;