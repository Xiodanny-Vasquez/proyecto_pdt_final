import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmacion.css';

const Confirmacion = () => {
  const location = useLocation();
  const [estadoPago, setEstadoPago] = useState(null);
  const [referencia, setReferencia] = useState(null);
  const [idTransaccion, setIdTransaccion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const estado = query.get('status');
    const ref = query.get('reference');
    const id = query.get('id');
    
    // Verificar si los parámetros existen
    if (!estado || !ref || !id) {
      setError('Faltan parámetros de la transacción.');
      return;
    }

    setEstadoPago(estado);
    setReferencia(ref);
    setIdTransaccion(id);
  }, [location]);

  return (
    <div className="confirmacion-container">
      <h1>Confirmación de Pago</h1>
      {error ? (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      ) : estadoPago ? (
        <div>
          <p>
            <strong>Estado del pago:</strong>{' '}
            <span className={estadoPago === 'APPROVED' ? 'estado-aprobado' : 'estado-rechazado'}>
              {estadoPago === 'APPROVED' ? 'Aprobado ✅' : estadoPago}
            </span>
          </p>
          <p><strong>Referencia:</strong> {referencia}</p>
          <p><strong>ID de Transacción:</strong> {idTransaccion}</p>
        </div>
      ) : (
        <p>Cargando resultado del pago...</p>
      )}
    </div>
  );
};

export default Confirmacion;
