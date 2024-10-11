import '../../assets/css/estilosLogin/estilosLogin.css'
import logo from '../../assets/image/loginImage/logo.png'
import usuario from '../../assets/image/loginImage/usuario.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='login-page'>
        <div className='user'>
          <Link to="/">
            <img src={usuario} alt="Logo Usuario" />
          </Link>
        </div>

        <div className='container'>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo de COOTRANSPORTE"/>
            </Link>
          </div>
          <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <form action="login.php" method="post">
              <label htmlFor="email">Correo:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
