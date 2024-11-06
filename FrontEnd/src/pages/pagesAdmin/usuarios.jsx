import React from 'react'
import useAuth from "../../hooks/UseAuth.js"
import { useEffect, useState } from "react"
import { getAllUsuarios } from '../../services/UsuariosServices.js'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import axios from 'axios'

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

  const handleDelete = (id_usuario) => {
    Swal.fire({
      title: 'Esta seguro que desea eliminarlo?',
      text: 'Una vez eliminado no podrá recuperarlo',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8082/usuarios/${id_usuario}`)
          .then(() => setUsuarios(usuarios.filter(c => c.id_usuario !== id_usuario)))
          .catch(error => console.log(error));
        Swal.fire('Eliminado', 'El Usuario ha sido eliminado con éxito', 'success');
        fetchUsuarios();
      }
    });
  }

  return (
    <div className="tabla-container">

      <div className="add-button-container">
        <Link to="/crear_usuario">
        <button className="btn btn-success">Agregar</button>
        </Link>
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
              <td>{c.primer_nombre_user}</td>
              <td>{c.segundo_nombre_user}</td>
              <td>{c.primer_apellido_user}</td>
              <td>{c.segundo_apellido_user}</td>
              <td>{c.correo}</td>
              <td>{c.estado_user}</td>
              <td className='accions-content'>
                <button className="btn btn-warning">Editar</button>
                <button onClick={()=> handleDelete(c.id_usuario)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>

    </div>
  )
}

export default usuarios
