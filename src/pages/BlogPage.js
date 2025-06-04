import React from "react";
import "../App.css";
import blogBg from "../assets/blog-background.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa6";

function BlogPage() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${blogBg})`,
      }}
    >
      <h1 className="App-header">📝 WellBlockz Blog</h1>
      <div className="app-description">
        Health tips, wellness insights, and latest updates from WellBlockz.
      </div>

      {/* Placeholder blog content */}
      <div>
        <h3>Coming Soon: Our First Health Article!</h3>
        <p>Stay tuned for expert advice and product updates from our team.</p>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} WellBlockz</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
        <Link to="/" className="footer-link">Back to Home</Link>
      </footer>
    </div>
  );
}

export default BlogPage;

