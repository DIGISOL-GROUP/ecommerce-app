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
            products.map((product, idx) => (
              <Box key={product.id} sx={{ flex: '1 1 300px', maxWidth: 340 }}>
                <ProductCard product={product} />
                {/* Product Description */}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  <strong>Description:</strong> {product.description}
                </Typography>
                {/* Product Reviews */}
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" color="primary">Reviews:</Typography>
                  <Box sx={{ pl: 1 }}>
                    {idx === 0 && (
                      <>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️⭐️ - "The iPhone 15 Pro Max is a game changer!"</Typography>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️☆ - "Camera quality is amazing, battery lasts all day."</Typography>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️☆ - "Electric bike is perfect for city rides."</Typography>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️⭐️ - "Very sturdy and reliable."</Typography>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️⭐️ - "My daughter loves these shoes!"</Typography>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️☆ - "Comfortable and cute."</Typography>
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️☆ - "Blender makes perfect smoothies every time."</Typography>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️⭐️ - "Easy to clean and powerful motor."</Typography>
                      </>
                    )}
                    {idx === 4 && (
                      <>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️⭐️ - "Kids love the pencil box with calculator!"</Typography>
                        <Typography variant="body2" color="text.secondary">⭐️⭐️⭐️⭐️☆ - "Very useful for school."</Typography>
                      </>
                    )}
                    {/* Add more for other products if desired */}
                  </Box>
                </Box>
                {/* Product Comments */}
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2" color="primary">Comments:</Typography>
                  <Box sx={{ pl: 1 }}>
                    {idx === 0 && (
                      <>
                        <Typography variant="body2" color="text.secondary">Alice: "Fast shipping and great packaging!"</Typography>
                        <Typography variant="body2" color="text.secondary">Bob: "PowerStore always delivers quality."</Typography>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <Typography variant="body2" color="text.secondary">Sam: "Bike arrived fully assembled."</Typography>
                        <Typography variant="body2" color="text.secondary">Linda: "Customer support was very helpful."</Typography>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <Typography variant="body2" color="text.secondary">Jane: "Shoes fit perfectly!"</Typography>
                        <Typography variant="body2" color="text.secondary">Mike: "Will buy again."</Typography>
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        <Typography variant="body2" color="text.secondary">Chris: "Blender is super quiet."</Typography>
                        <Typography variant="body2" color="text.secondary">Nina: "Love the design."</Typography>
                      </>
                    )}
                    {idx === 4 && (
                      <>
                        <Typography variant="body2" color="text.secondary">Tom: "Calculator is handy for quick math."</Typography>
                        <Typography variant="body2" color="text.secondary">Sara: "Perfect for my son."</Typography>
                      </>
                    )}
                    {/* Add more for other products if desired */}
                  </Box>
                </Box>
              </Box>
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