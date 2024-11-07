import { BrowserRouter as Router, useLocation } from "react-router-dom"
import LayoutPrincipal from "../src/layout/layoutPrincipal"
import LayoutAdmin from "./layout/layoutAdmin"
import LayoutLogin from "../src/layout/layoutLogin"
import Routes from "./router/router"

function App() {
  const location = useLocation()
  
  const adminRoutes = [
    "/conductores",
    "/programar",
    "/vehiculos",
    "/usuario",
    "/novedades",
    "/rutasA",
    "/crear_vehiculos",
    "/crear_rutas",
    "/crear_usuario",
    "/crear_conductores",
    "/crear_viaje",
    "novedades/crear_novedad"
  ]
  
  const loginRoutes = [
    "/login"
  ]

  return (
    <>
      {
        adminRoutes.some(route => location.pathname.startsWith(route)) ? (
          <LayoutAdmin>
            <Routes />
          </LayoutAdmin>
        ) : loginRoutes.some(route => location.pathname.startsWith(route)) ? (
          <LayoutLogin>
            <Routes />
          </LayoutLogin>
        ) : (
          <LayoutPrincipal>
            <Routes />
          </LayoutPrincipal>
        )
      }
    </>
  )
}

export default App;