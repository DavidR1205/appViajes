import '../../assets/css/estilosLogin/estilosLogin.css'
import logo from '../../assets/image/loginImage/logo.png'
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
        params: { correo: correo, contrasena: contrasena },
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
        <div className='containerLogin'>
          <div className="logoLogin">
            <Link to="/">
              <img src={logo} className='imageLogin' alt="Logo de COOTRANSPORTE" />
            </Link>
            <div className='containerTitle'>
              <h2 className="titleLogin">Iniciar Sesión</h2>
            </div>
            <div className="login-form">
              <form onSubmit={handleLogin}>
                <label htmlFor="email">Correo:</label><br />
                <input type="email" id="email" name="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required /><br />
                <label htmlFor="password">Contraseña:</label><br />
                <input type="password" id="password" name="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required /><br />
                <button type="submit" className='botonLogin'>Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
