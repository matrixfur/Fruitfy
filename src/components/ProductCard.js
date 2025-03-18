import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Get existing cart items from localStorage or initialize empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if product already exists in cart
    const existingProductIndex = existingCartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If product exists, increase quantity
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it with quantity 1
      existingCartItems.push({
        ...product,
        quantity: 1
      });
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    // Dispatch custom event to update cart count in header
    window.dispatchEvent(new Event('cartUpdated'));

    // Create a temporary element for visual feedback
    const button = document.activeElement;
    const feedbackEl = document.createElement('div');
    feedbackEl.textContent = '✓ Added';
    feedbackEl.style.position = 'absolute';
    feedbackEl.style.top = '0';
    feedbackEl.style.left = '0';
    feedbackEl.style.right = '0';
    feedbackEl.style.bottom = '0';
    feedbackEl.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
    feedbackEl.style.color = 'white';
    feedbackEl.style.display = 'flex';
    feedbackEl.style.alignItems = 'center';
    feedbackEl.style.justifyContent = 'center';
    feedbackEl.style.borderRadius = 'inherit';
    feedbackEl.style.fontWeight = 'bold';
    feedbackEl.style.zIndex = '10';
    feedbackEl.style.animation = 'fadeIn 0.3s, fadeOut 0.5s 1s forwards';

    // Add keyframes for the animations
    if (!document.getElementById('feedback-keyframes')) {
      const style = document.createElement('style');
      style.id = 'feedback-keyframes';
      style.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    button.style.position = 'relative';
    button.appendChild(feedbackEl);

    // Remove the feedback element after animation completes
    setTimeout(() => {
      button.removeChild(feedbackEl);
    }, 1500);
  };

  return (
    <div className="product-card card" data-category={product.category}>
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₹{product.price} / {product.unit}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </Link>
      <button
        className="add-to-cart-btn btn btn-primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;