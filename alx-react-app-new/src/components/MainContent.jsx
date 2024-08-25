// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <h2 style={{ color: 'darkblue', textAlign: 'center' }}>Welcome to My Favorite Cities</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
};

export default MainContent;