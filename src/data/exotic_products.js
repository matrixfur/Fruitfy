// Product data for the exotic fruit e-commerce app

export const allProducts = [
  {
    id: 1,
    name: 'Dragon Fruit',
    price: 7.99,
    unit: 'each',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1527325678964-54921661f888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Vibrant pink dragon fruit with white flesh speckled with tiny black seeds. Mildly sweet with a texture similar to kiwi.',
    nutrition: {
      calories: '60 kcal per 100g',
      protein: '1.2g per 100g',
      carbs: '13g per 100g',
      fiber: '3g per 100g',
      vitamin_c: '3mg per 100g'
    }
  },
  {
    id: 2,
    name: 'Lychee',
    price: 9.99,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1588271315306-e2f7d6bbf591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Sweet and fragrant lychees with translucent white flesh. Juicy with a floral aroma and delicate flavor.',
    nutrition: {
      calories: '66 kcal per 100g',
      protein: '0.8g per 100g',
      carbs: '16.5g per 100g',
      fiber: '1.3g per 100g',
      vitamin_c: '71.5mg per 100g'
    }
  },
  {
    id: 3,
    name: 'Passion Fruit',
    price: 6.49,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1604143297773-eb7084db2b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Intensely aromatic passion fruit with a sweet-tart flavor. Contains edible seeds surrounded by juicy, fragrant pulp.',
    nutrition: {
      calories: '97 kcal per 100g',
      protein: '2.2g per 100g',
      carbs: '23.4g per 100g',
      fiber: '10.4g per 100g',
      vitamin_c: '30mg per 100g'
    }
  },
  {
    id: 4,
    name: 'Rambutan',
    price: 8.99,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1629215854323-3297a19a3425?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Hairy red fruit with sweet, translucent flesh. Similar to lychee but with a milder, creamier taste.',
    nutrition: {
      calories: '82 kcal per 100g',
      protein: '0.9g per 100g',
      carbs: '20.9g per 100g',
      fiber: '0.9g per 100g',
      vitamin_c: '4.9mg per 100g'
    }
  },
  {
    id: 5,
    name: 'Mangosteen',
    price: 12.99,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1591981093714-55c3e571a7ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Purple fruit with sweet, tangy white segments inside. Often called the "queen of fruits" for its exquisite flavor.',
    nutrition: {
      calories: '63 kcal per 100g',
      protein: '0.5g per 100g',
      carbs: '15.6g per 100g',
      fiber: '1.8g per 100g',
      vitamin_c: '2.9mg per 100g'
    }
  },
  {
    id: 6,
    name: 'Jackfruit',
    price: 15.49,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Enormous tropical fruit with sweet, fibrous pods inside. Has a flavor reminiscent of banana, pineapple, and mango.',
    nutrition: {
      calories: '95 kcal per 100g',
      protein: '1.7g per 100g',
      carbs: '23.2g per 100g',
      fiber: '1.5g per 100g',
      vitamin_a: '30µg per 100g'
    }
  },
  {
    id: 7,
    name: 'Durian',
    price: 19.99,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1575386248261-d9d218a0c2f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Known as the "king of fruits," durian has a custard-like texture and strong aroma. Rich, creamy flavor with notes of caramel.',
    nutrition: {
      calories: '147 kcal per 100g',
      protein: '1.5g per 100g',
      carbs: '27.1g per 100g',
      fiber: '3.8g per 100g',
      vitamin_c: '19.7mg per 100g'
    }
  },
  {
    id: 8,
    name: 'Star Fruit',
    price: 5.99,
    unit: 'kg',
    category: 'exotic',
    image: 'https://images.unsplash.com/photo-1527546712175-827fa4321096?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Star-shaped fruit with a crisp texture and sweet-tart flavor. Can range from sour to sweet depending on ripeness.',
    nutrition: {
      calories: '31 kcal per 100g',
      protein: '1g per 100g',
      carbs: '6.7g per 100g',
      fiber: '2.8g per 100g',
      vitamin_c: '34.4mg per 100g'
    }
  }
];

// Featured products for the home page
export const featuredProducts = [
  allProducts[0], // Dragon Fruit
  allProducts[1], // Lychee
  allProducts[2], // Passion Fruit
  allProducts[4]  // Mangosteen
];