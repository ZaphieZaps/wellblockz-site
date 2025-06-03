import React, { useState } from 'react';
import './App.css';
import bgImage from './assets/bg-landing.png.png';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#1d3557',
      }}
    >
      {page === 'home' ? <HomePage /> : <BlogPage />}

      <footer className="footer">
        <p>© 2025 WellBlockz</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻</a>
          <a href="mailto:contact@wellblockz.pw">✉️</a>
        </div>
        <p className="footer-link" onClick={() => setPage(page === 'home' ? 'blog' : 'home')}>
          {page === 'home' ? 'Visit our Blog' : 'Back to Home'}
        </p>
      </footer>
    </div>
  );
}

export default App;












