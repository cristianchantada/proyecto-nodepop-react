import './App.css';
import LoginPage from './components/auth/LoginPage';
import AdvertsPage from './components/AdvertsPage';
import { useState } from 'react';
import { removeRequestHeaders } from './api/client';

function App({isToken}) {

  const [isLogged, setIsLogged] = useState(isToken);

  const handleLogin = () => {
    setIsLogged(true);
  }

  const handleLogout = () => {
    setIsLogged(false);
    removeRequestHeaders();
  }

  return (
    <div 
      className="App">
      {
        isLogged ?
          <AdvertsPage handleLogout={handleLogout} /> :
          <LoginPage handleLogin={handleLogin} />
      } 
    </div>
  );
}

export default App;
