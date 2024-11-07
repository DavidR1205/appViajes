import React from 'react'
import useAuth from "../../hooks/UseAuth.js"
import "../../assets/css/estilosAdmin/estilostabla.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { getAllNovedades } from '../../services/NovedadServices.js';

const novedades = () => {
  useAuth();

  const [novedad, setNovedad] = useState([])
  const [erro, setError] = useState('')
  const [filteredNovedades, setFilteredNovedades] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNovedad()
  }, [])

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredNovedades(novedad);
    } else {
      const filtered = novedad.filter((n) =>
        `${n.numero_interno} ${n.codigo_ruta} ${n.nombre_ruta} ${n.hora_inicio} ${n.tipo_novedad} ${n.observacion}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
      setFilteredNovedades(filtered);
    }
  }, [searchQuery, novedad]);


  const fetchNovedad = async () => {
    try {
      const datos = await getAllNovedades()
      setNovedad(datos)
      setFilteredNovedades(datos);
    } catch (error) {
      setError(erro)
    }
  }

  const handleDelete = (id_novedad) => {
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
        axios.delete(`http://localhost:8082/novedades/${id_novedad}`)
          .then(() => setNovedad(novedad.filter(c => c.id_novedad !== id_novedad)))
          .catch(error => console.log(error));
        Swal.fire('Eliminado', 'La Novedad ha sido eliminada con éxito', 'success');
        fetchNovedad();
      }
    });
  }

  return (
    <div className="tabla-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar Novedad"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="custom-header">Fecha Viaje</th>
            <th className="custom-header">Información Viaje</th>
            <th className="custom-header">Tipo Novedad</th>
            <th className="custom-header">Observacion</th>
            <th className="custom-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredNovedades.map((c) =>
            <tr key={c.id_novedad}>
              <td>{new Date(c.fecha).toLocaleDateString()}</td>
              <td>{`${c.numero_interno} - ${c.codigo_ruta}-${c.nombre_ruta} - ${c.hora_inicio.split('T')[1].substring(0, 8)}`}</td>
              <td>{c.tipo_novedad}</td>
              <td>{c.observacion}</td>
              <td className='accions-content'>
                <button className="btn btn-warning">Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(c.id_novedad)}>Eliminar</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>

    </div>
  )
}

export default novedades
