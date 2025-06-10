import React from 'react';
import './Footer.css'; // Imports the footer's dedicated styles
import { Link, useLocation } from 'react-router-dom'; // Imports Link and useLocation hooks

function Footer() {
  const location = useLocation(); // Gets the current location object from React Router

  // Checks if the current path is exactly '/blog'
  const isBlogPage = location.pathname === '/blog';

  return (
    <footer className="footer">
      {/* Conditionally renders the "Visit our Blog" link FIRST */}
      {/* It will only appear if the current page is NOT the blog page */}
      {!isBlogPage && (
        <Link to="/blog" className="footer-link">
          Visit our Blog 📝
        </Link>
      )}
      {/* Container for the copyright text, now placed below the link */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} WellBlockz. Built with heart and Lovable.
      </div>
    </footer>
  );
}

export default Footer;

