import React from 'react';
import ProductDisplay from './productDisplay.jsx';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <ProductDisplay product={product} onAction={handleAddToCart} />
  );
};

export default ProductCard;
