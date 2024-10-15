import '../../assets/css/estilosLogin/estilosLogin.css'
import logo from '../../assets/image/loginImage/logo.png'
import usuario from '../../assets/image/loginImage/usuario.png'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
  

    try {
      const response = await axios.get('http://localhost:8082/login', {
        params: { correo: correo, contrasena: contrasena},
      });

      if (response.data && response.data.length > 0) {
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        navigate('/programar')
      } else {
        alert('Credenciales incorrectas. Intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error en el Inicio de Sesión:', error)
      alert('Hubo un error en el Inicio de Sesión. Intenta más tarde');
    }
  };


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
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Correo:</label>
              <input type="email" id="email" name="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)}  required />
              <button type="submit">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
