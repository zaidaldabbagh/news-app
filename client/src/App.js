import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [pinned, setPinned] = useState([]);

  // Handle search results
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/search?q=${query}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Handles pinning of articles
  const handlePin = (item) => {
    setPinned((prev) => [...prev, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>News Search</h1>
        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div>
          <h2>Search Results</h2>
          {results.map((result, index) => (
            <div key={index}>
              <h3>{result.title}</h3>
              <p>Section: {result.section}</p>
              <p>Published: {result.publicationDate}</p>
              <a href={result.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
              <button onClick={() => handlePin(result)}>Pin</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Pinned Articles</h2>
          {pinned.map((pin, index) => (
            <div key={index}>
              <h3>{pin.title}</h3>
              <p>Section: {pin.section}</p>
              <p>Published: {pin.publicationDate}</p>
              <a href={pin.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
