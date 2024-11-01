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
    "/informes",
    "/rutasA",
    "/crear_vehiculos"
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