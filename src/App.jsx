// src/App.jsx
import React from 'react';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-red-100">
      <Greeting name="Raj" /> {/* Passing "John" as the name prop */}
    </div>
  );
};

export default App;

