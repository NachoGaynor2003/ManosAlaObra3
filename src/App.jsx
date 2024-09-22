import './App.css';
import React, { useState } from 'react';
import Encabezado from './Components/Atoms/Encabezado';
import Lista from './Components/Atoms/Lista';
import InputTask from './Components/Atoms/InputTask';
import Task from './Components/Atoms/ClaseTarea'; // Importamos la clase Task

function App() {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas

  const DeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Función para agregar una nueva tarea al array
  const addTask = (title) => {
    if(title.trim() !== ""){
      const newTask = new Task(title);
      setTasks([...tasks, newTask]);
    }
  };

  // Función para alternar el estado de la tarea (Completada o Pendiente)
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map(task => {
        if (task.id === taskId) {
          const nuevoEstado =
            task.estado === 'Completada' ? 'Pendiente' : 'Completada';
          return { ...task, estado: nuevoEstado };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <Encabezado />
      <InputTask onAdd={addTask} />
      <Lista tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={DeleteTask} />
    </div>
  );
}

export default App;
