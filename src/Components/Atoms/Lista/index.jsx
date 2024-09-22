import PropTypes from 'prop-types';

function Lista({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? ( // Verifica si el array está vacío
        <p>No hay tareas disponibles.</p> // Mensaje cuando no hay tareas
      ) : (
        <ul>
          {tasks
            .slice()
            .reverse()
            .map(
              (
                task // Invertimos el array de tareas
              ) => (
                <li key={task.id} className="item-tarea">
                  <label>
                    <input
                      type="checkbox"
                      checked={task.estado === 'Completada'}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                    <span
                      style={{
                        textDecoration:
                          task.estado === 'Completada'
                            ? 'line-through'
                            : 'none',
                      }}
                    >
                      {task.titulo}
                    </span>
                  </label>
                  <button
                    className="TachoBasura"
                    onClick={() => deleteTask(task.id)}
                  >
                    &#128465;
                  </button>
                </li>
              )
            )}
        </ul>
      )}
    </div>
  );
}

Lista.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Lista;
