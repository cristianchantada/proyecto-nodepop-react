import Button from "./Button";

function Confirm({handleDefinitiveDelete, handleCancel}) {

  return(
    <div className={'container ConfirmContainer'}>
      <Button handleButtonClick={handleDefinitiveDelete} title={'Borrar definitivamente'} />
      <Button handleButtonClick={handleCancel} title={'Cancelar'} />
    </div>   
  );
}

export default Confirm;