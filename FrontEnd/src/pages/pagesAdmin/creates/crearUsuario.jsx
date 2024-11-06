import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const crearUsuario = () => {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        primer_nombre_user: '', segundo_nombre_user: '', primer_apellido_user: '', segundo_apellido_user: '',
        tipo_documento: '', numero_documento: '', correo: '', estado_user: 'Activo', contrasena: '', id_rol: ''
    })
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/usuarios/roles')
            .then(response => setRoles(response.data))
            .catch(error => console.log(error))
    }, [])

    const handleChanges = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/usuarios/', usuario)
            .then(response => Swal.fire('Exitoso', 'Usuario Ingresado con Exito', 'success'))
            .then(() => {
                navigate('/usuarios');
            })

            .catch(error => console.log(error))
    }

    return (
        <div className='form-crearUsuarios'>
            <div className='container-formUsuarios'>
                <form onSubmit={handleSubmit}>
                    <div className='title-formUsuarios'>
                        <h3>Ingresar Usuario</h3>
                    </div>
                    <div className='elementFormVehiculos'>
                        <div className="section-FormUsuarios">
                            <div className='camp-input'>
                                <label htmlFor="primer_nombre_user">Primer Nombre: </label>
                                <input type="text" onChange={handleChanges} name="primer_nombre_user" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="segundo_nombre_user">Segundo Nombre: </label>
                                <input type="text" onChange={handleChanges} name="segundo_nombre_user" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="primer_apellido_user">Primer Apellido: </label>
                                <input type="text" onChange={handleChanges} name="primer_apellido_user" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="segundo_apellido_user">Segundo Apellido: </label>
                                <input type="text" onChange={handleChanges} name="segundo_apellido_user" className='input-formUsuarios' />
                            </div>
                        </div>
                        <div className='section-FormUsuarios'>
                            <div className='camp-input'>
                                <label htmlFor="tipo_documento">Tipo Documento</label>
                                <input type="text" onChange={handleChanges} name="tipo_documento" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="numero_documento">Numero de Documento: </label>
                                <input type="number" onChange={handleChanges} name="numero_documento" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="correo">Correo Electronico: </label>
                                <input type="email" onChange={handleChanges} name="correo" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="contrasena">Contraseña: </label>
                                <input type="text" onChange={handleChanges} name="contrasena" className='input-formUsuarios' />
                            </div>
                            <div className='camp-input'>
                                <label htmlFor="id_rol">Rol: </label>
                                <select name='id_rol' value={usuario.id_rol} onChange={handleChanges} className='input-formUsuarios'>
                                    <option value=""></option>
                                    {roles.map(rol => (
                                        <option key={rol.id_rol} value={rol.id_rol}>
                                            {rol.nombre_rol}
                                        </option>
                                    ))}
                                </select>
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

export default crearUsuario
