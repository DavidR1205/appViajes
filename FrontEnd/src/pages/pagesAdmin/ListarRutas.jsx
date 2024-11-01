import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getAllRutas } from '../../services/RutasServices.js';
import { useEffect, useState } from "react"
import useAuth from "../../hooks/UseAuth.js"
import Swal from 'sweetalert2'

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

  const handleDelete = (id_ruta) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: '¡Si eliminas esto no se podra revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminalo',
    }).then((result) => { 
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8082/RutasA/${id_ruta}`)
          .then(() => setRutas(rutas.filter(c => c.id_ruta !== id_ruta)))
          .catch(error => console.log(error));
        Swal.fire('Deleted!', 'La ruta a sido eleminada, correctamente')
      }
    })
  }

  return (
    <div className="tabla-container">
      <br />
      <Link to="/InsertarR" className='btn btn-primary'> Insertar Ruta</Link>
      <br />
      <br />
      <h1>Listado de Rutas</h1>

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
              <td>
                <button className="btn btn-warning">Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(c.id_ruta)}>Eliminar</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default rutasA