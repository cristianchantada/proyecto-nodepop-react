import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import AuthComponent from './components/auth/AuthComponent';
import AdvertDetail from './components/AdvertPage';
import { removeRequestHeaders } from './api/client';
import LoginPage from './components/auth/LoginPage';
import AdvertsPage from './components/AdvertsPage';
import NewAdvert from './components/NewAdvert';
import { useState } from 'react';
import './App.css';


function App({isToken}) {

  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(isToken);

  const handleLogin = () => {
    setIsLogged(true);
  }

  const handleLogout = () => {
    setIsLogged(false);
    removeRequestHeaders();
    navigate('/login');
  }

  return (
    <div 
      className="App">
        <Routes>
            <Route 
              path='/adverts'
              element={
                <AuthComponent isLogged={isLogged}>
                  <AdvertsPage isLogged={isLogged} handleLogout={handleLogout} />
                </AuthComponent>
              } 
            />
            <Route 
              path='/adverts/:id'
              element={
                <AuthComponent isLogged={isLogged}>
                  <AdvertDetail /* isLogged={isLogged} handleLogout={handleLogout} */ />
                </AuthComponent>
              } 
            />
            <Route 
              path='/adverts/new'
              element={
                <AuthComponent isLogged={isLogged}>
                  <NewAdvert handleLogout={handleLogout}/>
                </AuthComponent>
              } 
            />
            <Route path='/login' element={<LoginPage handleLogin={handleLogin} />} />
            <Route path='/' element={<Navigate to='/adverts'/>} />
            <Route path='/404' element={<p>Hubo un error, Papito !</p>}/>
            <Route path='*' element={<Navigate to='/404' />} />
        </Routes>       
    </div>
  );
}

export default App;
