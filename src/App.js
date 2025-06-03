import React from 'react';
import './App.css';
import bgImage from './assets/bg-landing.png.png';
import HomePage from './HomePage';
import BlogPage from './BlogPage';

function App() {
  const [page, setPage] = React.useState('home');

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
      {page === 'home' ? <HomePage setPage={setPage} /> : <BlogPage setPage={setPage} />}
      <footer className="footer">
        <p>© 2025 WellBlockz</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻</a>
          <a href="mailto:someone@example.com">✉️</a>
        </div>
        <a className="footer-link" onClick={() => setPage('blog')}>Visit our Blog</a>
      </footer>
    </div>
  );
}

export default App;













