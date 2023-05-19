import "../../styles/Button.css";

//Se cambia el nombre del fichero a Button.jsx (mayúscula).

function Button({ title, handleButtonClick }) {
  return (
    <div>
      <button onClick={handleButtonClick}>{title}</button>
    </div>
  );
}

export default Button;
