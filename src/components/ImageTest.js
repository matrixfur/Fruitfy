import React from 'react';

const ImageTest = () => {
  const testImages = [
    'https://images.unsplash.com/photo-1527325678964-54921661f888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1588271315306-e2f7d6bbf591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1604143297773-eb7084db2b52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  ];

  return (
    <div>
      <h2>Image Test</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {testImages.map((src, index) => (
          <div key={index}>
            <p>Image {index + 1}:</p>
            <img 
              src={src} 
              alt={`Test ${index + 1}`} 
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              onLoad={() => console.log(`Image ${index + 1} loaded successfully`)}
              onError={() => console.log(`Image ${index + 1} failed to load`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;