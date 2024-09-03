import React, { useEffect, useState } from 'react';
import './Productos.css'; // Asegúrate de crear y ajustar este archivo de estilos

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/inventario/productos/')
      .then(response => response.json())
      .then(data => setProductos(data))
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
      <h2>Lista de Productos</h2>
      {productos.length > 0 ? (
        <table className="productos-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
}

export default Productos;

