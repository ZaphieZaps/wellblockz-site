import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to <strong>WellBlockz</strong></h1>
        <p>Your hub for health, wellness, and self-care tools.</p>

        <div className="apps-grid">
          <div className="app-card">
            <h2>Health Tracker</h2>
            <p>Track your physical health with ease.</p>
            <a href="https://lovable.dev/projects/6be352c3-9c67-432d-9036-e096703e0e4a" target="_blank" rel="noopener noreferrer">
              <button>Launch Health App</button>
            </a>
          </div>

          <div className="app-card">
            <h2>Hair Journey Tracker</h2>
            <p>Document your hair growth and care routine.</p>
            <a href="https://lovable.dev/projects/your-hair-app-id" target="_blank" rel="noopener noreferrer">
              <button>Launch Hair Tracker</button>
            </a>
          </div>

          <div className="app-card">
            <h2>Mental Wellness Journal</h2>
            <p>Reflect on your feelings and stay grounded.</p>
            <a href="https://lovable.dev/projects/your-mental-health-app-id" target="_blank" rel="noopener noreferrer">
              <button>Launch Mental Health App</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;


