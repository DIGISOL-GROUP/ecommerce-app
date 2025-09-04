import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import ProductCard from '../components/common/ProductCard';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';

const Home = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const loading = false;
  const error = null;

  // Removed fetchProducts dispatch to use seeded products from store

  return (
    <Container maxWidth="lg">
      {/* Hero Banner */}
      <Box sx={{
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        py: 6,
        px: 3,
        borderRadius: 3,
        mb: 4,
        textAlign: 'center',
        boxShadow: 3,
      }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to PowerStore
        </Typography>
        <Typography variant="h6" gutterBottom>
          Shop the best solar generators, kits, and accessories for your home and business
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }} href="/cart">
          Shop Now
        </Button>
      </Box>

      {/* Featured Products Section */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Featured Products
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          {products && products.length > 0 ? (
            products.map((product) => (
                <div key={product.id} style={{ flex: '1 1 300px', maxWidth: 340 }}>
                <ProductCard product={product} />
                </div>
            ))
          ) : (
              <div style={{ width: '100%' }}>
              <Alert severity="info">No products available.</Alert>
              </div>
          )}
          </div>
      )}

      {/* Call to Action Section */}
      <Box sx={{
        mt: 6,
        py: 4,
        px: 2,
        background: '#f5f5f5',
        borderRadius: 2,
        textAlign: 'center',
      }}>
        <Typography variant="h5" fontWeight={500} gutterBottom>
          Need help choosing the right product?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Contact our support team for expert advice and exclusive offers.
        </Typography>
        <Button variant="outlined" color="primary" href="/contact">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default Home;