function ListaItemCheckbox() {
  return (
    <div className="contenedor-de-tareas" style={{ textAlign: 'center' }}>
      <div className="item-tarea">
        <input type="checkbox" />
        Task N <p className="TachoBasura">&#128465;</p>
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
        Task K
        <p className="TachoBasura">&#128465;</p>
      </div>

      <div className="item-tarea">
        <input type="checkbox" />
        Task 2
        <p className="Tachobasura">&#128465;</p>
      </div>

      <div className="item-tarea">
        <input type="checkbox" checked />
        <del>Completed Task 1</del>
        <p className="TachoBasura">&#128465;</p>
      </div>
    </div>
  );
}
export default ListaItemCheckbox;
