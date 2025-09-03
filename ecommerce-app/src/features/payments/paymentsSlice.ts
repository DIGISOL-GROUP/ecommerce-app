import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Payment {
  payment_id: string;
  order_id: string;
  amount_xaf: number;
  method: string;
  status: string;
  transaction_ref: string;
}

interface PaymentsState {
  payments: Payment[];
  loading: boolean;
  error: string | null;
}

const initialState: PaymentsState = {
  payments: [],
  loading: false,
  error: null,
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    fetchPaymentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPaymentsSuccess(state, action: PayloadAction<Payment[]>) {
      state.loading = false;
      state.payments = action.payload;
    },
    fetchPaymentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    processPayment(state, action: PayloadAction<Payment>) {
      state.payments.push(action.payload);
    },
  },
});

export const {
  fetchPaymentsStart,
  fetchPaymentsSuccess,
  fetchPaymentsFailure,
  processPayment,
} = paymentsSlice.actions;

export default paymentsSlice.reducer;