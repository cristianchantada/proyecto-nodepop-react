import { useNavigate, useLocation, useParams, NavLink, Link } from "react-router-dom";
import logo from '../../assets/img/node.png';
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

  return (
    <div className="container layoutContainer">
      <header>
        <Link className="Link" to={'/'}>
          <div className="img-title-container">
              <img className="logoImg" src={logo} alt="Logo de Node Pop" />
              <h1>NodePop</h1>
          </div>
        </Link>
        <nav>
          {isLogged ?
            <>
              {!byeBye ?
                <>
                  {location.pathname === '/adverts/new' || location.pathname === `/adverts/${id}` || location.pathname === `/404` ? <NavLink to='/'><Button title={'NodePop Home'}/></NavLink> : null }
                  {location.pathname === '/adverts' || location.pathname === `/adverts/${id}`|| location.pathname === `/404` ? <NavLink to='/adverts/new'><Button title={"Crear anuncio"} /></NavLink> : null }

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
          <p>&copy; Cristian Copyright 2023</p>
      </footer>
    </div>
  );
}

export default Layout;