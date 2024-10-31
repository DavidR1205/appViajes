import React from 'react'
import { getAllConductores } from '../../services/ConductoresService.js';
import { useEffect, useState } from "react"
import useAuth from "../../hooks/UseAuth.js"

const conductores = () => {
  useAuth();

  const [conductores, setConductores] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchConductores()
  }, [])

  const fetchConductores = async () => {
    try {
      const datos = await getAllConductores()
      setConductores(datos)

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
            <th className="custom-header">Primer Nombre</th>
            <th className="custom-header">Segundo Nombre</th>
            <th className="custom-header">Primer Apellido</th>
            <th className="custom-header">Segundo Apellido</th>
            <th className="custom-header">Cargo</th>
            <th className="custom-header">EPS</th>
            <th className="custom-header">ARL</th>
            <th className="custom-header">Tipo Contrato</th>
            <th className="custom-header">Celular</th>
            <th className="custom-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {conductores.map((c) =>
            <tr key={c.id_empleado}>
              <td>{c.primer_nombre}</td>
              <td>{c.segundo_nombre}</td>
              <td>{c.primer_apellido}</td>
              <td>{c.segundo_apellido}</td>
              <td>{c.cargo}</td>
              <td>{c.eps}</td>
              <td>{c.arl}</td>
              <td>{c.tipo_contrato}</td>
              <td>{c.celular}</td>
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

export default conductores
