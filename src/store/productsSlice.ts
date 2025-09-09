import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  category: 'solar-panels' | 'power-stations' | 'accessories';
  specifications: {
    capacity: number;
    efficiency: number;
    dimensions: string;
    weight: number;
  };
  price: number;
  images: string[];
  description: string;
  features: string[];
}

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [
    {
      id: "1",
      name: "Voltora Power Station 5000",
      category: "power-stations",
      specifications: {
        capacity: 5000,
        efficiency: 98,
        dimensions: "120x60x80cm",
        weight: 120
      },
      price: 4999,
      images: ["/images/powerstation5000.png"],
      description: "High-capacity industrial power station for B2B and B2C.",
      features: ["Fast charging", "Remote monitoring", "Modular design"]
    }
  ],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;
export default productsSlice.reducer;
