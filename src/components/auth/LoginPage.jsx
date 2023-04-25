import { userLogin } from "../../api/service";
import Layout from "../Layout";

function LoginPage({handleLogin, isLogged}){

  const handleSubmit = event => {
    event.preventDefault();

    const credentials = {
      email: event.target.username.value,
      password: event.target.password.value
    }

    console.log(event.target.checkbox.checked)

    const checked = event.target.checkbox.checked 

    userLogin(credentials, checked).then(()=>{
      handleLogin();
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