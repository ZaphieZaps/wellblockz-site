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
    color: '#1d3557',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundBlendMode: 'lighten',
  };

  const descriptionStyle = {
    color: '#1d3557',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#a8dadc',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    margin: '10px',
    borderRadius: '12px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  return (
    <div className="App" style={appStyle}>
      <h1 className="App-header">WellBlockz Lovable Apps</h1>

      <div>
        <button
          className="app-button"
          style={buttonStyle}
          onClick={() =>
            window.open(
              'https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a',
              '_blank'
            )
          }
        >
          🩺 Health Tracker
        </button>
        <div className="app-description" style={descriptionStyle}>
          Track your health daily with ease and love!
        </div>

        <button
          className="app-button"
          style={buttonStyle}
          onClick={() =>
            window.open(
              'https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-9cceba6f5546',
              '_blank'
            )
          }
        >
          💇 Hair Journey Tracker
        </button>
        <div className="app-description" style={descriptionStyle}>
          Monitor and celebrate your hair growth progress!
        </div>

        <button
          className="app-button"
          style={buttonStyle}
          onClick={() =>
            window.open(
              'https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c',
              '_blank'
            )
          }
        >
          🧘 Mental Wellness Journal
        </button>
        <div className="app-description" style={descriptionStyle}>
          Keep track of your feelings and stay grounded.
        </div>
      </div>

      <footer style={{ marginTop: '4rem', color: '#1d3557', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} WellBlockz. Built with heart and Lovable.
        <br />
        <a
          href="/blog.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#1d3557',
            textDecoration: 'underline',
            display: 'inline-block',
            marginTop: '0.5rem',
            fontWeight: 'bold'
          }}
        >
          Visit our Blog 📝
        </a>
      </footer>
    </div>
  );
}

export default App;











