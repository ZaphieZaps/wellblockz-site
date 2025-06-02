import React from 'react';
import './App.css';
import bgImage from './assets/bg-landing.png.png';

function App() {
  return (
    <div className="App">
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>

      <header className="App-header">Welcome to WellBlockz</header>

      <div>
        <button
          className="app-button"
          onClick={() =>
            window.open('https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a', '_blank')
          }
        >
          Launch My Health App
        </button>
        <div className="app-description">Track your vitals, meds, and symptoms</div>

        <button
          className="app-button"
          onClick={() =>
            window.open('https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-9cceba6f5546', '_blank')
          }
        >
          Launch Hair Journey Tracker
        </button>
        <div className="app-description">Monitor your hair growth and care routines</div>

        <button
          className="app-button"
          onClick={() =>
            window.open('https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c', '_blank')
          }
        >
          Launch Mental Wellness Journal
        </button>
        <div className="app-description">Log moods, thoughts, and mindfulness practices</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">© 2025 WellBlockz</div>
          <div className="footer-links">
            <a href="https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a" target="_blank" rel="noopener noreferrer">Health App</a>
            <a href="https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-9cceba6f5546" target="_blank" rel="noopener noreferrer">Hair Tracker</a>
            <a href="https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c" target="_blank" rel="noopener noreferrer">Wellness Journal</a>
          </div>
          <div className="footer-contact">
            <a href="mailto:contact@wellblockz.pw">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;







