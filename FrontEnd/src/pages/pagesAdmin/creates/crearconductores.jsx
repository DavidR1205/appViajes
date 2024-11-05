import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearConductores = () => {
  const navigate = useNavigate();
  const [conductores, setConductores] = useState({
    id_empleado: '',
    nombre: '',
    apellido: '',
    nivel_educativo: '',
    cargo: '',
    salario: '',
    celular: '',
    direccion: ''
  });

  const handleChanges = (e) => {
    setConductores({ ...conductores, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/conductores/', conductores)
      .then(response => {
        Swal.fire('Exitoso', 'Conductor Ingresado con Éxito', 'success');
      })
      .then(() => {
        navigate('/conductores');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='form-crearConductores'>
      <div className='container-formConductores'>
        <form onSubmit={handleSubmit}>
          <div className='title-formConductores'>
            <h3>Ingresar Conductor</h3>
          </div>
          <div className='elementFormConductores'>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="id_empleado">Id Empleado: </label>
                <input type="number" onChange={handleChanges} name='id_empleado' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" onChange={handleChanges} name='nombre' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" onChange={handleChanges} name='apellido' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="nivel_educativo">Nivel Educativo: </label>
                <input type="text" onChange={handleChanges} name='nivel_educativo' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="cargo">Cargo: </label>
                <input type="text" onChange={handleChanges} name='cargo' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="salario">Salario: </label>
                <input type="number" onChange={handleChanges} name='salario' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="celular">Celular: </label>
                <input type="number" onChange={handleChanges} name='celular' className='input-formConductores' />
              </div>
              <div className='camp-input'>
                <label htmlFor="direccion">Dirección: </label>
                <input type="text" onChange={handleChanges} name='direccion' className='input-formConductores' />
              </div>
            </div>
          </div>
          <div className='button-formConductores'>
            <button type='submit' className='btn btn-success'>Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CrearConductores;
