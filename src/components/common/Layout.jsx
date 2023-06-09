import { useLocation, useParams, NavLink, Link, useNavigate } from "react-router-dom";
import { getAuth } from "../../reactRedux/selectors";
import { useState} from "react";
import { logout } from "../../reactRedux/actions";
import logo from "../../assets/img/node.png";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Layout.css";
import { removeRequestHeaders } from "../../api/client";

function Layout({children}) {
  const [byeBye, setByeBye] = useState(false);

  const isLogged = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const handleConfirm = () => {
    setByeBye(true);
  };

  const handleDefinitive = () => {
    dispatch(logout());
    removeRequestHeaders();
    navigate("/login");
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
