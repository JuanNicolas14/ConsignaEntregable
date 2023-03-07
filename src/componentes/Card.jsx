import React from 'react'
import '../App.css'

const Card = ({nombre, apellido, genero}) => {
  return (
    <div className='card'>
      <h1>Hola {nombre} {apellido}</h1>
      <p>
        Sabemos que tu genero favorito es:
        {genero.length > 1 ? genero: " No escogido"}
      </p>
    </div>
  )
}

export default Card