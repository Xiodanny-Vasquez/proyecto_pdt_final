import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'; 

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <img src="/logopdt.jpg" alt="Portal del Terror" className="logo" />
          </div>
          <div className="login-right">
            <h2 className="form-title">Inicio de Sesión</h2>
            <input type="text" placeholder="Nombre" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <button className="login-button">Ingresar</button>
            <NavLink to="/register" className="register-link">Nuevo Usuario</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
