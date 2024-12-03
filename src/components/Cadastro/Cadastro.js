// Cadastro.js
import React, { useState } from 'react';
import './Cadastro.css';
import server from '../../services/ServerService';
import { v4 as uuidv4 } from 'uuid';

function Cadastro() {
  const [isStudent, setIsStudent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: '',
    escola: '',
    uf: '',
    pass: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { nome, sobrenome, email, dataNascimento, escola, uf, pass, confirmarSenha } = formData;

    if (pass !== confirmarSenha) {
      setError('Senhas não conferem');
      setLoading(false);
      return;
    }

    const usuario = {
      id: uuidv4(),
      user: email,
      pass,
      nome,
      sobrenome,
      dataNascimento,
      escola: isStudent ? escola : null,
      funcao: isStudent ? "Estudante" : "",
      uf
    };

    try {
      const response = await server.post('/api/accounts/create-user', usuario);
      console.log(response);
      // Handle successful registration (e.g., redirect or show success message)
    } catch (error) {
      console.error(error);
      setError('Erro ao cadastrar. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" required value={formData.nome} onChange={handleChange} />
        <input type="text" name="sobrenome" placeholder="Sobrenome" required value={formData.sobrenome} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        <input type="date" name="dataNascimento" placeholder="Data de Nascimento" required value={formData.dataNascimento} onChange={handleChange} />
        <input type="text" name="uf" placeholder="UF" required value={formData.uf} onChange={handleChange} maxLength="2" />
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
          <input type="text" name="escola" placeholder="Nome da Escola" required value={formData.escola} onChange={handleChange} />
        )}
        <input type="password" name="pass" placeholder="Senha" required value={formData.pass} onChange={handleChange} autoComplete="new-password" />
        <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" required value={formData.confirmarSenha} onChange={handleChange} autoComplete="new-password" />
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default Cadastro;