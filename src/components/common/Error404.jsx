import '../../styles/Error404.css';
import Layout from "./Layout";
import Button from './Button';
import { NavLink } from 'react-router-dom';

function Error404({handleLogout, isLogged, handleNewAdvertButton}) {

  return(
    <Layout isLogged={isLogged} handleLogout={handleLogout} handleNewAdvertButton={handleNewAdvertButton}>
      <div className="container404">
        <h2>Error 404</h2>
        <p>Lo siento, la página que estás buscando no se encuentra disponible.</p>
        <NavLink to='/'><Button title={'Volver a NodePop'} /></NavLink>
      </div>
    </Layout>
  );
}

export default Error404;