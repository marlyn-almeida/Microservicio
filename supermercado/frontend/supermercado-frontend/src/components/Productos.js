import React, { useEffect, useState } from 'react';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/inventario/productos/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setProductos(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="section">
      <h2>Lista de Productos</h2>
      {error && <p>Error: {error}</p>}
      {productos.length > 0 ? (
        <ul>
          {productos.map(producto => (
            <li key={producto.id}>
              {producto.nombre} - {producto.descripcion} - ${producto.precio} - Stock: {producto.stock}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
}

export default Productos;
