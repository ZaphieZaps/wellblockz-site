// wellblockz-frontend/src/components/NewsletterSignup.js
import React, { useState } from 'react';
import './NewsletterSignup.css';

function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState(''); // New state for first name
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setIsError(false); // Reset error state

        try {
            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, firstName }), // Include firstName here
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setEmail(''); // Clear email input on success
                setFirstName(''); // Clear first name input on success
            } else {
                setIsError(true);
                setMessage(data.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setIsError(true);
            setMessage('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="newsletter-container">
            <h2>Join Our Newsletter</h2>
            <p>Stay updated with the latest from WellBlockz!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" // Input type for first name
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required // Make it required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && (
                <p className={`message ${isError ? 'error' : 'success'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default NewsletterSignup;