import React, { useEffect, useState } from 'react';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/clientes/')
      .then(response => response.json())
      .then(data => setClientes(data))
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
      <h2>Lista de Clientes</h2>
      {clientes.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay clientes disponibles.</p>
      )}
    </div>
  );
}

export default Clientes;




