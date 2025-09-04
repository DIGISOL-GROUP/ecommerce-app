import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AuthModal from './components/common/AuthModal';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';

const App = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              component={Link as any}
              to="/home"
              color="inherit"
            >
              PowerStore
            </Typography>
            <Button color="inherit" component={Link as any} to="/home">Home</Button>
            <Button color="inherit" component={Link as any} to="/cart">Cart</Button>
            <Button color="inherit" component={Link as any} to="/orders">Orders</Button>
            <Button color="inherit" component={Link as any} to="/checkout">Checkout</Button>
            <Button color="inherit" onClick={() => setAuthOpen(true)}>Login</Button>
          </Toolbar>
        </AppBar>
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
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