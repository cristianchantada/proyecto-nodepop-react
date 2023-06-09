import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import AuthComponent from "./components/auth/AuthComponent";
import { AuthContext } from "./components/auth/authContext";
import NewAdvertPage from "./components/NewAdvertPage";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "./components/common/Error404";
import LoginPage from "./components/auth/LoginPage";
import AdvertDetail from "./components/AdvertPage";
import AdvertsPage from "./components/AdvertsPage";
import { getAuth } from "./reactRedux/selectors";
import "./App.css";


function App() {
  const isLogged = useSelector(getAuth);
  
  return (
    <div className="App">
      <AuthContext.Provider value={{isLogged}}>
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
            element={<LoginPage />}
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
