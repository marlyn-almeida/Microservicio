import React, { useState, useEffect } from 'react';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Primera solicitud para obtener el enlace a los productos
    fetch('/api/inventario/')
      .then(response => response.json())
      .then(data => {
        console.log('Enlace a los productos:', data.productos); // Verifica el enlace
        return fetch(data.productos);
      })
      .then(response => response.json())
      .then(productosData => {
        console.log('Datos de productos:', productosData); // Verifica los datos
        if (Array.isArray(productosData)) {
          setProductos(productosData);
        } else {
          console.error('La respuesta no es un arreglo:', productosData);
          setProductos([]); // Maneja el error estableciendo productos como un arreglo vacío
        }
      })
      .catch(error => console.error('Error fetching productos:', error))
      .finally(() => setLoading(false)); // Indica que la carga ha terminado
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Inventario de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - {producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;

