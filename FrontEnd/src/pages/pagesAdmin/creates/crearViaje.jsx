import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const crearViaje = () => {

    const navigate = useNavigate();
    const [viajes, setViajes] = useState({
        hora_inicio: '', hora_fin: '00:00:00', duracion: '00:00:00', estado: 'En Curso', id_vehiculo: '', id_ruta: '', id_empleado: '',
        id_usuario: '', fecha: ''
    })
    const [vehiculos, setVehiculos] = useState([])
    const [ruta, setRuta] = useState([])
    const [conductores, setConductores] = useState([])
    const [usuario, setUsuario] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:8082/conductores')
            .then(response => setConductores(response.data))
            .catch(error => console.error(error))

        axios.get('http://localhost:8082/rutasA')
            .then(response => setRuta(response.data))
            .catch(error => console.error(error))

        axios.get('http://localhost:8082/vehiculos')
            .then(response => setVehiculos(response.data))
            .catch(error => console.error(error))

        axios.get('http://localhost:8082/usuarios')
            .then(response => setUsuario(response.data))
            .catch(error => console.error(error))
    }, [])

    const handleChanges = (e) => {
        setViajes({ ...viajes, [e.target.name] : e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/programar/', viajes)
            .then(response => Swal.fire('Exitoso', 'Viaje Ingresado con Exito', 'success'))
            .then(() => {
                navigate('/programar');
            })
    }

    return (
        <div className='form-crearViaje'>
            <div className='container-formViaje'>
                <form onSubmit={handleSubmit}>
                    <div className='title-formViaje'>
                        <h3>Programar Viaje</h3>
                    </div>
                    <div className='elementFormViaje'>
                        <div className='camp-input'>
                            <label htmlFor="fecha">Fecha: </label>
                            <input type="date" onChange={handleChanges} name="fecha" className='input-formUsuarios' />
                        </div>
                        <div className='camp-input'>
                            <label htmlFor="hora_inicio">Hora Inicio: </label>
                            <input type="time" onChange={handleChanges} name="hora_inicio" className='input-formUsuarios' />
                        </div>
                        <div className='camp-input'>
                            <label htmlFor="id_vehiculo">Vehiculo: </label>
                            <select name='id_vehiculo' value={viajes.id_vehiculo} onChange={handleChanges} className='input-formUsuarios'>
                                <option value=""></option>
                                {vehiculos.map(vehiculo => (
                                    <option key={vehiculo.id_vehiculo} value={vehiculo.id_vehiculo}>
                                        {vehiculo.numero_interno}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='camp-input'>
                            <label htmlFor="id_ruta">Ruta: </label>
                            <select name='id_ruta' value={viajes.id_ruta} onChange={handleChanges} className='input-formUsuarios'>
                                <option value=""></option>
                                {ruta.map(rutas => (
                                    <option key={rutas.id_ruta} value={rutas.id_ruta}>
                                        {rutas.codigo_ruta} {rutas.nombre_ruta}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='camp-input'>
                            <label htmlFor="id_empleado">Conductor: </label>
                            <select name='id_empleado' value={viajes.id_empleado} onChange={handleChanges} className='input-formUsuarios'>
                                <option value=""></option>
                                {conductores.map(conductor => (
                                    <option key={conductor.id_empleado} value={conductor.id_empleado}>
                                        {conductor.numero_documento}-{conductor.primer_nombre} {conductor.segundo_nombre} {conductor.primer_apellido} {conductor.segundo_apellido}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='camp-input'>
                            <label htmlFor="id_usuario">Usuario: </label>
                            <select name='id_usuario' value={viajes.id_usuario} onChange={handleChanges} className='input-formUsuarios'>
                                <option value=""></option>
                                {usuario.map(usuarios => (
                                    <option key={usuarios.id_usuario} value={usuarios.id_usuario}>
                                        {usuarios.correo}
                                    </option>
                                ))}
                            </select>
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

export default crearViaje
