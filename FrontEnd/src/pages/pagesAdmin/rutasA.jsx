import React from 'react'
import { getAllRutas } from '../../services/RutasServices.js';
import { useEffect, useState } from "react"
import useAuth from "../../hooks/UseAuth.js"

const rutasA = () => {
    useAuth();

    const [rutas, setRutas] = useState([])
    const [erro, setError] = useState('')
  
    useEffect(() => {
        fetchRutas()
    }, [])
  
    const fetchRutas = async () => {
      try {
  
        const datos = await getAllRutas()
        setRutas(datos)
  
      } catch (error) {
        setError(erro)
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
          <th className="custom-header">Codigo Ruta</th>
          <th className="custom-header">Nombre Ruta</th>
          <th className="custom-header">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {rutas.map((c) =>
          <tr key={c.id_ruta}>
            <td>{c.codigo_ruta}</td>
            <td>{c.nombre_ruta}</td>
            <td className='accions-content'>
              <button className="btn btn-warning">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        )}

      </tbody>
    </table>

  </div>
  )
}

export default rutasA