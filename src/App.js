import React from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* Background image and overlay */}
      <div className="background-image" />
      <div className="background-overlay" />

      {/* Foreground content */}
      <div className="App">
        <header className="App-header">
          Welcome to WellBlockz
        </header>

        <button className="app-button">Explore</button>

        <p className="app-description">
          💡 Your wellness journey starts here
        </p>

        {/* Add more content as needed */}
      </div>
    </>
  );
}

export default App;






