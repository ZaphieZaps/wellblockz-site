import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// If you have a specific CSS file for your BlogPage, import it here
// import './BlogPage.css';

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Corrected URL to match backend /api/blog/posts
        const response = await fetch('http://localhost:5000/api/blog/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (e) {
        setError("Failed to load blog posts: " + e.message);
        console.error("Error fetching all blog posts:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className="blog-list-loading">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="blog-list-error">{error}</div>;
  }

  return (
    <div className="blog-overview-container">
      <h1>Our Latest Blog Posts</h1>
      <p>Welcome to the WellBlockz blog! Health tips, updates, and more coming soon.</p>
      
      <div className="blog-post-list">
        {blogPosts.length > 0 ? (
          blogPosts.map(post => (
            <div key={post._id} className="blog-post-card">
              <h2>{post.title}</h2>
              {/* Wrapped summary with ReactMarkdown for proper rendering */}
              <p>
                {post.summary ? (
                  <ReactMarkdown>{post.summary}</ReactMarkdown>
                ) : (
                  'Click to read more.'
                )}
              </p>
              
              <Link to={`/blog/${post._id}`} className="app-button">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <div className="no-posts-found">
            <p>No blog posts available yet. Please ensure your backend is running and serving posts, and your MongoDB has content.</p>
            {/* Hardcoded link removed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;