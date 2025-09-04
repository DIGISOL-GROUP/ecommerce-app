export interface User {
  id: number;
  name: string;
  email: string;
  password: string; 
  role: 'customer' | 'admin';
  created_at: string;
}

export interface Session {
  user_id: number;
  token: string;
  expires_at: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  price_ngn: number;
  price_xaf: number;
  stock: number;
  image_url: string;
}

export interface CartItem {
  product_id: number;
  quantity: number;
  unit_price_xaf: number;
  total_price_xaf: number;
}

export interface Cart {
  cart_id: string;
  user_id: number;
  items: CartItem[];
  subtotal_xaf: number;
  discount_xaf: number;
  shipping_xaf: number;
  tax_xaf: number;
  total_xaf: number;
  status: 'active' | 'completed' | 'abandoned';
}

export interface Order {
  order_id: string;
  cart_id: string;
  user_id: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'canceled';
  payment_id: string;
  shipping_id: string;
  total_xaf: number;
  created_at: string;
}

export interface Payment {
  payment_id: string;
  order_id: string;
  amount_xaf: number;
  method: string;
  status: 'pending' | 'success' | 'failed';
  transaction_ref: string;
}

export interface Shipment {
  shipping_id: string;
  order_id: string;
  carrier: string;
  tracking_number: string;
  status: 'pending' | 'in_transit' | 'delivered' | 'returned';
  estimated_delivery: string;
}