import PropTypes from 'prop-types';
function Inputtask(props) {
  return (
    <div>
      <input type="checkbox" />
      {props.name}
      <p className="TachoBasura">&#128465;</p>
    </div>
  );
}

Inputtask.propTypes = {
  name: PropTypes.string.isRequired, // Especifica que `name` debe ser una cadena y es requerido
};

export default Inputtask;
