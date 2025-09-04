import usersReducer from '../features/users/usersSlice';
import productsReducer from '../features/products/productsSlice';
import cartsReducer from '../features/carts/cartsSlice';
import ordersReducer from '../features/orders/ordersSlice';
import paymentsReducer from '../features/payments/paymentsSlice';
import shipmentsReducer from '../features/shipments/shipmentsSlice';
import { configureStore } from '@reduxjs/toolkit';

// Sample initial data
const initialProducts = [
  {
    id: 101,
    name: 'iPhone 15 Pro Max',
    category: 'Electronics',
    brand: 'Apple',
    description: 'Latest flagship smartphone with advanced camera and performance.',
    price_ngn: 1200000,
    price_xaf: 1600000,
    stock: 30,
    image_url: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01a0AspM1szr6lf7W7p_!!6000000005838-2-tps-48-48.png',
  },
  {
    id: 102,
    name: 'Electric Bike',
    category: 'Vehicles',
    brand: 'E-Bike Pro',
    description: 'Eco-friendly electric bike for city commuting.',
    price_ngn: 800000,
    price_xaf: 1050000,
    stock: 15,
    image_url: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg',
  },
  {
    id: 103,
    name: 'Baby Girl Shoes',
    category: 'Fashion',
    brand: 'CuteSteps',
    description: 'Comfortable and stylish shoes for baby girls.',
    price_ngn: 15000,
    price_xaf: 20000,
    stock: 100,
    image_url: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01VxEwc91YXeNmcyV6j_!!6000000003069-2-tps-96-96.png',
  },
  {
    id: 104,
    name: 'Smoothie Blender',
    category: 'Home Appliances',
    brand: 'BlendPro',
    description: 'Highest rated blender for smoothies and shakes.',
    price_ngn: 35000,
    price_xaf: 45000,
    stock: 60,
    image_url: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01WxanpW1Hv9ESW9cfs_!!6000000000819-2-tps-96-96.png',
  },
  {
    id: 105,
    name: 'Pencil Box with Calculator',
    category: 'Stationery',
    brand: 'SmartBox',
    description: 'Multipurpose pencil box with built-in calculator.',
    price_ngn: 5000,
    price_xaf: 7000,
    stock: 200,
    image_url: 'https://s.alicdn.com/@img/imgextra/i4/O1CN010nrLfB25RaSKdVtHu_!!6000000007523-2-tps-96-96.png',
  },
  {
    id: 106,
    name: 'Solar Generator 1000',
    category: 'Power Stations',
    brand: 'Jackery',
    description: '1000Wh solar generator for homes and offices.',
    price_ngn: 900000,
    price_xaf: 1200000,
    stock: 10,
    image_url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 107,
    name: 'Custom Dancing Flower Toy',
    category: 'Toys',
    brand: 'FunBloom',
    description: 'Interactive flower toy that dances to music.',
    price_ngn: 8000,
    price_xaf: 11000,
    stock: 80,
    image_url: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01XCI6FB1FJTbwfS3Ru_!!6000000000466-55-tps-20-20.svg',
  },
  {
    id: 108,
    name: 'LED Snooker Table Lights',
    category: 'Sports',
    brand: 'BrightPlay',
    description: 'High-quality LED lights for snooker tables.',
    price_ngn: 25000,
    price_xaf: 32000,
    stock: 40,
    image_url: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01AcYYU3215pAonO55E_!!6000000006934-2-tps-56-56.png',
  },
  {
    id: 109,
    name: 'Car Cover Tent',
    category: 'Automotive',
    brand: 'AutoShade',
    description: 'Portable car cover tent for sun and rain protection.',
    price_ngn: 60000,
    price_xaf: 80000,
    stock: 25,
    image_url: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg',
  },
];

const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'hashed_password_123',
    phone: '+237650000001',
    role: 'customer',
    created_at: '2025-01-01T10:00:00Z',
  },
  {
    id: 2,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'hashed_password_admin',
    phone: '+237650000002',
    role: 'admin',
    created_at: '2025-01-01T09:00:00Z',
  },
];

// Define the Order type
type Order = {
  order_id: string;
  cart_id: string;
  user_id: number;
  status: string;
  payment_id: string;
  shipping_id: string;
  total_xaf: number;
  created_at: string;
};

const initialOrders: Order[] = [
  {
    order_id: 'ORD789',
    cart_id: 'CART123',
    user_id: 1,
    status: 'paid',
    payment_id: 'PAY456',
    shipping_id: 'SHIP001',
    total_xaf: 205400,
    created_at: '2025-08-28T09:00:00Z',
  },
];

// Preloaded state
const preloadedState = {
  users: {
    users: initialUsers,
    currentUser: null,
    loading: false,
    error: null,
  },
  products: {
    products: initialProducts,
    loading: false,
    error: null,
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  },
  orders: {
    orders: initialOrders,
    loading: false,
    error: null,
  },
  carts: {
    cart_id: 'CART123',
    user_id: 1,
    items: [],
    subtotal_xaf: 0,
    discount_xaf: 0,
    shipping_xaf: 0,
    tax_xaf: 0,
    total_xaf: 0,
    status: 'active',
  },
  payments: {
    payments: [],
    loading: false,
    error: null,
  },
  shipments: {
    shipments: [],
    loading: false,
    error: null,
  },
};

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
    carts: cartsReducer,
    orders: ordersReducer,
    payments: paymentsReducer,
    shipments: shipmentsReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;