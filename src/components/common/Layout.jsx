import { useLocation, useParams, NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/node.png";
import { useState, useContext  } from "react";
import "../../styles/Layout.css";
import { AuthContext } from "../auth/authContext";

function Layout({children}) {
  const [byeBye, setByeBye] = useState(false);

  const {handleLogout, isLogged} = useContext(AuthContext);

  const { id } = useParams();

  const handleConfirm = () => {
    setByeBye(true);
  };

  const handleDefinitive = () => {
    handleLogout();
  };

  const handleCancel = () => {
    setByeBye(false);
  };

  const location = useLocation();

  return (
    <div className="container layoutContainer">
      <header>
        <Link className="Link" to={"/"}>
          <div className="img-title-container">
            <img className="logoImg" src={logo} alt="Logo de Node Pop" />
            <h1>NodePop</h1>
          </div>
        </Link>
        <nav>
          {isLogged ? (
            <>
              {!byeBye ? (
                <>
                  {location.pathname === "/adverts/new" ||
                  location.pathname === `/adverts/${id}` ||
                  location.pathname === `/404` ? (
                    <NavLink to="/">
                      <button>NodePop Home</button>
                    </NavLink>
                  ) : null}
                  {location.pathname === "/adverts" ||
                  location.pathname === `/adverts/${id}` ||
                  location.pathname === `/404` ? (
                    <NavLink to="/adverts/new">
                      <button>Crear anuncio</button>
                    </NavLink>
                  ) : null}
                  <button onClick={handleConfirm}>Logout</button>
                </>
              ) : (
                <>
                  <p>¿Está seguro de que desea salir?</p>
                  <button onClick={handleDefinitive}>Sí</button>
                  <button onClick={handleCancel}>Cancelar</button>
                </>
              )}
            </>
          ) : null}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; Cristian Copyright 2023</p>
      </footer>
    </div>
  );
}

export default Layout;
