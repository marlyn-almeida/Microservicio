import React, { useEffect, useState } from 'react';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('/api/clientes/')
      .then(response => response.json())
      .then(data => setClientes(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="section">
      <h2>Lista de Clientes</h2>
      {clientes.length > 0 ? (
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>{cliente.nombre} - {cliente.email}</li>
          ))}
        </ul>
      ) : (
        <p>No hay clientes disponibles.</p>
      )}
    </div>
  );
}

export default Clientes;


