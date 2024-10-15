import React from 'react'
import useAuth from "../../hooks/UseAuth.js"

const conductores = () => {
  useAuth();
  return (
    <div>
      <h1>Conductores</h1>
    </div>
  )
}

export default conductores
