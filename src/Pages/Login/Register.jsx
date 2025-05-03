import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(formData.age) < 18) {
      setError('Debes ser mayor de 18 años para registrarte.');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
    } else {
      setError('');
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-heading">Crear cuenta</h2>
        <div className="register-left">
          <h1 className="register-title">
            "Haz parte de <br />
            los que dejaron <br />
            el miedo atrás y <br />
            se atrevieron"
          </h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              name="fullName"
              className="input"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Edad"
              name="age"
              className="input"
              value={formData.age}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              className="input"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              className="input"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {error && <p className="error-message">{error}</p>}
            <button className="register-button" type="submit">
              Unirme
            </button>
          </form>
        </div>
        <div className="register-right">
          <img
            src="/Assets/portalterror.jpg"
            alt="Logo Portal del Terror"
            className="register-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
