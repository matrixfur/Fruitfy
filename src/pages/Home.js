import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../components/ProductCard';
import ImageTest from '../components/ImageTest';
import { featuredProducts } from '../data/products';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Fresh Fruits Delivered to Your Door</h1>
          <p>Discover the sweetest and freshest fruits for your healthy lifestyle</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>
      
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
      
      <section className="benefits-section">
        <h2>Why Choose Fruitfy?</h2>
        <div className="benefits-container">
          <div className="benefit-item">
            <div className="benefit-icon">🍓</div>
            <h3>Fresh Picked</h3>
            <p>Our fruits are picked at peak ripeness for maximum flavor and nutrition</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your fruits delivered to your doorstep within 24 hours</p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🌱</div>
            <h3>Organic Options</h3>
            <p>Choose from our wide selection of organic and pesticide-free fruits</p>
          </div>
        </div>
      </section>

      <section className="image-test-section" style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <ImageTest />
      </section>
    </div>
  );
};

export default Home;