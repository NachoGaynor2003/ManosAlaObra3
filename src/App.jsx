import "./App.css";

function App() {
  return (
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
          <input type="checkbox" />
          Completed Task N-2
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
          <input type="checkbox" />
          Completed Task 1<p className="TachoBasura">&#128465;</p>
        </div>
      </div>
    </div>
  );
}

export default App;
