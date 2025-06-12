// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './NavBar.css';

function Navbar() {
  const location = useLocation();
  // Add a class if the path starts with /blog to apply bottom styling
  const isBlogPage = location.pathname.startsWith('/blog');

  return (
    <nav className={`navbar ${isBlogPage ? 'navbar-bottom' : ''}`}> {/* Add conditional class */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        {/* Add more navigation links here if needed */}
      </ul>
    </nav>
  );
}

export default Navbar;