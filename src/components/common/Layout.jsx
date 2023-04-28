import { useState } from "react";
import Button from "./Button";
import Confirm from "./Confirm";
import '../../styles/Layout.css'


function Layout ({isLogged, children, handleNewAdvertButton, handleLogout}) {

  const[byeBye, setByeBye] = useState(false)

  const handleConfirm = () => {
    setByeBye(true);
  }

  const handleDefinitive = () => {
    handleLogout();
  }

  const handleCancel = () => {
    setByeBye(false); 
  }

  return (
    <div className="container layoutContainer">
      <header>
        <h1>NodePop</h1>
        <nav>
          {isLogged ?
            <>
              {!byeBye ?
                <>
                  <Button handleButtonClick={handleNewAdvertButton} title={"Crear anuncio"} />
                  <Button handleButtonClick={handleConfirm} title={"Logout"} />
                </> 
              :
                <>
                  <p>¿Está seguro de que desea salir?</p>
                  <Confirm handleDefinitive={handleDefinitive} handleCancel={handleCancel} title={'Sí'} />
                </>
              }
            </> : null
          }
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
          <p>Cristian Copyright 2023</p>
      </footer>
    </div>
  );
}

export default Layout;