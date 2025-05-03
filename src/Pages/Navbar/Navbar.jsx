import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logopdt.jpg" alt="Logo Portal del Terror" />
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Inicio</NavLink></li>
        <li><NavLink to="/historias" className={({ isActive }) => isActive ? 'active' : ''}>Historias</NavLink></li>
        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink></li>
        <li><NavLink to="/sobre-nosotros" className={({ isActive }) => isActive ? 'active' : ''}>Sobre nosotros</NavLink></li>
      </ul>
      <div className="navbar-icons">
        <NavLink to="/carrito">
          <FaShoppingCart className="icon" title="Carrito" />
        </NavLink>
        <NavLink to="/login">
    <FaUser className="icon" title="Usuario" />
  </NavLink>
</div>
    </nav>
  );
};

export default Navbar;