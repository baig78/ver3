// Loader.js
import React from 'react';

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  ) : null;
};

export default Loader;
