import React from 'react';
import "../../assets/css/estilosAdmin/estilostabla.css"
import useAuth from "../../hooks/UseAuth.js"

const TablaConDatos = () => {
  useAuth();

  const datos = [
    { conductor: 'Juan Pérez', vehiculo: 'Autobús', ruta: 'Ruta 1', placa: 'ABC123', horaSalida: '08:00 AM', destino: 'Centro' },
    { conductor: 'Carlos Gómez', vehiculo: 'Autobús', ruta: 'Ruta 2', placa: 'XYZ789', horaSalida: '09:00 AM', destino: 'Sur' },
    { conductor: 'Pedro Martínez', vehiculo: 'Autobús', ruta: 'Ruta 3', placa: 'LMN456', horaSalida: '10:00 AM', destino: 'Norte' },
    { conductor: 'José Rodríguez', vehiculo: 'Autobús', ruta: 'Ruta 4', placa: 'OPQ123', horaSalida: '11:00 AM', destino: 'Este' },
    { conductor: 'Andrés Ramírez', vehiculo: 'Autobús', ruta: 'Ruta 5', placa: 'RST789', horaSalida: '12:00 PM', destino: 'Oeste' },
    { conductor: 'Fernando Torres', vehiculo: 'Autobús', ruta: 'Ruta 6', placa: 'UVW456', horaSalida: '01:00 PM', destino: 'Centro' },
    { conductor: 'Ricardo Díaz', vehiculo: 'Autobús', ruta: 'Ruta 7', placa: 'XYZ123', horaSalida: '02:00 PM', destino: 'Sur' },
    { conductor: 'Jorge Hernández', vehiculo: 'Autobús', ruta: 'Ruta 8', placa: 'ABC789', horaSalida: '03:00 PM', destino: 'Norte' },
    { conductor: 'Manuel López', vehiculo: 'Autobús', ruta: 'Ruta 9', placa: 'DEF456', horaSalida: '04:00 PM', destino: 'Este' },
    { conductor: 'Alberto García', vehiculo: 'Autobús', ruta: 'Ruta 10', placa: 'GHI123', horaSalida: '05:00 PM', destino: 'Oeste' },
  ];

  return (
    <div className="tabla-container">
      
      <div className="add-button-container">
        <button className="add-button">Agregar</button>
      </div>

      
      <table className="table">
  <thead>
    <tr>
      <th className="custom-header">Conductor</th>
      <th className="custom-header">Acciones</th>
      <th className="custom-header">Vehículo</th>
      <th className="custom-header">Ruta</th>
      <th className="custom-header">Placa</th>
      <th className="custom-header">Hora de Salida</th>
      <th className="custom-header">Destino</th>
    </tr>
  </thead>
  <tbody>
    {datos.map((dato, index) => (
      <tr key={index}>
        <td>{dato.conductor}</td>
        <td>
          <button className="ver-mas-button">Ver más</button> 
        </td>
        <td>{dato.vehiculo}</td>
        <td>{dato.ruta}</td>
        <td>{dato.placa}</td>
        <td>{dato.horaSalida}</td>
        <td>{dato.destino}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default TablaConDatos;
