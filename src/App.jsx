import { useState } from 'react'
import './App.css'
import Card from './componentes/Card'

function App() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    genero: '',
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if((usuario.nombre.length >= 3 && !usuario.nombre.includes(" ")) &&
        usuario.apellido.length >= 6) {
        setErr(false)
        setShow(true)
    } else {
        setShow(false)
        setErr(true)
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

          <label>
              Nombre:
          </label>
          <input 
            value={usuario.nombre} 
            type="text" 
            onChange={(e)=> setUsuario({...usuario, nombre: e.target.value})} 
          />

          <label>
              Apellido:
          </label>
          <input 
            value={usuario.apellido} 
            type="text" 
            onChange={(e)=> setUsuario({...usuario, apellido: e.target.value})} 
          />

          <select 
            value={usuario.genero} 
            onChange={(e)=> setUsuario({...usuario, genero: e.target.value})}
          >
            <option value="ninguno">Seleccionar genero</option>
            <option value="rock">Rock</option>
            <option value="electronica">Electronica</option>
            <option value="vallenato">Vallenato</option>
            <option value="salsa">Salsa</option>
          </select>

          <button>Enviar</button>

          {err && "Por favor chequea que la información sea correcta"}
      </form>
      {show  && 
        <Card nombre={usuario.nombre} 
              apellido={usuario.apellido} 
              genero={usuario.genero}
        />
      }
    </div>
  )
}

export default App
