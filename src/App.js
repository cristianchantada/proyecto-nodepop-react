import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import AuthComponent from "./components/auth/AuthComponent";
import NewAdvertPage from "./components/NewAdvertPage";
import Error404 from "./components/common/Error404";
import { removeRequestHeaders } from "./api/client";
import LoginPage from "./components/auth/LoginPage";
import AdvertDetail from "./components/AdvertPage";
import AdvertsPage from "./components/AdvertsPage";
import { useState} from "react";
import "./App.css";
import { AuthContext } from "./components/auth/authContext";

function App({ isToken }) {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(isToken);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
    removeRequestHeaders();
    navigate("/login");
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{handleLogout, isLogged}}>
        <Routes>
          <Route
            path="/adverts"
            element={
              <AuthComponent>
                <AdvertsPage />
              </AuthComponent>
            }
          />
          <Route
            path="/adverts/:id"
            element={
              <AuthComponent>
                <AdvertDetail />
              </AuthComponent>
            }
          />
          <Route
            path="/adverts/new"
            element={
              <AuthComponent>
                <NewAdvertPage />
              </AuthComponent>
            }
          />
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          />
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route
            path="/404"
            element={
              <Error404 />
            }
          />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
