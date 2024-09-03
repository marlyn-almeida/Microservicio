import React, { useEffect, useState } from 'react';

const VentasDetalles = () => {
  const [detalles, setDetalles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetalles = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/ventas/ventas/detalle/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setDetalles(data);
        } else {
          throw new Error('Los datos recibidos no son un array');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetalles();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Detalles de Ventas</h2>
      {detalles.length === 0 ? (
        <p>No hay detalles de ventas disponibles.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Venta ID</th>
              <th>Producto ID</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {detalles.map((detalle) => (
              <tr key={detalle.id}>
                <td>{detalle.id}</td>
                <td>{detalle.venta}</td>
                <td>{detalle.producto}</td>
                <td>{detalle.cantidad}</td>
                <td>${detalle.precio_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VentasDetalles;
