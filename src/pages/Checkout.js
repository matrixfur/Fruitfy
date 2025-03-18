import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import { FaCreditCard } from 'react-icons/fa';
import { SiGooglepay, SiPhonepe } from 'react-icons/si';
import { RiSecurePaymentLine } from 'react-icons/ri';

// Helper function to format price in INR
const formatPriceINR = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(price);
};

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });
  
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Name on card is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    } else if (['gpay', 'paytm', 'phonepe'].includes(formData.paymentMethod)) {
      if (!formData.upiId.trim()) newErrors.upiId = 'UPI ID is required';
      // Basic UPI ID validation (username@provider)
      else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(formData.upiId))
        newErrors.upiId = 'Please enter a valid UPI ID';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would submit the order to a backend
      console.log('Order submitted:', formData);
      setOrderPlaced(true);
    }
  };
  
  if (orderPlaced) {
    return (
      <div className="order-success">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your order, {formData.firstName}!</p>
        <p>Your fresh fruits will be delivered to you soon.</p>
        <p>We've sent a confirmation email to {formData.email}.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-container">
        <div className="checkout-form-container">
          <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Shipping Information</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? 'error' : ''}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? 'error' : ''}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={errors.state ? 'error' : ''}
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={errors.zipCode ? 'error' : ''}
                />
                {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
              </div>
            </div>
            
            <h2>Payment Method</h2>
            
            <div className="payment-methods">
              <div className="payment-method">
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleChange}
                />
                <label htmlFor="credit">
                  <FaCreditCard className="payment-icon" />
                  <span>Credit/Debit Card</span>
                </label>
              </div>

              <div className="payment-method">
                <input
                  type="radio"
                  id="gpay"
                  name="paymentMethod"
                  value="gpay"
                  checked={formData.paymentMethod === 'gpay'}
                  onChange={handleChange}
                />
                <label htmlFor="gpay">
                  <SiGooglepay className="payment-icon gpay-icon" />
                  <span>Google Pay (GPay)</span>
                </label>
              </div>

              <div className="payment-method">
                <input
                  type="radio"
                  id="paytm"
                  name="paymentMethod"
                  value="paytm"
                  checked={formData.paymentMethod === 'paytm'}
                  onChange={handleChange}
                />
                <label htmlFor="paytm">
                  <RiSecurePaymentLine className="payment-icon paytm-icon" />
                  <span>Paytm</span>
                </label>
              </div>

              <div className="payment-method">
                <input
                  type="radio"
                  id="phonepe"
                  name="paymentMethod"
                  value="phonepe"
                  checked={formData.paymentMethod === 'phonepe'}
                  onChange={handleChange}
                />
                <label htmlFor="phonepe">
                  <SiPhonepe className="payment-icon phonepe-icon" />
                  <span>PhonePe</span>
                </label>
              </div>
            </div>
            
            {formData.paymentMethod === 'credit' && (
              <div className="credit-card-details">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className={errors.cardNumber ? 'error' : ''}
                  />
                  {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className={errors.cardName ? 'error' : ''}
                  />
                  {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className={errors.expiryDate ? 'error' : ''}
                    />
                    {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      className={errors.cvv ? 'error' : ''}
                    />
                    {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                  </div>
                </div>
              </div>
            )}

            {['gpay', 'paytm', 'phonepe'].includes(formData.paymentMethod) && (
              <div className="upi-payment-details">
                <div className="form-group">
                  <label htmlFor="upiId">UPI ID</label>
                  <input
                    type="text"
                    id="upiId"
                    name="upiId"
                    placeholder="yourname@upi"
                    value={formData.upiId}
                    onChange={handleChange}
                    className={errors.upiId ? 'error' : ''}
                  />
                  {errors.upiId && <span className="error-message">{errors.upiId}</span>}
                </div>
                <p className="payment-info">
                  {formData.paymentMethod === 'gpay' && "You'll be redirected to Google Pay to complete your payment."}
                  {formData.paymentMethod === 'paytm' && "You'll be redirected to Paytm to complete your payment."}
                  {formData.paymentMethod === 'phonepe' && "You'll be redirected to PhonePe to complete your payment."}
                </p>
              </div>
            )}
            
            <div className="checkout-actions">
              <Link to="/cart" className="back-to-cart">Back to Cart</Link>
              <button type="submit" className="btn btn-primary place-order-btn">
                Place Order
              </button>
            </div>
          </form>
        </div>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="order-items">
            <div className="order-item">
              <span>Strawberry (2)</span>
              <span>₹799.84</span>
            </div>
            <div className="order-item">
              <span>Kiwi (3)</span>
              <span>₹597.60</span>
            </div>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹1,397.44</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>₹479.20</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹1,876.64</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
