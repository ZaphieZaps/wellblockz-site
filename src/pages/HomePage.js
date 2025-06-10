// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Don't forget to keep importing your CSS
import bgImage from '../assets/bg-landing.png.png'; // Your background image
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

function HomePage() {
  return (
    // UPDATED: Now passing the image URL via a CSS custom property '--bg-image'
    <div className="App" style={{ '--bg-image': `url(${bgImage})` }}>
      <header className="App-header">Welcome to WellBlockz 💊</header>

      <div className="app-buttons-section">
        <button
          className="app-button"
          onClick={() =>
            window.open('https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a', '_blank')
          }
        >
          Launch My Health App 🩺
        </button>
        <div className="app-description">Track your vitals, meds, and symptoms</div>

        <button
          className="app-button"
          onClick={() =>
            window.open('https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-c22f-4dee-af81-9cceba6f5546', '_blank')
          }
        >
          Launch Hair Journey Tracker 💇‍♀️
        </button>
        <div className="app-description">Monitor your hair growth and care routines</div>

        <button
          className="app-button"
          onClick={() =>
            window.open('https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c', '_blank')
          }
        >
          Launch Mental Wellness Journal 🧠
        </button>
        <div className="app-description">Log moods, thoughts, and mindfulness practices</div>
      </div>

      <NewsletterSignup />

      <Footer />
    </div>
  );
}

export default HomePage;