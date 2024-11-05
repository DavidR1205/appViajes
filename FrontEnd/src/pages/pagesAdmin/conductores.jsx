import React from 'react';
import { getAllConductores } from '../../services/ConductoresService.js';
import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth.js";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Conductores = () => {
  useAuth();

  const [conductores, setConductores] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchConductores();
  }, []);

  const fetchConductores = async () => {
    try {
      const datos = await getAllConductores();
      setConductores(datos);
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = (id_empleado) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminarlo?',
      text: 'Una vez eliminado no podrá recuperarlo',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8082/conductores/${id_empleado}`)
          .then(() => {
            setConductores(conductores.filter(c => c.id_empleado !== id_empleado));
            Swal.fire('Eliminado', 'El conductor ha sido eliminado con éxito', 'success');
          })
          .catch(error => console.log(error));
      }
    });
  };

  return (
    <div className="tabla-container">
      <div className="add-button-container">
        <Link to="/crear_conductores">
          <button className="btn btn-success">Agregar</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="custom-header">Id Empleado</th>
            <th className="custom-header">Nombre</th>
            <th className="custom-header">Apellido</th>
            <th className="custom-header">Nivel Educativo</th>
            <th className="custom-header">Cargo</th>
            <th className="custom-header">Salario</th>
            <th className="custom-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {conductores.map((c) => (
            <tr key={c.id_empleado}>
              <td>{c.id_empleado}</td>
              <td>{c.nombre}</td>
              <td>{c.apellido}</td>
              <td>{c.nivel_educativo}</td>
              <td>{c.cargo}</td>
              <td>{c.salario}</td>
              <td className='accions-content'>
                <button className="btn btn-warning">Editar</button>
                <button onClick={() => handleDelete(c.id_empleado)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Conductores;

