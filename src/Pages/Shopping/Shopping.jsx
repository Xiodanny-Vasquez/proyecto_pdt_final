import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Shopping.css';

const items = [
  { id: 1, title: 'La Bruja', type: 'Historias', price: 15000, image: '/Assets/Ñ.jpg' },
  { id: 2, title: 'Demonios', type: 'Libro', price: 50000, image: '/Assets/T.jpg' },
  { id: 3, title: 'El Cementerio', type: 'Historias', price: 13000, image: '/Assets/muerte.jpg' }
];

const Shopping = () => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
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
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className="item-info">
                  <img src={item.image} alt={item.title} />
                  <em>{item.title}</em>
                </td>
                <td>{item.type}</td>
                <td>1</td>
                <td>${item.price.toLocaleString('es-CO')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="summary-box">
          <h3>Resumen</h3>
          <ul>
            {items.map(item => (
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
