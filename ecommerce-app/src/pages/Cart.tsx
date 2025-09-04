import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import { removeItem, updateQuantity } from '../features/carts/cartsSlice';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.carts);

  const handleRemoveItem = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ product_id: productId, quantity }));
    }
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart || !cart.items || cart.items.length === 0 ? (
        <Alert severity="info">Your cart is empty.</Alert>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {cart.items.map(item => (
            <div key={item.product_id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #eee' }}>
              <Typography variant="body1">{item.name}</Typography>
              <div>
                <Button onClick={() => handleRemoveItem(item.product_id)} color="error" variant="outlined" sx={{ mr: 2 }}>
                  Remove
                </Button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.product_id, Number(e.target.value))}
                  style={{ width: 60, marginRight: 16 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {item.total_price_xaf} XAF
                </Typography>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: 16 }}>
            <Typography variant="h6">Subtotal: {cart.subtotal_xaf} XAF</Typography>
            <Typography variant="h6">Total: {cart.total_xaf} XAF</Typography>
            <Button variant="contained" color="primary" href="/checkout" sx={{ mt: 2 }}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Cart;