import React from 'react';
import "../../assets/css/estilosAdmin/estilostabla.css"
import useAuth from "../../hooks/UseAuth.js"
import { getAllViajes, finalizarViaje } from '../../services/ViajesService.js';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import moment from 'moment'
import Swal from 'sweetalert2'
import axios from "axios";

const viajes = () => {
  useAuth();

  const [viaje, setViaje] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    fetchViajes()
  }, [])

  const fetchViajes = async () => {
    try {
      const datos = await getAllViajes()
      setViaje(datos)
    } catch (error) {
      setError(error)
    }
  }

  //Funcion para calcular la duracion del viaje
  const calcularDuracion = (horaInicio, horaFin) => {

    const inicio = moment(horaInicio, 'HH:mm:ss');
    const fin = moment(horaFin, 'HH:mm:ss');

    const duracionMs = fin.diff(inicio);

    const duracion = moment.duration(duracionMs);

    const hours = Math.floor(duracion.asHours()).toString().padStart(2, '0');
    const minutes = duracion.minutes().toString().padStart(2, '0');
    const format = `${hours}:${minutes}`;

    return format;
  }

  const handleFinalizar = async (id_viaje, horaInicio) => {

    const horaFin = moment().format('HH:mm:ss')
    const duracion = calcularDuracion(horaInicio, horaFin);

    try {
      const responseF = await finalizarViaje(id_viaje, horaFin, duracion);
      Swal.fire('Finalizado', 'Viaje finalizado con éxito', 'success')
        .then(() => {
          fetchViajes(); // Refrescar los viajes después de la notificación
        });
    } catch (error) {
      setError('Error al finalizar el viaje');
      Swal.fire('Error', 'No se pudo finalizar el viaje', 'error');
    }
  };

  const handleDelete = (id_viaje) => {
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
        axios.delete(`http://localhost:8082/programar/${id_viaje}`)
        .then(() => setViaje(viaje.filter(c => c.id_viaje !== id_viaje)))
        .catch(error => console.log(error));
        Swal.fire('Eliminado', 'El viaje ha sido eliminado con éxito', 'success');
        fetchViajes();
      }
    });
  }

  return (
    <div className="tabla-container">

      <div className="add-button-container">
        <Link to="/crear_viaje">
          <button className="btn btn-success">Agregar</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="custom-header">Vehiculo</th>
            <th className="custom-header">Conductor</th>
            <th className="custom-header">Ruta</th>
            <th className="custom-header">Fecha</th>
            <th className="custom-header">Hora Inicio</th>
            <th className="custom-header">Hora Fin</th>
            <th className="custom-header">Duracion</th>
            <th className="custom-header">Estado</th>
            <th className="custom-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {viaje.map((c) =>
            <tr key={c.id_viaje}>
              <td>{c.numero_interno}</td>
              <td>{`${c.primer_nombre} ${c.segundo_nombre} ${c.primer_apellido} ${c.segundo_apellido}`}</td>
              <td>{`${c.codigo_ruta} - ${c.nombre_ruta}`}</td>
              <td>{new Date(c.fecha).toLocaleDateString()}</td>
              <td>{c.hora_inicio.split('T')[1].substring(0, 8)}</td>
              <td>{c.hora_fin ? c.hora_fin.split('T')[1].substring(0, 8) : '-'}</td>
              <td>{c.duracion ? moment(c.duracion).utc().format('HH:mm:ss') : '-'}</td>
              <td>{c.estado}</td>
              <td className='accions-content'>
                <button className="btn btn-primary btn-sm" onClick={() => handleFinalizar(c.id_viaje, c.hora_inicio.split('T')[1].substring(0, 8))}>Finalizar</button>
                <button className="btn btn-warning btn-sm">Novedad</button>
                <button className="btn btn-danger btn-sm" onClick={()=> handleDelete(c.id_viaje)}>Eliminar</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
};

export default viajes;
