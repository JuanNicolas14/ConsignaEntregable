import React from 'react'

const Card = ({nombre, apellido, genero}) => {
  return (
    <div>
      <h1>Hola {nombre} {apellido}</h1>
      <p>Sabemos que tu genero favorito es: {genero}</p>
    </div>
  )
}

export default Card