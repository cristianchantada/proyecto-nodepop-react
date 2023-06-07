import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../../reactRedux/selectors";
import { useSelector } from "react-redux";

function AuthComponent({ children }) {
  const location = useLocation();
  const isLogged = useSelector(getAuth);

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return <div className="container authComponentContainer">{children}</div>;
  }
}

export default AuthComponent;
