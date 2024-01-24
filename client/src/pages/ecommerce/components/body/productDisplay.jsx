import React from 'react';

const ProductDisplay = ({ product, onAction }) => {
  return (
    <div className='product-card product-item'>
      <div className='main-images'>
        <img src={product.imgUrl} alt={product.name} className='tab-image' />
        <div className='heart'>
          <i className='fa-solid fa-heart'></i>
        </div>
      </div>
      <div className='shoe-details'>
        <div className='shoe_name'>{product.name}</div>
      </div>
      <div className='color-price'>
        <div className='price'>
          <span className='price price_num'>${product.price}</span>
        </div>
      </div>
      <button type='button' onClick={() => onAction(product._id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDisplay;
