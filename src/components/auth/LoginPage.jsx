import { userLogin } from "../../api/service";
import Layout from "../common/Layout";
import { useNavigate } from "react-router-dom";
import '../../styles/LoginPage.css'

function LoginPage({handleLogin}){

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const credentials = {
      email: event.target.username.value,
      password: event.target.password.value
    }

    const checked = event.target.checkbox.checked;

    userLogin(credentials, checked).then(()=>{
      handleLogin();
      navigate('/');
    });

  }

  return (
    <Layout>
      <div className="container login">
        <form id="loginForm" onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <label htmlFor=""><input name="checkbox" type="checkbox"/>¿Desea guardar la contraseña?</label>
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;