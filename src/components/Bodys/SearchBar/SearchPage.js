// SearchPage.js
import React, { useState, useEffect } from 'react';
import './SearchPage.css';
import lupaIcon from './imgs/lupa.png';
import server from '../../../services/ServerService';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    }
  }, [selectedState]);

  const fetchStates = async () => {
    try {
      const response = await server.get('/api/enem-escola/ufs');
      setStates(response.sort((a, b) => a.sigla.localeCompare(b.sigla)));
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const fetchCities = async (siglaUf) => {
    try {
      const response = await server.get(`/api/enem-escola/municipios?siglaUf=${siglaUf}`);
      // Ordena por ordem alfabética=
      setCities(response.sort((a, b) => a.nome.localeCompare(b.nome)));
    } catch (error) {
      console.error('Erro ao buscar municípios:', error);
    }
  };

  const fetchSchools = async () => {
    // É possível buscar escolas pelo seguinte critério:
    // nome
    // siglaUf
    // codigoMunicipio

    let params = "?";
    if (selectedState) {
      params += `siglaUf=${selectedState}&`;
    }

    if (selectedCity) {
      params += `codigoMunicipio=${selectedCity}&`;
    }

    if (query) {
      params += `nome=${query}`;
    }

    try {
      const response = await server.get('/api/enem-escola/escolas'+params);
      const schools = response.sort((a, b) => a.nomes[0].localeCompare(b.nomes[0]));
      const uniqueSchools = schools.filter((school, index, self) => self.findIndex(s => s.id === school.id) === index);
      setSchools(uniqueSchools);
    } catch (error) {
      console.error('Erro ao buscar escolas:', error);
    }
  };

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleSchoolClick = (id) => {
    navigate(`/school/${id}`);
  };

  return (
    <div className="search-page-container card">
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
          <img src={lupaIcon} alt="Ícone de Busca" className="search-icon" onClick={fetchSchools} />
        </div>
        <button className="filter-button btn" onClick={toggleFilters}>
          Filtros
        </button>
      </div>
      {showFilters && (
        <div className="filter-options">
          <div className="filter-option-pair">
            <div className="filter-option">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="filter-select"
              >
                <option value="">Selecione um estado</option>
                {states.map((state) => (
                  <option key={state.id} value={state.sigla}>
                    {state.sigla}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-option">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="filter-select"
                disabled={!selectedState}
              >
                <option value="">Selecione um município</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.nome}>
                    {city.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      {schools.length > 0 && (
        <ul className="results-list">
          {schools.map((school, index) => (
            <li key={index} className="result-item" onClick={() => handleSchoolClick(school.id)}>
              {school.nomes[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchPage;