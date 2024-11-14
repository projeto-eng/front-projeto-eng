// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';
import lupaIcon from './imgs/lupa.png'; // Verifique se a extensão está correta

function SearchBar({ data = [], cities = {}, states = [] }) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [stateQuery, setStateQuery] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [activeSort, setActiveSort] = useState('');

  const toggleFilters = () => setShowFilters(!showFilters);

  const sortData = (data, key, direction = 'asc') => {
    return [...data].sort((a, b) => {
      if (typeof a[key] === 'string') {
        return direction === 'asc'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      } else {
        return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
      }
    });
  };

  const handleSortClick = (type) => {
    setActiveSort(type === activeSort ? '' : type);
  };

  const applySorting = (data) => {
    switch (activeSort) {
      case 'bestRating':
        return sortData(data, 'evaluation', 'desc');
      case 'worstRating':
        return sortData(data, 'evaluation', 'asc');
      case 'highestScore':
        return sortData(data, 'enemScore', 'desc');
      case 'lowestScore':
        return sortData(data, 'enemScore', 'asc');
      default:
        return data;
    }
  };

  const filteredData = applySorting(
    data.filter(item =>
      item.name &&
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      (!selectedCity || item.city === selectedCity) &&
      (!selectedState || item.state === selectedState)
    )
  );

  const filteredStates = states.filter(state =>
    state.toLowerCase().includes(stateQuery.toLowerCase())
  ).sort((a, b) => a.localeCompare(b));

  const filteredCities = selectedState ? (cities[selectedState] || []).filter(city =>
    city.toLowerCase().includes(cityQuery.toLowerCase())
  ).sort((a, b) => a.localeCompare(b)) : [];

  return (
    <div className="search-bar-container">
      <div className="selected-filters">
        {selectedState && (
          <span className="filter-tag">
            {selectedState} <button onClick={() => { setSelectedState(''); setSelectedCity(''); }}>x</button>
          </span>
        )}
        {selectedCity && (
          <span className="filter-tag">
            {selectedCity} <button onClick={() => setSelectedCity('')}>x</button>
          </span>
        )}
      </div>
      <div className="search-input-wrapper">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Pesquise por uma escola..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <img src={lupaIcon} alt="Ícone de Busca" className="search-icon" />
        </div>
        <button className="filter-button" onClick={toggleFilters}>
          Filtros
        </button>
      </div>
      {query && (
        <>
          {filteredData.length > 0 ? (
            <ul className="results-list">
              {filteredData.map((item, index) => (
                <li 
                  key={index} 
                  className="result-item"
                  onClick={() => setQuery(item.name)}
                >
                  {item.name} - Enem: {item.enemScore}, Avaliação: {item.evaluation}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum resultado encontrado</p>
          )}
        </>
      )}
      {showFilters && (
        <div className="filter-options">
          <div className="filter-option-pair">
            <div className="filter-option">
              <input
                type="text"
                placeholder="Procure por estado..."
                value={stateQuery}
                onChange={(e) => setStateQuery(e.target.value)}
                className="filter-input"
              />
              <ul className="filter-list">
                {filteredStates.map((state, index) => (
                  <li key={index} onClick={() => { setSelectedState(state); setStateQuery(''); }} className="filter-list-item">
                    {state}
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-option">
              <input
                type="text"
                placeholder="Procure por município..."
                value={cityQuery}
                onChange={(e) => setCityQuery(e.target.value)}
                className="filter-input"
                disabled={!selectedState}
              />
              <ul className="filter-list">
                {filteredCities.map((city, index) => (
                  <li key={index} onClick={() => setSelectedCity(city)} className="filter-list-item">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sort-buttons">
            <button className={`sort-button ${activeSort === 'bestRating' ? 'active' : ''}`} onClick={() => handleSortClick('bestRating')}>
              Melhor Avaliação ▲
            </button>
            <button className={`sort-button ${activeSort === 'worstRating' ? 'active' : ''}`} onClick={() => handleSortClick('worstRating')}>
              Pior Avaliação ▼
            </button>
            <button className={`sort-button ${activeSort === 'highestScore' ? 'active' : ''}`} onClick={() => handleSortClick('highestScore')}>
              Maior Nota do Enem ▲
            </button>
            <button className={`sort-button ${activeSort === 'lowestScore' ? 'active' : ''}`} onClick={() => handleSortClick('lowestScore')}>
              Menor Nota do Enem ▼
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;