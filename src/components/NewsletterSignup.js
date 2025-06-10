import React, { useState } from 'react';
import './NewsletterSignup.css'; // Make sure this CSS file exists and has the .error-message style if you added it

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // State to show loading status
  const [error, setError] = useState(null); // State to store and display error messages

  const handleSubmit = async (e) => { // Made the function 'async' to use await
    e.preventDefault(); // Prevent the default form submission behavior

    setLoading(true); // Start loading state
    setError(null);   // Clear any previous error messages

    try {
      // Send a POST request to your backend server's subscribe endpoint
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tell the server we're sending JSON
        },
        body: JSON.stringify({ email }), // Convert the email object to a JSON string
      });

      // Parse the JSON response from the server
      const data = await response.json();

      if (response.ok) { // Check if the HTTP status code is in the 200-299 range (success)
        console.log('Subscription successful:', data);
        setSubmitted(true); // Set submitted state to true to show thank you message
        setEmail('');       // Clear the email input field after successful submission
      } else {
        // If the server responded with an error (e.g., 400, 500)
        console.error('Subscription failed:', data);
        // Display the error message from the server, or a generic one
        setError(data.message || 'Failed to subscribe. Please try again.');
        setSubmitted(false); // Ensure thank you message is not shown on error
      }
    } catch (err) {
      // Catch network errors (e.g., server is not running, no internet connection)
      console.error('Network error:', err);
      setError('Could not connect to the server. Please ensure the backend is running.');
      setSubmitted(false);
    } finally {
      setLoading(false); // Always set loading to false when the request is complete
    }
  };

  return (
    <div className="newsletter-container">
      {!submitted ? ( // Render the form if not submitted
        <>
          <h2>Join Our Newsletter!</h2>
          <p>Stay updated with our latest health tips and app features.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // HTML5 validation: makes the field mandatory
              disabled={loading} // Disable input while the subscription is in progress
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe'} {/* Change button text based on loading state */}
            </button>
            {error && <p className="error-message">{error}</p>} {/* Display error message if 'error' state has content */}
          </form>
        </>
      ) : ( // Render the thank you message if submitted successfully
        <p className="thank-you">Thank you for subscribing! 🎉</p>
      )}
    </div>
  );
}

export default NewsletterSignup;