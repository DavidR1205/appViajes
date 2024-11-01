import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'; 

const crearVehiculos = () => {

    const navigate = useNavigate();
    const[vehiculos, setVehiculos] = useState({id_vehiculo: '', placa: '', numero_interno: '', marca: '', modelo: '', fecha_soat: '', fecha_tecno: '', fecha_operacion: '', 
                                                aseguradora: '', color: '', capacidad: '', tipo_vehiculo: '', chasis: '', nombre_propietario: '', numero_propietario: ''})

    
    const handleChanges = (e) => {
        setVehiculos({...vehiculos, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/vehiculos/', vehiculos)
        .then(response => Swal.fire('Exitoso', 'Vehiculo Ingresado con Exito', 'success'))
        .then(()=> {
            navigate('/vehiculos');
        })

        .catch(error => console.log(error))
    }


    return (
        <div className='form-crearVehiculos'>
            <div className='container-formVehiculos'>
                <form onSubmit={handleSubmit}>
                    <div className='title-formVehiculos'>
                        <h3>Ingresar Vehiculo</h3>
                    </div>
                    <div className='elementFormVehiculos'>
                        <div className='section-FormVehiculos'>
                            <div className='camp-input'>
                                <label htmlFor="id_vehiculo">Id Vehiculo: </label>
                                <input type="number" onChange={handleChanges} name='id_vehiculo' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="placa">Placa: </label>
                                <input type="text" onChange={handleChanges} name='placa' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="numero_interno">Numero Interno: </label>
                                <input type="number" onChange={handleChanges} name='numero_interno' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="marca">Marca: </label>
                                <input type="text" onChange={handleChanges} name='marca' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="marca">Modelo: </label>
                                <input type="text" onChange={handleChanges} name='modelo' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="fecha_soat">Fecha Soat:</label>
                                <input type="date" onChange={handleChanges} name='fecha_soat' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="fecha_tecno">Fecha Revision Tecnicomecanica:</label>
                                <input type="date" onChange={handleChanges} name='fecha_tecno' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="fecha_operacion">Fecha Tarjeta de Operacion:</label>
                                <input type="date" onChange={handleChanges} name='fecha_operacion' className='input-formVehiculos' />
                            </div>
                        </div>
                        <div className='section-FormVehiculos'>
                            <div className='camp-input'>
                                <label htmlFor="aseguradora">Aseguradora: </label>
                                <input type="text" onChange={handleChanges} name='aseguradora' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="color">Color: </label>
                                <input type="text" onChange={handleChanges} name='color' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="capacidad">Capacidad: </label>
                                <input type="number" onChange={handleChanges} name='capacidad' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="tipo_vehiculo">Tipo de Vehiculo: </label>
                                <input type="text" onChange={handleChanges} name='tipo_vehiculo' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="chasis">Chasis: </label>
                                <input type="text" onChange={handleChanges} name='chasis' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="nombre_propietario">Nombres y Apellidos del Propietario: </label>
                                <input type="text" onChange={handleChanges} name='nombre_propietario' className='input-formVehiculos' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="numero_propietario">Celular Propietario</label>
                                <input type="number" onChange={handleChanges} name='numero_propietario' className='input-formVehiculos' />
                            </div>
                        </div>
                    </div>
                    <div className='button-formVehiculos'>
                        <button type='submit' className='btn btn-success'>Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default crearVehiculos
