import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault()
    if(isEmpty(task)) {
      console.log("Task empty")
      return
    }
    const newTask = {id: shortid.generate(), text: task}
    setTasks([...tasks, newTask])
    setTask("")
  } 

  return (
    <div className="container mt-5">
     <h1>Tareas</h1>
     <hr/>
     <div className="row">
       <div className="col-8">
        <h4 className="text-center">Lista de Tareas</h4>
        <ul className="list-group">
          {
            tasks.map((item) => (
              <li className="list-group-item" key={item.id}>
                <span className="lead">{item.text}</span>
                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                <button className="btn btn-warning btn-sm float-right">Editar</button>
              </li>              
            ))
          }
        </ul>

       </div>
       <div className="col-4">
        <h4 className="text-center">Formulario</h4>
        <form onSubmit={addTask}>
          <div>
          <input 
            type="text" 
            className="form-control mb-2" 
            placeholder="Ingrese la tarea..."
            onChange={(text) => setTask(text.target.value)}
            value={task}
          />
          <button type="submit" className="btn btn-success btn-sm float-right">Agregar</button>
          </div>
        </form>
       </div>
     </div>
    </div>
  )
}

export default App