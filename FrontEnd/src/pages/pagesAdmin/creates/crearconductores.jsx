import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearConductores = () => {
    const navigate = useNavigate();
    const [conductor, setConductor] = useState({
        id_empleado: '',
        primer_nombre: '',
        primer_apellido: '',
        nivel_educativo: '',
        cargo: '',
        salario: ''
    });

    const handleChanges = (e) => {
        setConductor({ ...conductor, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8082/conductores/', conductor)
            .then(response => {
                Swal.fire('Exitoso', 'Conductor ingresado con éxito', 'success');
                navigate('/conductores'); 
            })
            .catch(error => {
                console.log(error);
                Swal.fire('Error', 'Ocurrió un error al ingresar el conductor', 'error');
            });
    };

    return (
        <div className='form-crearConductor'>
            <div className='container-formConductor'>
                <form onSubmit={handleSubmit}>
                    <div className='title-formConductor'>
                        <h3>Ingresar Conductor</h3>
                    </div>
                    <div className='elementFormConductor'>
                        <div className='camp-input-conductor'>
                            <label htmlFor="id_empleado">Id Empleado: </label>
                            <input type="number" onChange={handleChanges} name='id_empleado' className='input-formConductor' />
                        </div>
                        <div className='camp-input-conductor'>
                            <label htmlFor="primer_nombre">Primer Nombre: </label>
                            <input type="text" onChange={handleChanges} name='primer_nombre' className='input-formConductor' />
                        </div>
                        <div className='camp-input-conductor'>
                            <label htmlFor="primer_apellido">Primer Apellido: </label>
                            <input type="text" onChange={handleChanges} name='primer_apellido' className='input-formConductor' />
                        </div>
                        <div className='camp-input-conductor'>
                            <label htmlFor="nivel_educativo">Nivel Educativo: </label>
                            <input type="text" onChange={handleChanges} name='nivel_educativo' className='input-formConductor' />
                        </div>
                        <div className='camp-input-conductor'>
                            <label htmlFor="cargo">Cargo: </label>
                            <input type="text" onChange={handleChanges} name='cargo' className='input-formConductor' />
                        </div>
                        <div className='camp-input-conductor'>
                            <label htmlFor="salario">Salario: </label>
                            <input type="number" onChange={handleChanges} name='salario' className='input-formConductor' />
                        </div>
                    </div>
                    <div className='button-formConductor'>
                        <button type='submit' className='btn btn-success'>Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CrearConductores;
