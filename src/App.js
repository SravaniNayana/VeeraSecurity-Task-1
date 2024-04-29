// frontend/src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://mega.nz/folder/LFEj2QSI#wABns3lxR1QoOUeeAX54yA/file/zZcxnTJa`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h1>Web Search Application</h1>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
