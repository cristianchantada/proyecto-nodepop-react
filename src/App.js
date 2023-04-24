import './App.css';
import LoginPage from './components/auth/LoginPage';
import AdvertsPage from './components/AdvertsPage';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div 
      className="App">
      {
        isLogged ?
          <AdvertsPage /> :
          <LoginPage setIsLogged={setIsLogged} />
      } 
    </div>
  );
}

export default App;
