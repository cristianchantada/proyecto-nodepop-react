import Button from "./Button";

function Confirm({ handleDefinitive, handleCancel, title }) {
  return (
    <div className={"container ConfirmContainer"}>
      <Button handleButtonClick={handleDefinitive} title={title} />
      <Button handleButtonClick={handleCancel} title={"Cancelar"} />
    </div>
  );
}

export default Confirm;
