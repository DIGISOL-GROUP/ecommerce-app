import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Checkout: React.FC = () => {
  const cart = useSelector((state: RootState) => state.carts);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      {cart && cart.items && cart.items.length > 0 ? (
        <Box>
          {cart.items.map(item => (
            <Box key={item.product_id} sx={{ mb: 2 }}>
              <Typography>{item.name} x {item.quantity} = {item.total_price_xaf} XAF</Typography>
            </Box>
          ))}
          <Typography variant="h6">Total: {cart.total_xaf} XAF</Typography>
        </Box>
      ) : (
        <Box>
          <Typography>No items in cart.</Typography>
        </Box>
      )}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Shipping Information
        </Typography>
        <TextField label="Full Name" fullWidth sx={{ mb: 2 }} />
        <TextField label="Address" fullWidth sx={{ mb: 2 }} />
        <TextField label="Phone Number" fullWidth sx={{ mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Payment Method
        </Typography>
        <TextField label="Mobile Money Number" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Confirm Order
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;