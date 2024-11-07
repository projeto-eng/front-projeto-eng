import "./SearchBar.css";
import React, { useState } from 'react';

function SearchBar({ data }) {
  const [query, setQuery] = useState('');

  // Filtra os dados com base na consulta de pesquisa
  const filteredData = query
    ? data.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Pesquise por uma escola..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {filteredData.length > 0 && (
        <ul className="results-list">
          {filteredData.map((item, index) => (
            <li key={index} className="result-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;