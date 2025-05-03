import React from 'react';
import './Pago.css';

const items = [
  { id: 1, title: 'La Bruja', price: 15000 },
  { id: 2, title: 'Demonios', price: 50000 },
  { id: 3, title: 'El Cementerio', price: 13000 }
];
const SIMULACION = true; // Cambia a false cuando tengas acceso a Wompi real

const Pago = () => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    const reference = `ORD-${Date.now()}`;
    const amountInCents = total * 100;
    const redirectUrl = `http://localhost:3000/confirmacion`;
  
    if (SIMULACION) {
      // Simulación local
      const idTransaccion = `TX-${Math.floor(Math.random() * 1000000)}`;
      const estadoPago = 'APPROVED';
  
      const simulatedUrl = `/confirmacion?status=${estadoPago}&reference=${reference}&id=${idTransaccion}`;
      window.location.href = simulatedUrl;
    } else {
      // Modo real (Wompi)
      const wompiURL = `https://sandbox.wompi.co/checkout/?public-key=pub_test_c6VkaZzRZLTi2zBQy12T5EmEjR9vWWC9&currency=COP&amount-in-cents=${amountInCents}&reference=${reference}&redirect-url=${encodeURIComponent(redirectUrl)}`;
      window.location.href = wompiURL;
    }
  };
  
  return (
    <div className="pago-container">
      <div className="form-section">
        <h2 className="form-title">Datos de entrega</h2>
        <form className="pago-form">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Número de documento" required />
          <input type="text" placeholder="Teléfono" required />
          <input type="text" placeholder="Ciudad" required />
          <input type="text" placeholder="Dirección" required />
        </form>
      </div>

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
        <p className="total">Total: <span>${total.toLocaleString('es-CO')}</span></p>
        <button onClick={handlePayment}>Realizar pago</button>
      </div>
    </div>
  );
};

export default Pago;
