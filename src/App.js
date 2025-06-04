import React from "react";
import "./App.css";
import bgImage from "./assets/bg-landing.png.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="App-header">Welcome to WellBlockz</h1>

      <div className="app-section">
        <button
          className="app-button"
          onClick={() =>
            window.open(
              "https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a",
              "_blank"
            )
          }
        >
          🩺 Launch Health Tracker
        </button>
        <div className="app-description">Track symptoms and wellness easily</div>

        <button
          className="app-button"
          onClick={() =>
            window.open(
              "https://lovable.dev/projects/2093b8f7-c22f-4dee-af81-9cceba6f5546",
              "_blank"
            )
          }
        >
          💇🏾‍♀️ Launch Hair Journey Tracker
        </button>
        <div className="app-description">Document and visualize hair progress</div>

        <button
          className="app-button"
          onClick={() =>
            window.open(
              "https://lovable.dev/projects/e41fc67b-4eb6-4c3d-a45d-5bca1bc76d6c",
              "_blank"
            )
          }
        >
          🧠 Launch Mental Wellness Journal
        </button>
        <div className="app-description">Reflect on your feelings and moods</div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} WellBlockz</p>
        <a href="/blog" className="footer-link">
          Visit our blog
        </a>
      </footer>
    </div>
  );
}

export default App;










