import React from 'react'
import useAuth from "../../hooks/UseAuth.js"

const informes = () => {
  useAuth();
  return (
    <div>
      <h1>Informes</h1>
    </div>
  )
}

export default informes
