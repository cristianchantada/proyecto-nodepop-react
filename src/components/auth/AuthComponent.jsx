import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext";

function AuthComponent({ children }) {
  const location = useLocation();
  const {isLogged} = useContext(AuthContext);

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return <div className="container authComponentContainer">{children}</div>;
  }
}

export default AuthComponent;
