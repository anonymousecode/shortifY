import React from 'react';
import '../styles/loader.css'; // Optional: For styling

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;