// Login.js
import React, { useState } from 'react';
import './Login.css';
import server from '../../services/ServerService';
import LoginService from '../../services/LoginService';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  if (LoginService.isLoggedIn) {
    window.location.href = '/';
  }

  const [user, setEmail] = useState('');
  const [pass, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuario = {
      user,
      pass
    }

    try {
      const response = await server.post('/api/accounts/check-pass', usuario);
      console.log(response);

      if (!response?.id) {
        alert('Usuário ou senha inválidos');
        return;
      }

      // Handle successful login 
      LoginService.login(response.id);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={user}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;