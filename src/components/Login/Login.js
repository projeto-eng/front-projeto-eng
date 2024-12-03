// Login.js
import React, { useState } from 'react';
import './Login.css';
import ServerService from '../../services/ServerService';

const server = new ServerService();

function Login() {
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