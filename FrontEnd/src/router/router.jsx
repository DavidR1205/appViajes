import { Route, Routes } from "react-router-dom"
import Home from "../pages/pagesHome/home"
import Rutas from "../pages/pagesHome/rutas"
import RutasAdmin from "../pages/pagesAdmin/rutasA"
import Conductores from "../pages/pagesAdmin/conductores"
import Informes from "../pages/pagesAdmin/informes"
import Programar from "../pages/pagesAdmin/programar"
import Usuarios from "../pages/pagesAdmin/usuarios"
import Vehiculos from "../pages/pagesAdmin/vehiculos"
import Login from "../pages/pagesLogin/login"
import CrearVehiculos from "../pages/pagesAdmin/creates/crearVehiculos"
import CrearRutas from "../pages/pagesAdmin/creates/crearRutasA"

const router = () => {
    return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rutas" element={<Rutas/>}/>
          <Route path="/rutasA" element={<RutasAdmin/>}/>
          <Route path="/conductores" element={<Conductores/>}/>
          <Route path="/informes" element={<Informes/>}/>
          <Route path="/programar" element={<Programar/>}/>
          <Route path="/usuarios" element={<Usuarios/>}/>
          <Route path="/vehiculos" element={<Vehiculos/>}/>
          <Route path="/crear_vehiculos" element={<CrearVehiculos/>}/>
          <Route path="/crear_rutas" element={<CrearRutas/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    )
  }
  
  export default router