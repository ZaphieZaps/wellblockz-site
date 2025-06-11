// wellblockz-frontend/src/components/BlogPostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Used to get the ID from the URL
import './BlogPostDetail.css'; // Create this CSS file for styling

function BlogPostDetail() {
    const { id } = useParams(); // Get the ID from the URL (e.g., from /blog/12345)
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]); // Re-run effect if the 'id' parameter in the URL changes

    if (loading) {
        return <div className="blog-detail-container">Loading blog post...</div>;
    }

    if (error) {
        return <div className="blog-detail-container error-message">Error: {error}</div>;
    }

    if (!post) {
        return <div className="blog-detail-container no-post-message">Blog post not found.</div>;
    }

    return (
        <div className="blog-detail-container">
            {post.imageUrl && (
                <img src={post.imageUrl} alt={post.title} className="detail-post-image"/>
            )}
            <h1>{post.title}</h1>
            <p className="detail-post-meta">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
            {post.tags && post.tags.length > 0 && (
                <p className="detail-post-tags">Tags: {post.tags.join(', ')}</p>
            )}
            {/* WARNING: Using dangerouslySetInnerHTML. 
            Only use this if you trust the source of 'post.content' (e.g., you are the only one adding content).
            If content can be user-generated, you must sanitize it to prevent XSS attacks.
            For rich text editing, consider libraries like React Markdown or TinyMCE/Quill output.
            */}
            <div className="detail-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
}

export default BlogPostDetail;