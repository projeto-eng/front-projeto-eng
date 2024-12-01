import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import About from './components/About/About';
import Init from './components/Init/Init';
import Team from './components/team/Team';
import Services from './components/Services/Services';
import WhyUs from './components/why-us/why-us';
import Cadastro from './components/Cadastro/Cadastro';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'


export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Init />} /> 
          <Route path="login" element={<Login />} /> 
          <Route path="cadastro" element={<Cadastro />} /> 
          <Route path="team" element={<Team />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="services" element={<Services />} /> 
          <Route path="why-us" element={<WhyUs />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
