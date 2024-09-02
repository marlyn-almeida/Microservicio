import React, { useEffect, useState } from 'react';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/admin/inventario/producto/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Asegúrate de que 'data' es un array
        if (Array.isArray(data)) {
          setVentas(data);
        } else {
          throw new Error('Los datos recibidos no son un array');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error al obtener los datos:', error); // Agrega un log para más detalles
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Ventas</h2>
      {ventas.length === 0 ? (
        <p>No hay ventas disponibles.</p>
      ) : (
        <ul>
          {ventas.map((venta, index) => (
            <li key={index}>
              {venta.nombreProducto} - {venta.cantidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ventas;



