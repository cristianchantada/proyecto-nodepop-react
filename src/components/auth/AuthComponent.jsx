import { Navigate, useLocation } from "react-router-dom";

function AuthComponent({ isLogged, children }) {
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return <div className="container authComponentContainer">{children}</div>;
  }
}

export default AuthComponent;
