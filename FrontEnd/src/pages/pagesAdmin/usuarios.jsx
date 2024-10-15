import React from 'react'
import useAuth from "../../hooks/UseAuth.js"

const usuarios = () => {
  useAuth();

  return (
    <div>
      <h1>Usuarios</h1>
    </div>
  )
}

export default usuarios
