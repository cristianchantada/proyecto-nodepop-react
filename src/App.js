import { Route, Routes, Navigate } from "react-router-dom";
import AuthComponent from "./components/auth/AuthComponent";
import NewAdvertPage from "./components/NewAdvertPage";
import Error404 from "./components/common/Error404";
import LoginPage from "./components/auth/LoginPage";
import AdvertDetail from "./components/AdvertPage";
import AdvertsPage from "./components/AdvertsPage";
import "./App.css";


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
