import { Link } from "react-router-dom"
import logoEmpresa from "../../assets/image/homeImage/logoCootransporte.png"


const navHome = () => {
  return (
    <div>
      <nav className="navegacion">
          <Link className="logoNav" to="/"><img src={logoEmpresa} alt="" /></Link>
          <ul className="listaNav">
            <li><Link className="link" to="/" >Inicio</Link></li>
            <li><Link className="link" to="/rutas" >Rutas</Link></li>
            <li><Link className="link" to="/login" >Portal</Link></li>
          </ul>
      </nav>
    </div>
  )
}

export default navHome