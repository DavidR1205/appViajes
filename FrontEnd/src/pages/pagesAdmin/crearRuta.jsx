import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'

const crearRuta = () => {

    const [rutas, setRutas] = useState({id_ruta : '',codigo_ruta: '', nombre_ruta: ''})
    const handleChange = (e) => {
        setRutas({...rutas, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/RutasA', rutas)
        .then(Response => Swal.fire('Existoso', 'Ruta registrada', 'sucess'))
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Registro de Rutas</h1>
            <div class="card">
                <div class="card-header">
                    Registrar una Ruta
                </div>
                <div class="card-body">
                    <h5 class="card-title">Llenar todos los campos</h5>
                    <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <input type="number" onChange={handleChange} name="idRuta" className="form-control" placeholder="Id"/>
                    </div>
                    <div class="mb-3">
                        <input type="text"  onChange={handleChange} name="codigoRuta" className="form-control" placeholder="Codigo"/>
                    </div>
                    <div class="mb-3">
                        <input type="text"  onChange={handleChange} name="nombreRuta" className="form-control" placeholder="Nombre"/>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Registrar</button>
                    </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default crearRuta