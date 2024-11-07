import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import "../../../assets/css/estilosAdmin/estilosCreates/estilosCreateNovedad.css"
import useAuth from "../../../hooks/UseAuth.js"

const createNovedad = () => {
    useAuth();

    const { id_viaje } = useParams();
    const navigate = useNavigate();
    const [novedad, setNovedad] = useState({
        tipo_novedad: '', observacion: '', id_viaje: id_viaje || ''
    })

    const handleChanges = (e) => {
        setNovedad({ ...novedad, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/novedades/', novedad)
            .then(response => Swal.fire('Exitoso', 'Novedad Ingresada con Exito', 'success'))
            .then(() => {
                navigate('/programar')
            })

            .catch(error => console.log(error))
    }

    return (
        <div className='form-crearNovedad'>
            <div className='container-formNovedad'>
                <form onSubmit={handleSubmit}>
                    <div className='title-formNovedad'>
                        <h3>Ingresar Novedad</h3>
                    </div>
                    <div className='elementFormNovedad'>
                        <div className='camp-input'>
                            <label htmlFor="tipo_novedad">Tipo Novedad: </label>
                            <input type="text" onChange={handleChanges} name='tipo_novedad' className='input-formNovedad' />
                        </div>
                        <div className='camp-input'>
                            <label htmlFor="observacion">Observacion: </label>
                            <input type="text" onChange={handleChanges} name='observacion' className='input-formNovedad' />
                        </div>
                    </div>
                    <div className='button-formNovedad d-grid gap-2'>
                        <button type='submit' className='btn btn-success'>Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default createNovedad
