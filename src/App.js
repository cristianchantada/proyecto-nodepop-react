import './App.css';
import LoginPage from './components/auth/LoginPage';
import AdvertsPage from './components/AdvertsPage';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
{/*       <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes> */}
      <LoginPage />
      <AdvertsPage />
      
    </div>
  );
}

export default App;
