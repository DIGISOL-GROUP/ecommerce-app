import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
// import all page components here

const Home = React.lazy(() => import('./pages/Home'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Catalog = React.lazy(() => import('./pages/Catalog'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const About = React.lazy(() => import('./pages/About'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Contact = React.lazy(() => import('./pages/Contact'));
const SupplierPortal = React.lazy(() => import('./pages/SupplierPortal'));

const AppRoutes = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/supplier" element={<SupplierPortal />} />
    </Routes>
  </React.Suspense>
);

export default AppRoutes;
