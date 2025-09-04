import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { cancelOrder, payOrder, deleteOrder } from '../features/orders/ordersSlice';

const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const loading = false;
  const error = null;

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
              <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                {order.status !== 'cancelled' && (
                  <Button variant="outlined" color="error" onClick={() => dispatch(cancelOrder(order.order_id))}>
                    Cancel
                  </Button>
                )}
                {order.status !== 'paid' && order.status !== 'cancelled' && (
                  <Button variant="contained" color="primary" onClick={() => dispatch(payOrder(order.order_id))}>
                    Pay
                  </Button>
                )}
                <Button variant="outlined" color="secondary" onClick={() => dispatch(deleteOrder(order.order_id))}>
                  Delete
                </Button>
              </Box>
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