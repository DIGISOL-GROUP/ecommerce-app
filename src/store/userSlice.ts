import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'supplier';
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  users: User[];
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  users: [
    {
      id: "u1",
      name: "Alice Buyer",
      email: "alice@voltora.com",
      role: "buyer"
    },
    {
      id: "u2",
      name: "Bob Supplier",
      email: "bob@voltora.com",
      role: "supplier"
    }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
