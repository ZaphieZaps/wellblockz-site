import React from 'react';
import './App.css';
import bgImage from './assets/bg-landing.png.png';

function App() {
  return (
    <>
      {/* Floating background image */}
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>

      {/* Floating animated health/science icons */}
      <div className="floating-icons">
        <span className="float-icon" style={{ top: '10%', left: '5%' }}>🧬</span>
        <span className="float-icon" style={{ top: '30%', left: '70%' }}>💊</span>
        <span className="float-icon" style={{ top: '60%', left: '20%' }}>🧠</span>
        <span className="float-icon" style={{ top: '80%', left: '80%' }}>🧪</span>
        <span className="float-icon" style={{ top: '50%', left: '40%' }}>💇</span>
        <span className="float-icon" style={{ top: '25%', left: '15%' }}>🩺</span>
      </div>

      {/* Main app content */}
      <div className="App">
        <header className="App-header">Welcome to WellBlockz 💊</header>

        <div>
          <button
            className="app-button"
            onClick={() =>
              window.open('https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a', '_blank')
            }
          >
            Launch My Health App 🩺
          </button>
          <div className="app-description">Track your vitals, meds, and symptoms</div>

          <button
            className="app-button"
            onClick={() =>
              window.open('https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-9cceba6f5546', '_blank')
            }
          >
            Launch Hair Journey Tracker 💇‍♀️
          </button>
          <div className="app-description">Monitor your hair growth and care routines</div>

          <button
            className="app-button"
            onClick={() =>
              window.open('https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c', '_blank')
            }
          >
            Launch Mental Wellness Journal 🧠
          </button>
          <div className="app-description">Log moods, thoughts, and mindfulness practices</div>
        </div>
      </div>
    </>
  );
}

export default App;







