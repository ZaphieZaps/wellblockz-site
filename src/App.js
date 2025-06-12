// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './components/BlogPostDetail';
import Navbar from './components/NavBar'; 

import './App.css';

// A component to handle conditional Navbar rendering
function AppContent() {
  const location = useLocation(); // Get the current URL pathname

  // Determine if Navbar should be shown at all
  // Show Navbar if path is NOT exactly '/' (homepage)
  const showNavbar = location.pathname !== '/'; 

  // Determine if Navbar should be at the bottom
  // Show at bottom for blog paths
  const navbarAtBottom = location.pathname.startsWith('/blog');

  return (
    <div className="App">
      {/* Navbar rendered at the top by default, but conditionally hidden for homepage */}
      {!navbarAtBottom && showNavbar && <Navbar />} 
      
      {/* Main content area */}
      <main className={`app-main-content ${navbarAtBottom ? 'content-with-bottom-navbar' : ''}`}> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          {/* Add other routes here */}
        </Routes>
      </main>

      {/* Navbar rendered at the bottom only for blog paths */}
      {navbarAtBottom && showNavbar && <Navbar />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent /> {/* Render the conditional content */}
    </Router>
  );
}

export default App;











