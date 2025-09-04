import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const loading = false;
  const error = null;

  // Removed fetchOrders dispatch to use seeded orders from store

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Your Orders
      </Typography>
        {loading ? (
          <Alert severity="info">Loading...</Alert>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : orders && orders.length > 0 ? (
          orders.map(order => (
            <Box key={order.order_id} sx={{ mb: 3, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
              <Typography variant="h6">Order ID: {order.order_id}</Typography>
              <Typography>Status: {order.status}</Typography>
              <Typography>Total: {order.total_xaf} XAF</Typography>
              <Typography>Created At: {new Date(order.created_at).toLocaleString()}</Typography>
            </Box>
          ))
        ) : (
          <Box sx={{ mt: 2 }}>
            <Alert severity="info">No orders found.</Alert>
          </Box>
        )}
    </Box>
  );
};

export default Orders;