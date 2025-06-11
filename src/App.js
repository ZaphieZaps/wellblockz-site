// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
// Assuming BlogPostDetail is now a page component, or you'll manage it within BlogPage
import BlogPostDetail from './components/BlogPostDetail'; // Keep this path if it's a component
// OR if you decide to make it a dedicated page:
// import BlogPostDetailPage from './pages/BlogPostDetailPage'; // New page component for detail

// No Footer import here as it's handled in individual pages (as per your comment)

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the main Blog page (listing all posts) */}
        <Route path="/blog" element={<BlogPage />} />

        {/* Route for a single Blog Post Detail page */}
        {/* This will render the BlogPostDetail component when the URL matches /blog/some-id */}
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        {/* If you created a dedicated page for detail:
        <Route path="/blog/:id" element={<BlogPostDetailPage />} />
        */}

      </Routes>
    </Router>
  );
}

export default App;











