import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import './BlogPostDetail.css'; // Assuming you have a CSS file for detail page specific styles

function BlogPostDetail() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPost(data);
      } catch (e) {
        setError("Failed to load blog post: " + e.message);
        console.error("Error fetching blog post:", e);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  if (loading) {
    return <div className="blog-detail-loading">Loading blog post...</div>;
  }

  if (error) {
    return <div className="blog-detail-error">{error}</div>;
  }

  if (!blogPost) {
    return <div className="blog-detail-notfound">Blog post not found.</div>;
  }

  return (
    <div className="blog-post-detail-container">
      {/* Display the image/logo from blogPost.imageUrl if it exists */}
      {blogPost.imageUrl && (
        <img src={blogPost.imageUrl} alt={blogPost.title} className="blog-post-image" />
      )}

      <h1>{blogPost.title}</h1>
      {blogPost.tags && <p className="blog-detail-tags">Tags: {blogPost.tags.join(', ')}</p>}
      {blogPost.author && <p className="blog-detail-author">By: {blogPost.author}</p>}
      {blogPost.date && <p className="blog-detail-date">Date: {new Date(blogPost.date).toLocaleDateString()}</p>}

      <hr />

      <div className="blog-detail-content">
        {blogPost.content && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {blogPost.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default BlogPostDetail;