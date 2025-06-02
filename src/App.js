import React from 'react';
import './App.css';
import bgImage from './assets/bg-landing.png.png';

function App() {
  const appStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '2rem',
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  return (
    <div className="App" style={appStyle}>
      <h1 className="App-header"> WellBlockz Lovable Apps</h1>

      <div>
        <button
          className="app-button"
          onClick={() =>
            window.open(
              'https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a',
              '_blank'
            )
          }
        >
          🩺 Health Tracker
        </button>
        <div className="app-description">Track your health daily with ease and love!</div>

        <button
          className="app-button"
          onClick={() =>
            window.open(
              'https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-9cceba6f5546',
              '_blank'
            )
          }
        >
          💇 Hair Journey Tracker
        </button>
        <div className="app-description">Monitor and celebrate your hair growth progress!</div>

        <button
          className="app-button"
          onClick={() =>
            window.open(
              'https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c',
              '_blank'
            )
          }
        >
          🧘 Mental Wellness Journal
        </button>
        <div className="app-description">Keep track of your feelings and stay grounded.</div>
      </div>
    </div>
  );
}

export default App;




