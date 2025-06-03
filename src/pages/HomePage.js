import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WellBlockz</h1>
        <p>Track your wellness, own your data 🧘‍♀️🔒</p>
      </header>

      <main className="App-main">
        <div className="app-buttons">
          <Link to="/mood" className="app-button">Mood Tracker</Link>
          <Link to="/journal" className="app-button">Study Journal</Link>
          <Link to="/labnotes" className="app-button">Lab Notes</Link>
        </div>
      </main>

      <footer className="App-footer">
        <div className="footer-content">
          <p>© 2025 WellBlockz. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/blog" className="footer-link">Visit Blog 📝</Link>
          </div>
          <div className="footer-social">
            <a href="https://x.com/wellblockz" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/wellblockz" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;


