import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import { allProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product with the matching id
  const product = allProducts.find(p => p.id === parseInt(id));
  
  // If product not found
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    // Get existing cart items from localStorage or initialize empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if product already exists in cart
    const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If product exists, add the selected quantity
      existingCartItems[existingProductIndex].quantity += quantity;
    } else {
      // If product doesn't exist, add it with the selected quantity
      existingCartItems.push({
        ...product,
        quantity: quantity
      });
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    // Dispatch custom event to update cart count in header
    window.dispatchEvent(new Event('cartUpdated'));

    // Create a temporary element for visual feedback
    const button = document.querySelector('.add-to-cart-btn');
    const originalText = button.textContent;

    // Change button text and style
    button.textContent = `✓ Added to Cart!`;
    button.style.backgroundColor = 'var(--success-color)';
    button.style.transform = 'translateY(-3px)';
    button.style.boxShadow = '0 6px 12px var(--shadow-color)';

    // Reset button after animation
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
      button.style.transform = '';
      button.style.boxShadow = '';
    }, 1500);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">₹{product.price} / {product.unit}</p>
          
          <div className="product-detail-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="product-detail-nutrition">
            <h3>Nutrition Facts</h3>
            <ul>
              {product.nutrition && Object.entries(product.nutrition).map(([key, value]) => (
                <li key={key}>
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="product-detail-actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input 
                type="number" 
                id="quantity" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange} 
              />
            </div>
            
            <button 
              className="btn btn-primary add-to-cart-btn" 
              onClick={handleAddToCart}
            >
              Add to Cart - ₹{(product.price * quantity)}
            </button>
          </div>
        </div>
      </div>
      
      <div className="back-to-products">
        <Link to="/products">&larr; Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;