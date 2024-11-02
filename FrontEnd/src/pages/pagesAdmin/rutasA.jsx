import React from 'react'
import { getAllRutas } from '../../services/RutasServices.js';
import { useEffect, useState } from "react"
import useAuth from "../../hooks/UseAuth.js"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const rutasA = () => {
    useAuth();

    const [ruta, setRuta] = useState([])
    const [erro, setError] = useState('')
  
    useEffect(() => {
        fetchRutas()
    }, [])
  
    const fetchRutas = async () => {
      try {
  
        const datos = await getAllRutas()
        setRuta(datos)
  
      } catch (error) {
        setError(erro)
      }
    }

    const handleDelete = (id_ruta) => {
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
          axios.delete(`http://localhost:8082/rutasA/${id_ruta}`)
          .then(() => setRuta(ruta.filter(c => c.id_ruta !== id_ruta)))
          .catch(error => console.log(error));
          Swal.fire('Eliminado', 'La Ruta ha sido Eliminada con Exito', 'success');
          fetchRutas();
        }
      });
    }

  return (
    <div className="tabla-container">

    <div className="add-button-container">
      <Link to="/crear_rutas">
      <button className="btn btn-success">Agregar</button>
      </Link>
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
        {ruta.map((c) =>
          <tr key={c.id_ruta}>
            <td>{c.codigo_ruta}</td>
            <td>{c.nombre_ruta}</td>
            <td className='accions-content'>
              <button className="btn btn-warning">Editar</button>
              <button onClick={()=> handleDelete(c.id_ruta)} className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        )}

      </tbody>
    </table>

  </div>
  )
}

export default rutasA