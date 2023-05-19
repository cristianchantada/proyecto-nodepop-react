import { userLogin } from "../../api/service";
import Layout from "../common/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/LoginPage.css";
import { useState } from "react";

function LoginPage({ handleLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    resetError();

    const credentials = {
      email: event.target.username.value,
      password: event.target.password.value,
    };

    const checked = event.target.checkbox.checked;

    try{
      await userLogin(credentials, checked);
        handleLogin();
        const to = location.state?.from?.pathname || '/';
        navigate(to);
    } catch(error){
      setError(error);
    }
  };

  return (
    <Layout>
      <div className="container login">
        <form id="loginForm" onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <label htmlFor="">
            <input name="checkbox" type="checkbox" />
            ¿Desea guardar la contraseña?
          </label>
          <button type="submit">Login</button>
        </form>
        {error && (
          <p>{error.message}<span onClick={resetError} class="delete-icon">X</span></p>
        )}
      </div>
    </Layout>
  );
}

export default LoginPage;
