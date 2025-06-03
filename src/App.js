// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <footer className="footer">
          <p>© 2025 WellBlockz</p>
          <Link to="/blog" className="footer-link">Visit our Blog</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;












