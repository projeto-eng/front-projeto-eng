// Cadastro.js
import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form className="cadastro-form">
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Sobrenome" required />
        <input type="email" placeholder="Email" required />
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={isStudent}
              onChange={() => setIsStudent(!isStudent)}
            />
            Sou aluno
          </label>
        </div>
        {isStudent && (
          <>
            <input type="text" placeholder="Nome da Escola" required />
            <input type="text" placeholder="Ano de Ingresso" required />
          </>
        )}
        <input type="password" placeholder="Senha" required />
        <input type="password" placeholder="Confirmar Senha" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;