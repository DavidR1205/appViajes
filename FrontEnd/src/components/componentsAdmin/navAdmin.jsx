import { Link, useNavigate } from "react-router-dom";
import Logo2 from "../../assets/image/adminImage/logo2.png";
import programarlogo from "../../assets/image/adminImage/programarlogo.png";
import conductoreslogo from '../../assets/image/adminImage/conductoreslogo.png';
import vehiculoslogo from '../../assets/image/adminImage/vehiculoslogo.png';
import informeslogo from '../../assets/image/adminImage/informeslogo.png';
import usuarioslogo from '../../assets/image/adminImage/usuarioslogo.png';
import iniciarsesionlogo from '../../assets/image/adminImage/iniciarsesionlogo.png';
import rutaslogo from '../../assets/image/adminImage/rutaslogo.png';
import "../../assets/css/estilosAdmin/estilos.css"


const navAdmin = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ height: '30px' }}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={Logo2} alt="Logo de Cootransporte" style={{ width: '110px', marginRight: '50px' }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
                <Link to="/programar">
                  <img src={programarlogo} alt="Programar Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link" to="/programar" style={{ fontSize: '18px' }}>Despachos</Link>
              </li>
              <li className="nav-item d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
                <Link to="/conductores">
                  <img src={conductoreslogo} alt="Conductores Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link" to="/conductores" style={{ fontSize: '18px' }}>Conductores</Link>
              </li>
              <li className="nav-item d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
                <Link to="/vehiculos">
                  <img src={vehiculoslogo} alt="Vehículos Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link" to="/vehiculos" style={{ fontSize: '18px' }}>Vehículos</Link>
              </li>
              <li className="nav-item d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
                <Link to="/usuarios">
                  <img src={usuarioslogo} alt="Usuarios Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link" to="/usuarios" style={{ fontSize: '18px' }}>Usuarios</Link>
              </li>
              <li className="nav-item d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
                <Link to="/rutas">
                  <img src={rutaslogo} alt="Rutas Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link" to="/rutasA" style={{ fontSize: '18px' }}>Rutas</Link>
              </li>
              <li className="nav-item d-flex flex-column align-items-center" style={{ marginRight: '30px' }}>
                <Link to="/novedades">
                  <img src={informeslogo} alt="Informes Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link" to="/novedades" style={{ fontSize: '18px' }}>Novedades</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item d-flex flex-column align-items-center">
                <Link to="/iniciar-sesion">
                  <img src={iniciarsesionlogo} alt="Iniciar Sesión Logo" style={{ width: '30px', marginTop: '5px' }} />
                </Link>
                <Link className="nav-link small-link" to="/login" style={{ fontSize: '18px' }} onClick={handleLogout}>Cerrar Sesión</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navAdmin
