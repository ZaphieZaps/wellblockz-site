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
      }}
    >
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'blog' && <BlogPage setPage={setPage} />}

      <footer className="footer">
        <p>© 2025 WellBlockz</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻</a>
          <a href="mailto:someone@example.com">✉️</a>
        </div>
        <p className="footer-link" onClick={() => setPage('blog')}>Visit our Blog</p>
      </footer>
    </div>
  );
}

export default App;












