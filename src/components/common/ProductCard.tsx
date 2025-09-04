import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/carts/cartsSlice';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    brand: string;
    description: string;
    price_xaf: number;
    stock: number;
    image_url: string;
  };
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem({
      product_id: product.id,
      quantity: 1,
      unit_price_xaf: product.price_xaf,
      total_price_xaf: product.price_xaf,
      name: product.name,
    }));
    setOpen(true);
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image_url}
        alt={product.name}
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          {product.price_xaf.toLocaleString()} XAF
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {product.stock}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={product.stock === 0}
          sx={{ mt: 2, width: '100%' }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardContent>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Added to cart.
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ProductCard;