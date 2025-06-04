import React from 'react';

function BlogPage({ setPage }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 Blog</h1>
      <p>Welcome to the WellBlockz blog! Health tips, updates, and more coming soon.</p>
      <button onClick={() => setPage('home')}>Back to Home</button>
    </div>
  );
}

export default BlogPage;

