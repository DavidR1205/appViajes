import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearConductores = () => {

  const navigate = useNavigate();
  const [conductores, setConductores] = useState({
    primer_nombre: '', segundo_nombre: '', primer_apellido: '', segundo_apellido: '', tipo_documento: '', numero_documento: '', genero: '', nacionalidad: '', fecha_nacimiento: '',
    grado_escolaridad: '', estudios_activos: '', segundo_idioma: '', profesion: '',
    pais: '', departamento: '', ciudad: '', barrio: '', direccion: '', tipo_vivienda: '', celular: '', correo_electronico: '', estado_civil: '', medio_transporte: '',
    fecha_ingreso: '', eps: '', arl: '', fondo_cesantias: '', fondo_pension: '', cargo: '', tipo_contrato: '', correo_empresarial: '', salario: ''
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
                <label htmlFor="primer_nombre">Primer Nombre: </label>
                <input type="text" onChange={handleChanges} name="primer_nombre" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="segundo_nombre">Segundo Nombre: </label>
                <input type="text" onChange={handleChanges} name="segundo_nombre" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="primer_apellido">Primer Apellido: </label>
                <input type="text" onChange={handleChanges} name="primer_apellido" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="segundo_apellido">Segundo Apellido: </label>
                <input type="text" onChange={handleChanges} name="segundo_apellido" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="tipo_documento">Tipo Documento: </label>
                <input type="text" onChange={handleChanges} name="tipo_documento" className='input-formConductor' />
              </div>
            </div>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="numero_documento">Numero Documento: </label>
                <input type="number" onChange={handleChanges} name="numero_documento" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="genero">Genero: </label>
                <input type="text" onChange={handleChanges} name="genero" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="nacionalidad">Nacionalidad: </label>
                <input type="text" onChange={handleChanges} name="nacionalidad" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="fecha_nacimiento">Fecha Nacimiento: </label>
                <input type="date" onChange={handleChanges} name="fecha_nacimiento" className='input-formConductor' />
              </div>
            </div>
          </div>
          <div className='title-formConductores'>
            <h3>Datos Personales</h3>
          </div>
          <div className='elementFormConductores'>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="pais">Pais: </label>
                <input type="text" onChange={handleChanges} name="pais" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="departamento">Departamento: </label>
                <input type="text" onChange={handleChanges} name="departamento" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="ciudad">Ciudad: </label>
                <input type="text" onChange={handleChanges} name="ciudad" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="barrio">Barrio: </label>
                <input type="text" onChange={handleChanges} name="barrio" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="direccion">Direccion: </label>
                <input type="text" onChange={handleChanges} name="direccion" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="tipo_vivienda">Tipo Vivienda: </label>
                <input type="text" onChange={handleChanges} name="tipo_vivienda" className='input-formConductor' />
              </div>
            </div>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="celular">Celular: </label>
                <input type="number" onChange={handleChanges} name="celular" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="correo_electronico">Correo Electronico: </label>
                <input type="email" onChange={handleChanges} name="correo_electronico" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="estado_civil">Estado Civil: </label>
                <input type="text" onChange={handleChanges} name="estado_civil" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="medio_transporte">Medio Transporte: </label>
                <input type="text" onChange={handleChanges} name="medio_transporte" className='input-formConductor' />
              </div>
            </div>
          </div>
          <div className='title-formConductores'>
            <h3>Datos Laborales</h3>
          </div>
          <div className='elementFormConductores'>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="fecha_ingreso">Fecha Ingreso: </label>
                <input type="date" onChange={handleChanges} name="fecha_ingreso" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="eps">EPS: </label>
                <input type="text" onChange={handleChanges} name="eps" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="arl">ARL: </label>
                <input type="text" onChange={handleChanges} name="arl" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="fondo_cesantias">Fondo Cesantias: </label>
                <input type="text" onChange={handleChanges} name="fondo_cesantias" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="fondo_pension">Fondo Pension: </label>
                <input type="text" onChange={handleChanges} name="fondo_pension" className='input-formConductor' />
              </div>
            </div>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="cargo">Cargo: </label>
                <input type="text" onChange={handleChanges} name="cargo" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="tipo_contrato">Tipo Contrato: </label>
                <input type="text" onChange={handleChanges} name="tipo_contrato" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="correo_empresarial">Correo Empresarial: </label>
                <input type="email" onChange={handleChanges} name="correo_empresarial" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="salario">Salario: </label>
                <input type="number" onChange={handleChanges} name="salario" className='input-formConductor' />
              </div>
            </div>
          </div>
          <div className='title-formConductores'>
            <h3>Datos Educativos</h3>
          </div>
          <div className='elementFormConductores'>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="grado_escolaridad">Grado Escolaridad: </label>
                <input type="text" onChange={handleChanges} name="grado_escolaridad" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="estudios_activos">Estudios Activos: </label>
                <input type="text" onChange={handleChanges} name="estudios_activos" className='input-formConductor' />
              </div>
            </div>
            <div className='section-FormConductores'>
              <div className='camp-input'>
                <label htmlFor="segundo_idioma">Segundo Idioma: </label>
                <input type="text" onChange={handleChanges} name="segundo_idioma" className='input-formConductor' />
              </div>
              <div className='camp-input'>
                <label htmlFor="profesion">Profesion: </label>
                <input type="text" onChange={handleChanges} name="profesion" className='input-formConductor' />
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
