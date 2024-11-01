import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth.js"
import { getAllVehiculos } from "../../services/VehiculosServices.js"
import { useEffect, useState} from "react"
import Swal from 'sweetalert2'
import axios from "axios";


const vehiculos = () => {

  useAuth();

  const [vehiculos, setVehiculos] = useState([])
  const [erro, setError] = useState('')

  useEffect(() => {
    fetchVehiculos()
  }, [])

  const fetchVehiculos = async () => {
    try {

      const datos = await getAllVehiculos()
      setVehiculos(datos)

    } catch (error) {
      setError(erro)
    }
  }

  const handleDelete = (id_vehiculo) => {
    Swal.fire({
      title: 'Esta seguro que desea eliminarlo?',
      text: 'Una vez eliminado no podrá recuperarlo',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8082/vehiculos/${id_vehiculo}`)
        .then(() => setVehiculos(vehiculos.filter(c => c.id_vehiculo !== id_vehiculo)))
        .catch(error => console.log(error));
        Swal.fire('Eliminado', 'El vehiculo ha sido eliminado con éxito', 'success');
        fetchVehiculos();
      }
    });
  }


  return (
    <div className="tabla-container">

      <div className="add-button-container">
        <Link to="/crear_vehiculos">
        <button className="btn btn-success">Agregar</button>
        </Link>
      </div>


      <table className="table">
        <thead>
          <tr>
            <th className="custom-header">Numero Interno</th>
            <th className="custom-header">Placa</th>
            <th className="custom-header">Marca</th>
            <th className="custom-header">Modelo</th>
            <th className="custom-header">Tipo</th>
            <th className="custom-header">Soat</th>
            <th className="custom-header">Revision Tecnicomecanica</th>
            <th className="custom-header">Tarjeta Operacion</th>
            <th className="custom-header">Aseguradora</th>
            <th className="custom-header">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((c) =>
            <tr key={c.id_vehiculo}>
              <td>{c.numero_interno}</td>
              <td>{c.placa}</td>
              <td>{c.marca}</td>
              <td>{c.modelo}</td>
              <td>{c.tipo_vehiculo}</td>
              <td>{new Date(c.fecha_soat).toLocaleDateString()}</td>
              <td>{new Date(c.fecha_tecno).toLocaleDateString()}</td>
              <td>{new Date(c.fecha_operacion).toLocaleDateString()}</td>
              <td>{c.aseguradora}</td>
              <td className='accions-content'>
                <button className="btn btn-warning">Editar</button>
                <button onClick={()=> handleDelete(c.id_vehiculo)} className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>

    </div>
  )
}

export default vehiculos
