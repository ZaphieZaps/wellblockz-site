import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import bgImage from '../assets/bg-landing.png.png';

function HomePage() {
  return (
    <div className="App">
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>

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

        {/* Blog page link */}
        <Link to="/blog" className="app-button">Visit Blog 📝</Link>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 WellBlockz. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="24" height="24" fill="#1d3557" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.88-2.35 8.56 8.56 0 01-2.7 1.03 4.25 4.25 0 00-7.29 3.88 12.04 12.04 0 01-8.75-4.44 4.25 4.25 0 001.32 5.67 4.24 4.24 0 01-1.93-.53v.05a4.26 4.26 0 003.41 4.17 4.28 4.28 0 01-1.92.07 4.26 4.26 0 003.98 2.96A8.53 8.53 0 012 19.54a12.07 12.07 0 006.52 1.91c7.84 0 12.13-6.49 12.13-12.12 0-.18 0-.36-.01-.54A8.65 8.65 0 0024 4.59a8.38 8.38 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="24" height="24" fill="#1d3557" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.86 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.25-3.25-.13-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0C17.7 6.7 18.7 7.02 18.7 7.02c.66 1.68.25 2.92.12 3.23.78.85 1.25 1.93 1.25 3.25 0 4.64-2.8 5.66-5.47 5.96.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:contact@wellblockz.pw" aria-label="Email">
              <svg width="24" height="24" fill="#1d3557" viewBox="0 0 24 24">
                <path d="M12 13.065L1.5 6.75V18h21V6.75L12 13.065zm0-2.13L22.5 4.5H1.5L12 10.935z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
