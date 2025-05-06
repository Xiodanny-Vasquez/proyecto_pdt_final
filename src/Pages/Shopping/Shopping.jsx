import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shopping.css';
import { useCart } from '../../context/CartContext'; // ← Importa el contexto

const Shopping = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/pago');
  };

  return (
    <div className="shopping-container">
      <h2 className="shopping-title">Bandeja de compras</h2>
      <div className="shopping-content">
        <table className="shopping-table">
          <thead>
            <tr>
              <th>Historias</th>
              <th>Descripción</th>
              <th>Quitar</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="item-info">
                  <img src={item.image} alt={item.title} />
                  <em>{item.title}</em>
                </td>
                <td>Libro de terror</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "1px solid #ff0000", color: "#ff0000", padding: "0.3rem 0.8rem", cursor: "pointer" }}>X</button>
                </td>
                <td>${item.price.toLocaleString('es-CO')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="summary-box">
          <h3>Resumen</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} <span>${item.price.toLocaleString('es-CO')}</span>
              </li>
            ))}
          </ul>
          <hr />
          <p className="total"><strong>Total:</strong> <span>${total.toLocaleString('es-CO')}</span></p>
          <button onClick={handleConfirm}>Confirmar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
