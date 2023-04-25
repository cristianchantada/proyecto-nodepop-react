
function Button({title, handleButtonClick}) {

  return(
    <div>
      <button onClick={handleButtonClick}>{title}</button>       
    </div>
  )
}

export default Button;