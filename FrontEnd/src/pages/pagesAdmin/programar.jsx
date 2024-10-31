import React from 'react';
import "../../assets/css/estilosAdmin/estilostabla.css"
import useAuth from "../../hooks/UseAuth.js"
import { getAllViajes } from '../../services/ViajesService.js';
import { useEffect, useState } from "react"

const viajes = () => {
  useAuth();

  const [viajes, setViajes] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchViajes()
  }, [])

  const fetchViajes = async () => {
    try {
      const datos = await getAllViajes()
      setViajes(datos)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className="tabla-container">

    <div className="add-button-container">
      <button className="btn btn-success">Agregar</button>
    </div>

    <table className="table">
      <thead>
        <tr>
          <th className="custom-header">Vehiculo</th>
          <th className="custom-header">Conductor</th>
          <th className="custom-header">Ruta</th>
          <th className="custom-header">Hora Inicio</th>
          <th className="custom-header">Hora Fin</th>
          <th className="custom-header">Duracion</th>
          <th className="custom-header">Estado</th>
          <th className="custom-header">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {viajes.map((c) =>
          <tr key={c.id_viaje}>
            <td>{c.numero_interno}</td>
            <td>{`${c.primer_nombre} ${c.segundo_nombre} ${c.primer_apellido} ${c.segundo_apellido}`}</td>
            <td>{`${c.codigo_ruta} - ${c.nombre_ruta}`}</td>
            <td>{new Date(c.hora_inicio).toLocaleTimeString()}</td>
            <td>{new Date(c.hora_fin).toLocaleTimeString()}</td>
            <td>{c.duracion.split('T')[1].substring(0, 8)}</td>
            <td>{c.estado}</td>
            <td className='accions-content'>
              <button className="btn btn-warning">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        )}

      </tbody>
    </table>
  </div>
  );
};

export default viajes;
