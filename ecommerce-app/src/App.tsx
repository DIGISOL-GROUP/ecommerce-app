import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              PowerStore
            </Typography>
            <Button color="inherit" component={Link as any} to="/home">Home</Button>
            <Button color="inherit" component={Link as any} to="/cart">Cart</Button>
            <Button color="inherit" component={Link as any} to="/orders">Orders</Button>
            <Button color="inherit" component={Link as any} to="/checkout">Checkout</Button>
          </Toolbar>
        </AppBar>
        {/* Fallback UI for testing 
        <div style={{ background: '#fffbe6', padding: '16px', textAlign: 'center', borderBottom: '2px solid #ffe58f' }}>
          <h2 style={{ color: '#faad14', margin: 0 }}>Fallback UI: If you see this, your app is rendering!</h2>
        </div>*/}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;