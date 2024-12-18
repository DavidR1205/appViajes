import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import "../../../assets/css/estilosAdmin/estilosCreates/estilosCreateRuta.css"
import useAuth from "../../../hooks/UseAuth.js"

const crearRutasA = () => {
    useAuth();

    const navigate = useNavigate();
    const [ruta, setRuta] = useState({ codigo_ruta: '', nombre_ruta: '' })

    const handleChanges = (e) => {
        setRuta({ ...ruta, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/rutasA/', ruta)
            .then(response => Swal.fire('Exitoso', 'Ruta Ingresada con Exito', 'success'))
            .then(() => {
                navigate('/rutasA')
            })

            .catch(error => console.log(error))
    }

    return (
        <div className='form-crearRuta'>
            <div className='container-formRuta'>
                <form onSubmit={handleSubmit}>
                    <div className='title-formRuta'>
                        <h3>Ingresar Ruta</h3>
                    </div>
                    <div className='elementFormRuta'>
                        <div className='camp-input-ruta'>
                            <label htmlFor="codigo_ruta">Codigo Ruta: </label>
                            <input type="text" onChange={handleChanges} name='codigo_ruta' className='input-formRuta'/>
                        </div>
                        <div className='camp-input-ruta'>
                            <label htmlFor="nombre_ruta">Nombre Ruta: </label>
                            <input type="text" onChange={handleChanges} name='nombre_ruta' className='input-formRuta'/>
                        </div>
                    </div>
                    <div className='button-formRuta d-grid gap-2'>
                        <button type='submit' className='btn btn-success'>Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default crearRutasA
