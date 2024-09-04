import React, { useEffect, useState } from 'react';

function Ventas() {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/ventas/ventas/')
      .then(response => response.json())
      .then(data => setVentas(data))
      .catch(error => {
        setError(error.message);
        console.error('Error:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="section">
      <h2>Lista de Ventas</h2>
      {ventas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map(venta => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.cliente}</td>
                <td>{new Date(venta.fecha).toLocaleString()}</td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {venta.detalles.map(detalle => (
                        <tr key={detalle.id}>
                          <td>{detalle.producto}</td>
                          <td>{detalle.cantidad}</td>
                          <td>${detalle.precio_total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay ventas disponibles.</p>
      )}
    </div>
  );
}

export default Ventas;









