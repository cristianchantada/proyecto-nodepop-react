import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import '../../styles/Layout.css';
import Confirm from "./Confirm";
import Button from "./Button";


function Layout ({isLogged, children, handleNewAdvertButton, handleLogout}) {

  const[byeBye, setByeBye] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  const handleConfirm = () => {
    setByeBye(true);
  }

  const handleDefinitive = () => {
    handleLogout();
  }

  const handleCancel = () => {
    setByeBye(false); 
  }

  const handleGoHome = () => {
    navigate('/');
  }

  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="container layoutContainer">
      <header>
        <h1>NodePop</h1>
        <nav>
          {isLogged ?
            <>
              {!byeBye ?
                <>
                  {location.pathname === '/adverts/new' || location.pathname === `/adverts/${id}` ? <Button handleButtonClick={handleGoHome} title={'🏠NodePop'}/> : null }
                  {location.pathname === '/adverts' || location.pathname === `/adverts/${id}` ? <Button handleButtonClick={handleNewAdvertButton} title={"Crear anuncio"} /> : null }

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