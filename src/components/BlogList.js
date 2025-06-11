// wellblockz-frontend/src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './BlogList.css'; // Create this CSS file for styling

function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blog/posts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div className="blog-list-container">Loading blog posts...</div>;
    }

    if (error) {
        return <div className="blog-list-container error-message">Error: {error}</div>;
    }

    if (posts.length === 0) {
        return <div className="blog-list-container no-posts-message">No blog posts found yet. Check your backend and add some!</div>;
    }

    return (
        <div className="blog-list-container">
            <h1>Our Latest Articles</h1>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post._id} className="blog-post-card">
                        {post.imageUrl && (
                            <img src={post.imageUrl} alt={post.title} className="post-image"/>
                        )}
                        <h2>{post.title}</h2>
                        <p className="post-author">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
                        <p>{post.excerpt || post.content.substring(0, 150) + '...'}</p>
                        {/* Link to the individual blog post detail page */}
                        <Link to={`/blog/${post._id}`} className="read-more-button">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;