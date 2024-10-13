import { getAllVehiculos } from "../../services/VehiculosServices.js"
import { useEffect, useState } from "react"

const vehiculos = () => {

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
  return (
    <div className="tabla-container">

      <div className="add-button-container">
        <button className="btn btn-success">Agregar</button>
      </div>


      <table className="table">
        <thead>
          <tr>
            <th className="custom-header">Numero Interno</th>
            <th className="custom-header">Placa</th>
            <th className="custom-header">Marca</th>
            <th className="custom-header">Modelo</th>
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
              <td>
                <button className="btn btn-warning">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          )}

        </tbody>
      </table>

    </div>
  )
}

export default vehiculos
