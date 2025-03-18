import React, { useEffect, useState } from 'react';
import './NutrientJar.css';

const NutrientJar = ({ cartItems, allProducts }) => {
  const [nutrients, setNutrients] = useState({
    vitamin_c: 0,
    vitamin_a: 0,
    fiber: 0,
    protein: 0,
    potassium: 0
  });

  // Calculate total nutrients from cart items
  useEffect(() => {
    if (!cartItems || !allProducts) return;

    const totalNutrients = {
      vitamin_c: 0,
      vitamin_a: 0,
      fiber: 0,
      protein: 0,
      potassium: 0
    };

    cartItems.forEach(cartItem => {
      // Find the product in allProducts
      const product = allProducts.find(p => p.id === cartItem.id);
      if (!product || !product.nutrition) return;

      // Extract numeric values from nutrition strings
      Object.keys(product.nutrition).forEach(key => {
        if (totalNutrients.hasOwnProperty(key)) {
          const value = product.nutrition[key];
          const numericValue = parseFloat(value.match(/[\d.]+/)?.[0] || 0);
          totalNutrients[key] += numericValue * cartItem.quantity;
        }
      });
    });

    setNutrients(totalNutrients);
  }, [cartItems, allProducts]);

  // Calculate fill percentages (capped at 100%)
  const getPercentage = (nutrient) => {
    const dailyValues = {
      vitamin_c: 90, // 90mg
      vitamin_a: 900, // 900µg
      fiber: 25, // 25g
      protein: 50, // 50g
      potassium: 3500 // 3500mg
    };

    const percentage = (nutrients[nutrient] / dailyValues[nutrient]) * 100;
    return Math.min(percentage, 100);
  };

  // Get color for each nutrient
  const getNutrientColor = (nutrient) => {
    const colors = {
      vitamin_c: '#FF9800', // Orange
      vitamin_a: '#FFC107', // Amber
      fiber: '#8BC34A', // Light Green
      protein: '#2196F3', // Blue
      potassium: '#9C27B0' // Purple
    };
    return colors[nutrient] || '#CCCCCC';
  };

  // Get label for each nutrient
  const getNutrientLabel = (nutrient) => {
    const labels = {
      vitamin_c: 'Vitamin C',
      vitamin_a: 'Vitamin A',
      fiber: 'Fiber',
      protein: 'Protein',
      potassium: 'Potassium'
    };
    return labels[nutrient] || nutrient;
  };

  return (
    <div className="nutrient-jar-container">
      <h2>Nutrition Jar</h2>
      <p className="jar-description">
        See how your cart fills your daily nutrition needs!
      </p>
      
      <div className="jar">
        <div className="jar-lid"></div>
        <div className="jar-glass">
          {Object.keys(nutrients).map(nutrient => (
            <div 
              key={nutrient}
              className="nutrient-layer"
              style={{
                height: `${getPercentage(nutrient)}%`,
                backgroundColor: getNutrientColor(nutrient),
                opacity: 0.8
              }}
              title={`${getNutrientLabel(nutrient)}: ${nutrients[nutrient].toFixed(1)}`}
            ></div>
          ))}
        </div>
        <div className="jar-bottom"></div>
      </div>
      
      <div className="nutrient-legend">
        {Object.keys(nutrients).map(nutrient => (
          <div key={nutrient} className="legend-item">
            <div 
              className="legend-color" 
              style={{ backgroundColor: getNutrientColor(nutrient) }}
            ></div>
            <div className="legend-text">
              <span className="legend-label">{getNutrientLabel(nutrient)}</span>
              <span className="legend-value">
                {nutrients[nutrient].toFixed(1)} 
                {nutrient === 'vitamin_a' ? 'µg' : 
                 nutrient === 'vitamin_c' || nutrient === 'potassium' ? 'mg' : 'g'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutrientJar;