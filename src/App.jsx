import './App.css';
import Encabezado from './Components/Atoms/Encabezado';
import Lista from './Components/Atoms/Lista';
import InputTask from './Components/Atoms/InputTask';

function App() {
  return (
    <div>
      <Encabezado></Encabezado>
      <InputTask></InputTask>
      <Lista></Lista>
    </div>
  );

  //agregar los parentesis para empezar a trabajar
  /*
    <div className="contenedor1">
      <h1 className="encabezado" style={{ textAlign: "center" }}>
        Lista de Tareas de Nacho
      </h1>
      <div className="contenedor-input" style={{ textAlign: "center" }}>
        <input type="text" id="input-de-texto" />
        <button type="submit">Add</button>
      </div>
      <div className="contenedor-de-tareas" style={{ textAlign: "center" }}>
        <div className="item-tarea">
          <input type="checkbox" />
          Task N<p className="TachoBasura">&#128465;</p>
        </div>
        <div className="item-tarea">
          <input type="checkbox" />
          Task N-1
          <p className="TachoBasura">&#128465;</p>
        </div>
        <div className="item-tarea">
          <input type="checkbox" checked />
          <del>Completed Task N-2</del>

          <p className="TachoBasura">&#128465;</p>
        </div>
        <div className="item-tarea">
          <input type="checkbox" />
          Task K<p className="TachoBasura">&#128465;</p>
        </div>
        <div className="item-tarea">
          <input type="checkbox" />
          Task 2<p className="TachoBasura">&#128465;</p>
        </div>
        <div className="item-tarea">
          <input type="checkbox" checked />
          <del>Completed Task 1</del>
          <p className="TachoBasura">&#128465;</p>
        </div>
      </div>
    </div>
  */
}

export default App;
