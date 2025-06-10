// src/pages/BlogPage.js
import React from 'react';
import bgImage from '../assets/bg-landing.png.png'; // Your background image
import Footer from '../components/Footer';

function BlogPage() {
  return (
    // UPDATED: Now passing the image URL via a CSS custom property '--bg-image'
    <div
      className="App"
      style={{
        '--bg-image': `url(${bgImage})`, // This passes the image URL as a CSS variable
      }}
    >
      <h1 className="App-header">📝 Blog</h1>
      <p>Welcome to the WellBlockz blog! Health tips, updates, and more coming soon.</p>

      <Footer />
    </div>
  );
}

export default BlogPage;


