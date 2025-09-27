// src/components/Greeting.jsx
import React from 'react';

const Greeting = ({ name }) => {
  const backgroundStyle = {
    backgroundColor: '#f0f9ff', // Set the background color using inline CSS
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg text-center"
      style={backgroundStyle}
    >
      <h1 className="text-4xl font-bold text-teal-600">
        Hello, {name}! Good Morning!
      </h1>
    </div>
  );
};

export default Greeting;
