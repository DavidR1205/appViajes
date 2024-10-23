import React from 'react'
import useAuth from "../../hooks/UseAuth.js"
import { useEffect, useState } from "react"
import { getAllUsuarios } from '../../services/UsuariosServices.js'

const usuarios = () => {
  useAuth();

  const [usuarios, setUsuarios] = useState([])
  const [erro, setError] = useState('')

  useEffect(() => {
      fetchUsuarios()
  }, [])

  const fetchUsuarios = async () => {
    try {

      const datos = await getAllUsuarios()
      setUsuarios(datos)

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
          <th className="custom-header">Primer Nombre</th>
          <th className="custom-header">Segundo Nombre</th>
          <th className="custom-header">Primer Apellido</th>
          <th className="custom-header">Segundo Apellido</th>
          <th className="custom-header">Correo</th>
          <th className="custom-header">Estado</th>
          <th className="custom-header">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((c) =>
          <tr key={c.id_usuario}>
            <td>{c.primer_nombre}</td>
            <td>{c.segundo_nombre}</td>
            <td>{c.primer_apellido}</td>
            <td>{c.segundo_apellido}</td>
            <td>{c.correo}</td>
            <td>{c.estado}</td>
            <td>
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

export default usuarios
