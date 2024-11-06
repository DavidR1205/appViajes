import { useState,useEffect } from "react"
import axios from "axios"
import Swal from "sweetalert2"

const EditarRutas =({id_ruta}) =>{
    const [rutas,setRutas] = useState({id_ruta: '', codigo_ruta: '', nombre_ruta: ''});

    useEffect(() => {
        axios.get('http://localhost:8082/RutasA/${id_ruta}')
        .then(Response => setRutas(Response.data))
        .catch(error => console.error);
    }, [id_ruta]);

    const handleChange = (e) => {
        setRutas({...Rutas, [e.target.name]: e.target.values});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8082/RutasA/${id_ruta}', Rutas)
        .then(Response => Swal.fire('Correcto', 'Ruta actualizada', 'success'))
        .chath(error => console.error(error));
    }

    return (
        <div className="container">
            <h1>Editar Rutas</h1>
            <div className="card">
                <div className="card-header">
                    Editar una Ruta
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="number" value={ruta.id_ruta} onChange={handleChange} name="id_ruta" className="form-control" placeholder="Id" readOnly />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={ruta.codigo_ruta} onChange={handleChange} name="codigo_ruta" className="form-control" placeholder="Codigo" />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={ruta.nombre_ruta} onChange={handleChange} name="nombre_ruta" className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarRutas;