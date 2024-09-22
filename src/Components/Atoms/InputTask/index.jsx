import React, {useState} from 'react'
import Task from '../ClaseTarea';

function InputTask({onAdd}){
  const [TaskTitle,setTaskTitle]= useState(''); //Esto sera el estado de la tarea, el cual se inicializa vacio
  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);

  }
  const handleAddTask = () => {
    if (TaskTitle.trim()) {
      onAdd(TaskTitle)
      setTaskTitle('')
    }

  }


    return (
      <div className="contenedor-input" style={{ textAlign: 'center' }}>
        <input type="text" id="input-de-texto"  value={TaskTitle} onChange={handleInputChange}/>
        <button type="submit" onClick={handleAddTask}>Add</button>
      </div>
    );
}
export default InputTask