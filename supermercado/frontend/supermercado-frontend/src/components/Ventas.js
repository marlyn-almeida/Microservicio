import React, { useState, useEffect } from 'react';

function Ventas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    // Reemplaza la URL con la de tu backend
    fetch('/api/ventas/')
      .then(response => response.json())
      .then(data => setVentas(data))
      .catch(error => console.error('Error fetching ventas:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Ventas</h2>
      <ul>
        {ventas.map((venta, index) => (
          <li key={index}>
            {venta.producto} - {venta.cantidad} unidades - {venta.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ventas;

